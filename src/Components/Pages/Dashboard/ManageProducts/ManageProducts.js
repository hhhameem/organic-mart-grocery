import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../redux/productApi';
import ManageProductDetails from './ManageProductDetails';

const ManageProducts = () => {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.products.loading)
    console.log(isLoading);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch, products])


    return (
        <div>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((product, idx) => <ManageProductDetails key={product._id} number={idx} product={product}></ManageProductDetails>)}


                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;