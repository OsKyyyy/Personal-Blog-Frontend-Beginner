import React from "react";
import {Image} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import avatar1 from "../../assets/admin/images/users/avatar-1.jpg";

import MetisMenu from '@metismenu/react';

const Sidebar = () => {

    return (
        <div className="vertical-menu">
            <SimpleBar className="h-100">
                <div className="user-profile text-center mt-3">
                    <div className="">
                        <Image src={avatar1} alt="" className="avatar-md rounded-circle"/>
                    </div>
                    <div className="mt-3">
                        <h4 className="font-size-16 mb-1">Julia Hudda</h4>
                        <span className="text-muted">
                            <i className="ri-record-circle-line align-middle font-size-14 text-success"></i> Çevrimiçi
                        </span>
                    </div>
                </div>

                <div id="sidebar-menu">
                    <MetisMenu>
                        <li>
                            <NavLink to="/admin/dashboard" className="waves-effect">
                                <i className="ri-dashboard-line"></i><span
                                className="badge rounded-pill bg-success float-end">3</span>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <Link to="#" className="has-arrow waves-effect">
                                <i className="ri-newspaper-line"></i>
                                <span>Blog</span>
                            </Link>
                            <ul style={{ paddingLeft: "2rem"}}>
                                <li><NavLink to="/admin/blog/add">Blg Ekle</NavLink></li>
                                <li><NavLink to="/admin/blog/list">Blog Listesi</NavLink></li>
                            </ul>
                        </li>
                    </MetisMenu>
                </div>
            </SimpleBar>
        </div>
    );
}

export default Sidebar;