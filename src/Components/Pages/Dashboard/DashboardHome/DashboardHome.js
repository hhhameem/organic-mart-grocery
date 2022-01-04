import React, { useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './dashboardHome.css'

const DashboardHome = () => {
    const [isActive, setActive] = useState(true);
    const { logout } = useAuth()
    // const { url, path } = useRouteMatch()

    // console.log(admin);


    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <div>
            <div className={isActive ? "sidebar active" : "sidebar"} >
                <div class="logo_content">
                    <div class="logo">
                        <div class="logo_name">Grocery Mart</div>
                    </div>
                    <i class='bx bx-menu' id="btn" onClick={toggleClass}></i>
                </div>
                <ul class="nav_list">

                    <li>
                        <Link to={`/dashboard/myOrders`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">My Orders</span>
                        </Link>
                        <span class="tooltip">My Orders</span>
                    </li>


                    {/* <> */}
                    <li>
                        <Nav.Link as={Link} to={`/dashboard/manageAllOrders`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Manage All Orders</span>
                        </Nav.Link>
                        <span class="tooltip">Manage All Orders</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to={`/dashboard/addProducts`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Add A Product</span>
                        </Nav.Link>
                        <span class="tooltip">Add A Product</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to={`/dashboard/manageProducts`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Manage Products</span>
                        </Nav.Link>
                        <span class="tooltip">Manage Products</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to={`/dashboard/makeAdmin`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Make Admin</span>
                        </Nav.Link>
                        <span class="tooltip">Make Admin</span>
                    </li>

                    {/* </> : <div className='d-flex justify-content-center'><Spinner className='mx-auto my-5' animation="grow" /></div> */}


                    <li>
                        <Nav.Link onClick={() => logout()}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Logout</span>
                        </Nav.Link>
                        <span class="tooltip">Logout</span>
                    </li>

                </ul>
                {/* <div class="content">
                    <div class="user">
                        <div class="user_details">
                            <img src="images/profile.jpg" alt="" />
                            <div class="name_job">
                               <div class="name">{user.displayName}</div>
                                <div class="job">{user.email}</div> 
                            </div>
                        </div>
                        <i class='bx bx-log-out' style={{ cursor: 'pointer' }} id="log_out" ></i>
                    </div>
                </div> */}
            </div>
            <div class="home_content">

                <Outlet />
            </div>
        </div>
    );
};

export default DashboardHome;