import {useEffect} from "react";
import {useSelector} from "react-redux";
import useFetch from "../../hooks/useFetch";
import {useForm} from "react-hook-form";

const About = () => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const { data, fetchData: listData } = useFetch();
    const { fetchData: addData } = useFetch();

    useEffect(() => {
        listData(apiUrl + "/About/List");
    }, []);

    useEffect(() => {
        if(data?.Data){
            setValue("title", data.Data.Title);
            setValue("content", data.Data.Content);
            setValue("name", data.Data.Name);
            setValue("dateOfBirth", data.Data.DateOfBirth);
            setValue("address", data.Data.Address);
            setValue("email", data.Data.Email);
            setValue("phone", data.Data.Phone);

            if (typeof data.Data.DateOfBirth === "string") {
                const parts = data.Data.DateOfBirth.split("."); // "." ile ayırıyoruz
                if (parts.length === 3) {
                    const [day, month, year] = parts.map(Number);

                    // YYYY-MM-DD formatına çevirme (HTML date input için uygun hale getirme)
                    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    setValue("dateOfBirth", formattedDate);
                    console.log("Formatted Date:", formattedDate); // Konsolda kontrol et
                }
            }
        }
    }, [data]);

    const handleAboutAdd = async (data) => {
        const title = data.title;
        const content = data.content;
        const name = data.name;
        const dateOfBirth = data.dateOfBirth;
        const address = data.address;
        const email = data.email;
        const phone = data.phone;
        const createuserid = localStorage.getItem("user");

        const addUrl = apiUrl + "/About/Add";
        const addOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ title: title, content: content, name: name, dateOfBirth: dateOfBirth, address: address, email: email, phone: phone, createuserid: createuserid }),
            showToast: true,
        };
        addData(addUrl, addOptions);
    };

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Hakkımda</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleAboutAdd)}>
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
                                                   className="col-sm-2 col-form-label">İçerik</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control"
                                                          placeholder="Buraya yazınız.."
                                                          {...register('content', {
                                                              required: 'İçerik gereklidir'
                                                          })}
                                                />
                                                {errors.content &&
                                                    <span style={{color: "red"}}>{errors.content.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">İsim Soyisim</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('name', {
                                                           required: 'İsim Soyisim gereklidir'
                                                       })}
                                                />
                                                {errors.name &&
                                                    <span style={{color: "red"}}>{errors.name.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Doğum Tarihi</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="date"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('dateOfBirth', {
                                                           required: 'Doğum Tarihi gereklidir'
                                                       })}
                                                />
                                                {errors.dateOfBirth &&
                                                    <span style={{color: "red"}}>{errors.dateOfBirth.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Adres</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('address', {
                                                           required: 'Adres gereklidir'
                                                       })}
                                                />
                                                {errors.address &&
                                                    <span style={{color: "red"}}>{errors.address.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">E-Posta</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('email', {
                                                           required: 'E-Posta gereklidir'
                                                       })}
                                                />
                                                {errors.email &&
                                                    <span style={{color: "red"}}>{errors.email.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="example-text-input"
                                                   className="col-sm-2 col-form-label">Telefon</label>
                                            <div className="col-sm-10">
                                                <input className="form-control"
                                                       type="text"
                                                       placeholder="Buraya yazınız.."
                                                       {...register('phone', {
                                                           required: 'Telefon gereklidir',
                                                           pattern: {
                                                               value: /^5\d{9}$/,
                                                               message: "Telefon numarası 5XXXXXXXXX formatında olmalıdır.",
                                                           },
                                                       })}
                                                />
                                                {errors.phone &&
                                                    <span style={{color: "red"}}>{errors.phone.message}</span>}
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
export default About;