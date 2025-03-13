import {useSelector} from "react-redux";
import useFetch from "../../hooks/useFetch";
import React, {useEffect, useMemo, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import DataTable from "react-data-table-component";

const Comment = () => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const {data, loading, fetchData} = useFetch();
    const {fetchData: fetchDelete} = useFetch();
    const {data: dataList, fetchData: fetchList} = useFetch();
    const {fetchData: fetchUpdate} = useFetch();
    const [tableData, setTableData] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [refresh, setRefresh] = useState(true);

    const [inputValue, setInputValue] = useState({
        commentText: "",
        name: "",
        email: "",
    });
    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const columns = [
        { name: "ID", selector: row => row.id, omit: true },
        {
            name: "Blog",
            selector: row => row.blogTitle,
            cell: row => <a href={`/blogdetail/${row.blogSlug}`} target="_blank">{row.blogTitle}</a>
        },
        { name: "Yorum", selector: row => row.commentText, sortable: true, width:"200px" },
        { name: "Ad", selector: row => row.name, sortable: true, width:"200px" },
        { name: "E-Posta", selector: row => row.email, sortable: true, width:"200px" },
        {
            name: "Durum",
            selector: row => row.status,
            sortable: true,
            cell: row => {
                if(!row.status){
                    return <span className="bg-success badge me-2">Yeni</span>;
                }
                else{
                    return <span className="bg-danger badge me-2">Onaylanmış</span>;
                }
            },
        },
        { name: "Oluşturulma Tarihi", selector: row => row.createDate, sortable: true },
        {
            name: "İşlemler",
            cell: row =>
                <>
                    <Button className="btn btn-primary me-2" onClick={() => openModal(row.id)}><i className="fas fa-eye"></i> Detay</Button>
                    <Button className="btn btn-danger" onClick={() => deleteComment(row.id)}><i className="fas fa-times"></i> Sil</Button>
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

    const deleteComment = async (commentId) => {

        const deleteUrl = apiUrl + "/Comment/Delete?id=" + commentId;
        const deleteUrlOptions = {
            method: "DELETE",
            showToast: true,
            loadComponent: "admin/comment"
        };
        await fetchDelete(deleteUrl, deleteUrlOptions);

        setTableData(tableData.filter(resume => resume.id !== commentId));
    }

    const updateStatus = () => {
        const updateUrl = apiUrl + "/Comment/UpdateStatus?id=" + selectedId;
        const updateUrlOptions = {
            method: "PUT",
            data: JSON.stringify({selectedId})
        };
        fetchUpdate(updateUrl, updateUrlOptions);

        setRefresh(prev => !prev);
        closeModal()
    }

    const openModal = async (id) => {
        setSelectedId(id);
        const listUrl = apiUrl + "/Comment/ListById?id=" + id;
        const listUrlOptions = {
            method: "GET",
            data: JSON.stringify({id}),
        };
        fetchList(listUrl, listUrlOptions);
    };

    const closeModal = () => {
        setShowModal(false);
        setInputValue({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
        setSelectedId(null);
    };

    useEffect(() => {
        if (dataList?.Data) {

            const responseData = {
                commentText: dataList.Data.CommentText,
                name: dataList.Data.Name,
                email: dataList.Data.Email,
                status: dataList.Data.Status,
                createDate: dataList.Data.CreateDate,
            };

            setInputValue(responseData);
            setShowModal(true);

            setRefresh(prev => !prev);
        }
    }, [dataList]);

    const commentList = async () => {
        fetchData(apiUrl + "/Comment/List");
    };

    useEffect(() => {
        commentList();
    },[refresh])

    useEffect(() => {
        if (data?.Data) {
            const formattedData = data.Data.map(item => ({
                id: item.Id,
                blogId: item.BlogId,
                blogTitle: item.BlogTitle,
                blogSlug: item.BlogSlug,
                commentText: item.CommentText,
                name: item.Name,
                email: item.Email,
                status: item.Status,
                createDate: item.CreateDate,
            }));
            setTableData(formattedData);
        }
    }, [data]);

    const filteredItems = tableData.filter(
        item =>
            (item.commentText && item.commentText.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.email && item.email.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.status && item.status.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.createDate && item.createDate.toLowerCase().includes(filterText.toLowerCase()))
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
                                <h4 className="mb-sm-0">İLETİŞİM LİSTESİ</h4>
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
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>ID: {selectedId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12 mb-3">
                        <input className="form-control"
                               type="text"
                               placeholder="e-posta"
                               value={inputValue.name}
                               disabled
                        />
                    </div>
                    <div className="col-sm-12 mb-3">
                        <input className="form-control"
                               type="text"
                               placeholder="konu"
                               value={inputValue.email}
                               disabled
                        />
                    </div>
                    <div className="col-sm-12">
                        <textarea className="form-control"
                               placeholder="mesaj"
                               value={inputValue.commentText}
                               disabled
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={updateStatus}>Onayla</Button>
                    <Button variant="secondary" onClick={closeModal}>Kapat</Button>
                </Modal.Footer>
            </Modal>
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
export default Comment;