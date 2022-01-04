import { useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, fetchOrders, updateOrderStatus } from '../../../../redux/ordersSlice';



const ManageAllORdersDetail = ({ order, number }) => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)
    // const { userOrders, setUserOrders } = useUserOrders()


    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch, orders])

    // DELETE ORDER
    const handleDeleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteOrder(id))
        } else {
            dispatch(fetchOrders())
        }
    }

    // UPDATE ORDER STATUS
    const updateStatus = (id) => {
        // const updateStatus = { status: 'Shipped' }
        dispatch(updateOrderStatus(id))
    }


    return (
        <tr>
            <td>{number + 1}</td>
            <td>{order.product?.title.slice(0, 50)}...</td>
            <td>{order.product?.price}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>
                <ButtonGroup size="sm">
                    <Button variant='success' className='mx-2 rounded' onClick={() => updateStatus(order._id)}>Shipped</Button>
                    <Button variant='danger' className=' rounded' onClick={() => handleDeleteOrder(order._id)}>Delete</Button>
                </ButtonGroup>
            </td>

        </tr>
    );
};

export default ManageAllORdersDetail;