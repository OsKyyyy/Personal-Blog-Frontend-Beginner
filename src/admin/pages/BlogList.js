import React, {useEffect, useMemo, useState} from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DataTable from "react-data-table-component";

const columns = [
    { name: "ID", selector: row => row.id, omit: true },
    { name: "Başlık", selector: row => row.title, sortable: true },
    { name: "İçerik", selector: row => row.content, sortable: true },
    {
        name: "Url",
        selector: row => row.slug, sortable: true,
        cell: row => <Link to={`/blogdetail/${row.slug}`}>{row.slug}</Link>
    },
    { name: "Oluşturulma Tarihi", selector: row => row.createDate, sortable: true },
    { name: "Oluşturan Kullanıcı", selector: row => row.createUser, sortable: true },
    {
        name: "Edit",
        cell: row => <Link to={`/admin/dashboard/`} className="btn btn-primary">Edit</Link>
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

const BlogList = () => {

    const [tableData, setTableData] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const {data: blogListData, loading: blogListLoading,fetchData} = useFetch();

    useEffect(() => {
        fetchData("https://localhost:44352/api/Blog/List");
    }, []);

    useEffect(() => {
        if (blogListData?.Data) {
            const formattedData = blogListData.Data.map(item => ({
                id: item.Id,
                title: item.Title,
                content: item.Content,
                slug: item.Slug,
                createDate: item.CreateDate,
                createUser: item.CreateUser
            }));
            setTableData(formattedData);
        }
    }, [blogListData]);

    const filteredItems = tableData.filter(
        item =>
            (item.title && item.title.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.content && item.content.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.slug && item.slug.toLowerCase().includes(filterText.toLowerCase())) ||
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

    if (blogListLoading) {
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
                                <h4 className="mb-sm-0">BLOG LİSTESİ</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                        <li className="breadcrumb-item active">Blog Listesi</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">

                                    <DataTable
                                        className="table  dt-responsive nowrap"
                                        style={{borderCollapse: "collapse", borderSpacing: "0", width:"100%"}}
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        highlightOnHover
                                        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
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
                            © Upcube.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default BlogList;
