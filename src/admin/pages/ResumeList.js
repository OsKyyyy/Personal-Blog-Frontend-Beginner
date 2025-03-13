import React, {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import useFetch from "../../hooks/useFetch";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";

const ResumeList = () => {
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const {data, loading, fetchData} = useFetch();
    const {fetchData: fetchDelete} = useFetch();
    const [tableData, setTableData] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const columns = [
        { name: "ID", selector: row => row.id, omit: true },
        { name: "Başlık", selector: row => row.title, sortable: true, width:"200px" },
        { name: "Açıklama", selector: row => row.description, sortable: true, width:"200px" },
        { name: "Organizasyon", selector: row => row.organization, sortable: true },
        { name: "Devam Ediyor", selector: row => row.currentPosition, sortable: true, width:"150px", cell: row => row.currentPosition ? "Evet" : "Hayır" },
        { name: "Başlangıç Tarihi", selector: row => row.startDate, sortable: true },
        { name: "Bitiş Tarihi", selector: row => row.endDate, sortable: true },
        { name: "Oluşturulma Tarihi", selector: row => row.createDate, sortable: true },
        {
            name: "İşlemler",
            cell: row =>
                <>
                    <Link to={`/admin/resume/edit/${row.id}`} className="btn btn-primary me-2"><i className="fas fa-pen"></i> Düzenle</Link>
                    <Button className="btn btn-danger" onClick={() => deleteResume(row.id)}><i className="fas fa-times"></i> Sil</Button>
                </>
        }
    ];

    const tableTranslations = {
        rowsPerPageText: "Sayfa başına satır:",
        rangeSeparatorText: " - ",
        noDataComponent: "Eşleşen kayıt bulunamadı",
    };

    const customStyles = {
        rows: {
            style: {
                minHeight: '56px',
            }
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#f8f9fa',
                padding: '10px',
                borderBottom: '2px solid #dee2e6',
            }
        },
        cells: {
            style: {
                fontSize: '14px',
            }
        },
    }

    const deleteResume = async (resumeId) => {

        const deleteUrl = apiUrl + "/Resume/Delete?id=" + resumeId;
        const deleteUrlOptions = {
            method: "DELETE",
            showToast: true,
            loadComponent: "admin/resume/list"
        };
        await fetchDelete(deleteUrl, deleteUrlOptions);

        setTableData(tableData.filter(resume => resume.id !== resumeId));
    }

    useEffect(() => {
        fetchData(apiUrl + "/Resume/List");
    }, []);

    useEffect(() => {
        if (data?.Data) {
            const formattedData = data.Data.map(item => ({
                id: item.Id,
                title: item.Title,
                description: item.Description,
                organization: item.Organization,
                currentPosition: item.CurrentPosition,
                startDate: item.StartDate,
                endDate: item.EndDate,
                createDate: item.CreateDate,
                createUser: item.CreateUser
            }));
            setTableData(formattedData);
        }
    }, [data]);

    const filteredItems = tableData.filter(
        item =>
            (item.title && item.title.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.organization && item.organization.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.startDate && item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.endDate && item.endDate.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.createDate && item.createDate.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.createUser && item.createUser.toLowerCase().includes(filterText.toLowerCase()))
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <div className="filter-container">
                <input type="text" placeholder="Ara..." id="filterInput" value={filterText} onChange={e => setFilterText(e.target.value)}/>
                <button className="close-btn" onClick={handleClear}>✖</button>
            </div>
        );
    }, [filterText, resetPaginationToggle]);

    if (loading) {
        return (
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="service-loader-container">
                            <div className="service-loader-overlay"></div>
                            <p className="service-loader-text">
                                Veriler Bekleniyor
                                <span className="service-loader-dot">.</span>
                                <span className="service-loader-dot">.</span>
                                <span className="service-loader-dot">.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">ÖZGEÇMİŞ LİSTESİ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <DataTable
                                        className="table  dt-responsive nowrap"
                                        style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        highlightOnHover
                                        paginationResetDefaultPage={resetPaginationToggle}
                                        subHeader
                                        subHeaderComponent={subHeaderComponentMemo}
                                        persistTableHead
                                        customStyles={customStyles}
                                        paginationComponentOptions={tableTranslations}
                                        noDataComponent={tableTranslations.noDataComponent}
                                    />
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
export default ResumeList;