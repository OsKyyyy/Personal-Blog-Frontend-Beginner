const BlogAdd = () => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Forms Elements</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                        <li className="breadcrumb-item active">Forms Elements</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Textual inputs</h4>
                                    <p className="card-title-desc">Here are examples of <code
                                        className="highlighter-rouge">.form-control</code> applied to each
                                        textual HTML5 <code className="highlighter-rouge">&lt;input&gt;</code> <code
                                            className="highlighter-rouge">type</code>.</p>
                                    <div className="row mb-3">
                                        <label htmlFor="example-text-input"
                                               className="col-sm-2 col-form-label">Text</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="text" placeholder="Artisanal kale"
                                                   id="example-text-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-search-input"
                                               className="col-sm-2 col-form-label">Search</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="search"
                                                   placeholder="How do I shoot web" id="example-search-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-email-input"
                                               className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="email"
                                                   placeholder="bootstrap@example.com" id="example-email-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-url-input"
                                               className="col-sm-2 col-form-label">URL</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="url"
                                                   placeholder="https://getbootstrap.com" id="example-url-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-tel-input"
                                               className="col-sm-2 col-form-label">Telephone</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="tel" placeholder="1-(555)-555-5555"
                                                   id="example-tel-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-password-input"
                                               className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="password" value="hunter2"
                                                   id="example-password-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-number-input"
                                               className="col-sm-2 col-form-label">Number</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="number" value="42"
                                                   id="example-number-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-datetime-local-input"
                                               className="col-sm-2 col-form-label">Date and time</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="datetime-local"
                                                   value="2011-08-19T13:45:00" id="example-datetime-local-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-date-input"
                                               className="col-sm-2 col-form-label">Date</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="date" value="2011-08-19"
                                                   id="example-date-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-month-input"
                                               className="col-sm-2 col-form-label">Month</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="month" value="2020-03"
                                                   id="example-month-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-week-input"
                                               className="col-sm-2 col-form-label">Week</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="week" value="2020-W14"
                                                   id="example-week-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-time-input"
                                               className="col-sm-2 col-form-label">Time</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="time" value="13:45:00"
                                                   id="example-time-input"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="example-color-input"
                                               className="col-sm-2 col-form-label">Color</label>
                                        <div className="col-sm-10">
                                            <input type="color" className="form-control form-control-color w-100"
                                                   id="example-color-input" value="#0f9cf3" title="Choose your color"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label">Select</label>
                                        <div className="col-sm-10">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
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
    )
}

export default BlogAdd;