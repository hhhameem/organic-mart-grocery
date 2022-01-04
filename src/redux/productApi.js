import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const axios = require('axios');




// Add Product
export const fetchToAddProduct = createAsyncThunk(
    'product/addProduct',
    async (newProduct) => {
        const response = await fetch('https://sheltered-caverns-74517.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added')
                }
            })
        console.log('response', response);
        return response
    })


//Get products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {

    return await axios.get("https://sheltered-caverns-74517.herokuapp.com/product")
        .then(function (response) {
            return response.data;

        })
        .catch(function (error) {
            console.log("from axios error", error);
        });
});

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id, products) => {
        return await fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/product/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Product Deleted')
                }

            })
    })




// Then, handle actions in your reducers:
const productApi = createSlice({
    name: 'products',
    initialState: { products: [], loading: false },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add Products
        builder.addCase(fetchToAddProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchToAddProduct.fulfilled, (state, action) => {
            state.loading = false
        })
        // Fetch products
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
            // console.log("action payload data", action.payload);
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = [...action.payload];
            // console.log("action payload data", action.payload);
        })
        // DELETE ORDER
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false
            console.log("delete payload data", action);
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            console.log("delete rejected", action);
        })

    },
})


export default productApi.reducer


