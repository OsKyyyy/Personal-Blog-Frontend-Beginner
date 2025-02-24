import { saveAs } from "file-saver";

const ResumeSection = ({data}) => {

    const downloadPDF = () => {
        saveAs("personal-blog-cv.pdf", "personal-blog-cv.pdf");
    };

    return (
        <section className="ftco-section ftco-no-pb" id="resume-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-10 heading-section text-center ">
                        <h1 className="big big-2">Özgeçmiş</h1>
                        <h2 className="mb-4">Özgeçmiş</h2>
                        <p>Kariyerim boyunca edindiğim deneyimler ve eğitim geçmişim burada yer almaktadır. Aşağıda, aldığım eğitimler ve çalıştığım pozisyonlarla ilgili bilgiler bulunmaktadır.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        data?.Data?.length > 0 ? (
                            data.Data.map((item, index) => (
                                <>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8" key={index}>
                                        <div className="resume-wrap">
                                            <span className="date">{item.StartDate} - {item.EndDate == null || item.CurrentPosition ? "Devam Ediyor" : item.EndDate}</span>
                                            <h2>{item.Title}</h2>
                                            <span className="position">{item.Organization}</span>
                                            <p className="mt-4">{item.Description}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2"></div>
                                </>
                            ))
                    ) : (
                        <p>Veri Yok!</p>
                    )}
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 text-center ">
                        <p><button onClick={downloadPDF} className="btn btn-primary py-4 px-5">ÖZGEÇMİŞ İNDİR</button></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection