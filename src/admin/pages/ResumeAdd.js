import {useForm} from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const ResumeAdd = () => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const { data, fetchData } = useFetch();
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if(checked){
            setIsDisabled(true);
        }
        else{
            setIsDisabled(false);
        }
    }, [checked]);

    const handleResumeAdd = async (data) => {

        const title = data.title;
        const organization = data.organization;
        const description = data.description;
        const startdate = data.startdate;
        const enddate = data.enddate || null;
        const currentposition = checked;
        const createuserid = localStorage.getItem("user");

        const resumeAddUrl = apiUrl + "/Resume/Add";
        const resumeAddOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({title:title, organization:organization, Description:description, startdate:startdate, enddate:enddate, currentposition:currentposition, createuserid:createuserid}),
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
                                    <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleResumeAdd)}>
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
export default ResumeAdd;