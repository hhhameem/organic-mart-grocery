import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../../../redux/productApi';

const ManageProductDetails = ({ product, number }) => {

    // const [products, setProducts] = useState([])
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()




    // useEffect(() => {
    //     fetch('https://polar-savannah-40370.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data.slice(0, 6)))
    // }, [])

    // DELETE ORDER
    const deleteOrder = (id) => {

        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteProduct(id, products))

        } else {
            dispatch(fetchProducts())
        }
    }
    return (

        <tr>
            <td>{number + 1}</td>
            <td><img src={product.url} alt="" width='40' /></td>
            <td>{product.title.slice(0, 80)}...</td>
            <td>{product.price}</td>
            <td>
                <ButtonGroup size="sm">
                    <Button variant='danger' className=' rounded' onClick={() => deleteOrder(product._id)} >Delete</Button>
                </ButtonGroup>
            </td>

        </tr>

    );
};

export default ManageProductDetails;