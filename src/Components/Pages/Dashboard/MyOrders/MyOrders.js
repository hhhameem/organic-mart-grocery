import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MyOrderDetails from './MyOrderDetails';

const MyOrders = () => {
    // const [orders, setOrders] = useState([])
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)
    console.log('orders', orders);

    return (
        <div>
            <h2>My Orders</h2>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.length === 0 ? <h2>No orders</h2> : orders.map((order, idx) => console.log(order))}


                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;