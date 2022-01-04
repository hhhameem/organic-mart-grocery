import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../../../redux/ordersSlice';
import ManageAllORdersDetail from './ManageAllOrdersDetail';


const ManageAllOrders = () => {
    // const [orders, setOrders] = useState([])

    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])
    console.log('orders', orders);


    return (
        <div>
            <h2>Manage Orders</h2>
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

                    {orders.map((order, idx) => <ManageAllORdersDetail key={order._id} number={idx} order={order}></ManageAllORdersDetail>)}


                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;