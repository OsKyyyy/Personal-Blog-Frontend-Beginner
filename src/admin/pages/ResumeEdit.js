import {useForm} from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router";

const ResumeEdit = () => {

    let { id } = useParams();
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const { data, fetchData: fetchList } = useFetch();
    const { fetchData } = useFetch();
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const listUrl = apiUrl + "/Resume/ListById?id=" + id;
        const listUrlOptions = {
            method: "GET",
            data: JSON.stringify({id}),
        };
        fetchList(listUrl, listUrlOptions);
    }, []);

    useEffect(() => {
        if(data?.Data){
            setValue("title", data.Data.Title);
            setValue("organization", data.Data.Organization);
            setValue("description", data.Data.Description);
            setChecked(data.Data.CurrentPosition);
            trigger("content");

            if (typeof data.Data.StartDate === "string") {
                const parts = data.Data.StartDate.split(".");
                if (parts.length === 3) {
                    const [day, month, year] = parts.map(Number);
                    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    setValue("startdate", formattedDate);
                }
            }
            if (typeof data.Data.EndDate === "string") {
                const parts = data.Data.EndDate.split(".");
                if (parts.length === 3) {
                    const [day, month, year] = parts.map(Number);
                    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    setValue("enddate", formattedDate);
                }
            }
        }
    }, [data]);

    useEffect(() => {
        if(checked){
            setIsDisabled(true);
        }
        else{
            setIsDisabled(false);
        }
    }, [checked]);

    const handleResumeUpdate = async (data) => {

        const title = data.title;
        const organization = data.organization;
        const description = data.description;
        const startdate = data.startdate;
        const enddate = data.enddate || null;
        const currentposition = checked;
        const updateuserid = localStorage.getItem("user");

        const resumeAddUrl = apiUrl + "/Resume/Update";
        const resumeAddOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({id:id, title:title, organization:organization, Description:description, startdate:startdate, enddate:enddate, currentposition:currentposition, updateuserid:updateuserid}),
            showToast: true,
            loadComponent: "admin/resume/list"
        };

        fetchData(resumeAddUrl, resumeAddOptions);
    }

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">ÖZGEÇMİŞ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleResumeUpdate)}>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Başlık</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
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
                                                   className="col-sm-2 col-form-label">Organizasyon</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('organization', {
                                                           required: 'Organizasyon gereklidir'
                                                       })}
                                                />
                                                {errors.organization &&
                                                    <span style={{color: "red"}}>{errors.organization.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Açıklama</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control"
                                                          placeholder="Buraya yazınız.."
                                                          {...register('description', {
                                                              required: 'Açıklama gereklidir'
                                                          })}
                                                />
                                                {errors.description &&
                                                    <span style={{color: "red"}}>{errors.description.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Başlama Tarihi</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="date"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('startdate', {
                                                           required: 'Başlama Tarihi gereklidir'
                                                       })}
                                                />
                                                {errors.startdate &&
                                                    <span style={{color: "red"}}>{errors.startdate.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label"></label>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input className="form-check-input"
                                                           id="flexCheckDefault"
                                                           type="checkbox"
                                                           placeholder="Buraya yazınız.."
                                                           checked={checked}
                                                           onChange={() => setChecked((state) => !state)}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Devam ediyor
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Bitiş Tarihi</label>
                                            <div className="col-sm-10">
                                                <input className={`form-control ${isDisabled ? "bg-light opacity-50" : ""}`}
                                                       type="date"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('enddate', {
                                                           validate: (value) => {
                                                               if (isDisabled) return true;
                                                               return value ? true : 'Bitiş Tarihi gereklidir';
                                                           }
                                                       })}
                                                       disabled={isDisabled}
                                                />
                                                {errors.enddate &&
                                                    <span style={{color: "red"}}>{errors.enddate.message}</span>}
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
export default ResumeEdit;