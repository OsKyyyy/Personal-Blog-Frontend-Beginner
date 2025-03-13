import { Editor } from "@tinymce/tinymce-react";
import useFetch from "../../hooks/useFetch";
import {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux";
import {useParams} from "react-router";

const BlogEdit = () => {

    let { id } = useParams();
    const callbackRef = useRef(null);
    const editorRef = useRef(null);
    const [content, setContent] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const { data, fetchData } = useFetch();
    const { data: dataList, fetchData: fetchList } = useFetch();
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const imageUrl = useSelector((state) => state.global.ImageUrl);

    useEffect(() => {
        const listUrl = apiUrl + "/Blog/ListById?id=" + id;
        fetchList(listUrl);
    }, []);

    useEffect(() => {
        if (dataList?.Status) {
            setValue("title", dataList.Data.Title);
            setContent(dataList.Data.Content);

            const tagsString = dataList.Data.Tags
                .map(tag => tag.Name)
                .join(", ");

            setValue("tags", tagsString);
        }
    }, [dataList]);

    useEffect(() => {
        setValue("content", "");
        register("content", { required: "İçerik gereklidir" });
    }, [setValue, register]);

    const handleEditorChange = (newContent) => {
        setContent(newContent);
        setValue("content", newContent || "");
        trigger("content");
    };

    const handleUploadImage = async (file, callback) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const uploadImageUrl = apiUrl + "/Image/UploadTemp";
            const uploadImageOptions = {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
                showToast: true,
            };
            fetchData(uploadImageUrl, uploadImageOptions);

        } catch (error) {
            toast.error("Beklenmeyen bir hata oluştu!");
        }
    };

    useEffect(() => {
        if (data?.status && data?.url) {
            const fullUrl = imageUrl + data.url;
            setImageUrls((prevUrls) => [...prevUrls, fullUrl]);
            callbackRef.current(fullUrl);
        }
    }, [data]);

    const deleteImage = async (url) => {
        try {
            const deleteTempUrl = apiUrl + "/Image/DeleteTemp";
            const deleteTempOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({ url }),
                showToast: true,
            };
            fetchData(deleteTempUrl, deleteTempOptions);

            let updatedContent = editorRef.current.getContent();
            updatedContent = updatedContent.replace(new RegExp(`<img src="${url}"[^>]*>`, "g"), "");
            editorRef.current.setContent(updatedContent);
            setImageUrls((prevImages) => prevImages.filter((img) => img !== url));
        } catch (error) {
            toast.error("Beklenmeyen bir hata oluştu!");
        }
    };

    const handleBlogUpdate = async (data) => {

        const formData = new FormData();
        formData.append("id", id);
        formData.append("title", data.title);
        formData.append("tags", data.tags);
        formData.append("content", data.content);
        formData.append("updateuserid", localStorage.getItem("user"));

        if (data.image[0]) {
            formData.append("image", data.image[0]);
        }

        const blogAddUrl = apiUrl + "/Blog/Update";
        const blogAddOptions = {
            method: "PUT",
            headers: { },
            data: formData,
            showToast: true,
            loadComponent: "admin/blog/list"
        };

        fetchData(blogAddUrl, blogAddOptions);
    };

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Blog Düzenle</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">

                                    <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleBlogUpdate)}>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Başlık</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       id="example-text-input"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('title', {
                                                           required: 'Başlık gereklidir'
                                                       })}
                                                />
                                                {errors.title &&
                                                    <span style={{color: "red"}}>{errors.title.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">İçerik</label>
                                            <div className="col-sm-10">
                                                <Editor
                                                    id='blogcontent'
                                                    apiKey="e656hqy5etcfz7hosi074jo0wj09nrou2maotvyme03z4lr9"
                                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                                    init={{
                                                        height: 400,
                                                        menubar: true,
                                                        plugins: "lists link image code",
                                                        toolbar:
                                                            "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code",
                                                        file_picker_callback: (callback, value, meta) => {
                                                            if (meta.filetype === "image") {
                                                                const input = document.createElement("input");
                                                                input.setAttribute("type", "file");
                                                                input.setAttribute("accept", "image/*");
                                                                input.onchange = async (e) => {
                                                                    const file = e.target.files[0];
                                                                    callbackRef.current = callback;
                                                                    await handleUploadImage(file, callback);
                                                                };
                                                                input.click();
                                                            }
                                                        }
                                                    }}
                                                    value={content}
                                                    onEditorChange={handleEditorChange}
                                                />
                                                {errors.content &&
                                                    <span style={{color: "red"}}>{errors.content.message}</span>}
                                            </div>
                                        </div>
                                        {imageUrls.length > 0 && (
                                            <div className="row mb-3">
                                                <label className="col-2 col-form-label">Yüklenen Görseller</label>
                                                <div className="col-10 d-flex flex-wrap gap-3">
                                                    {imageUrls.map((url, index) => (
                                                        <div key={index}
                                                             className="d-flex align-items-center border p-2 rounded">
                                                            <img src={url} alt={`Yüklenen Görsel ${index + 1}`}
                                                                 width="100" className="me-2"/>
                                                            <button type="button" className="btn btn-danger btn-sm"
                                                                    onClick={() => deleteImage(url)}>
                                                                Görseli Sil
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Etiket</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       id="example-text-input"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('tags', {
                                                           required: 'Etiket gereklidir'
                                                       })}
                                                />
                                                {errors.tags &&
                                                    <span style={{color: "red"}}>{errors.tags.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Görsel Yükle</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="file" accept="image/*"
                                                       {...register('image')}
                                                />
                                                {errors.image &&
                                                    <span style={{color: "red"}}>{errors.image.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-2"></div>
                                            <div className="col-10">
                                                <div className="form-group mb-3 text-center row mt-3 pt-1">
                                                    <div className="col-2">
                                                        <button className="btn btn-info w-100 waves-effect waves-light"
                                                                type="submit">Kaydet
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script>
                            © Personal Blog.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default BlogEdit;