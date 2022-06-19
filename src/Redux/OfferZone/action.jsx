import *as types from './actionTypes';
import Axios from "axios"

const fetchDataRequest_BS =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_BS,
        payload
    }
}
const fetchDataSuccess_BS =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_BS,
        payload
    }
}
const fetchDataFailure_BS =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_BS,
        payload,
    }
}
const fetchDataRequest_SW =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_SW,
        payload
    }
}
const fetchDataSuccess_SW =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_SW,
        payload
    }
}
const fetchDataFailure_SW =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_SW,
        payload,
    }
}
const fetchDataRequest_TWIRED =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_TWIRED,
        payload
    }
}
const fetchDataSuccess_TWIRED =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_TWIRED,
        payload
    }
}
const fetchDataFailure_TWIRED =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_TWIRED,
        payload,
    }
}
const fetchDataRequest_TWIRELESS =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_TWIRELESS,
        payload
    }
}
const fetchDataSuccess_TWIRELESS =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_TWIRELESS,
        payload
    }
}
const fetchDataFailure_TWIRELESS =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_TWIRELESS,
        payload,
    }
}
const fetchDataRequest_THEDPHONES =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_THEDPHONES,
        payload
    }
}
const fetchDataSuccess_THEDPHONES =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_THEDPHONES,
        payload
    }
}
const fetchDataFailure_THEDPHONES =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_THEDPHONES,
        payload,
    }
}
const fetchDataRequest_GAMING =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST_GAMING,
        payload
    }
}
const fetchDataSuccess_GAMING =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS_GAMING,
        payload
    }
}
const fetchDataFailure_GAMING =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE_GAMING,
        payload,
    }
}
const get_singleProductRequest =(payload)=>{
    return {
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}
const get_singleProductSuccess=(payload)=>{
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}
const get_singleProductFailure =(payload)=>{
    return {
        type: types.GET_PRODUCT_FAILURE,
        payload,
    }
}

const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_BS());
        Axios.get('/Best_Sellers')
        // Axios.get('/Smart_Watches')
        .then(r=>dispatch(fetchDataSuccess_BS(r.data)))
        .catch(e=>dispatch(fetchDataFailure_BS(e.data)))
    }
   
}
const fetchData_SW=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_SW());
        Axios.get('/Smart_Watches')
        .then(r=>dispatch(fetchDataSuccess_SW(r.data)))
        .catch(e=>dispatch(fetchDataFailure_SW(e.data)))
    }
   
}
const fetchData_TWIRED=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_TWIRED());
        Axios.get('/Trending_Wired')
        .then(r=>dispatch(fetchDataSuccess_TWIRED(r.data)))
        .catch(e=>dispatch(fetchDataFailure_TWIRED(e.data)))
    }
   
}
const fetchData_TWIRELESS=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_TWIRELESS());
        Axios.get('/Trending_Wireless')
        .then(r=>dispatch(fetchDataSuccess_TWIRELESS(r.data)))
        .catch(e=>dispatch(fetchDataFailure_TWIRELESS(e.data)))
    }
   
}
const fetchData_THEDPHONES=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_THEDPHONES());
        Axios.get('/Trending_Headphones')
        .then(r=>dispatch(fetchDataSuccess_THEDPHONES(r.data)))
        .catch(e=>dispatch(fetchDataFailure_THEDPHONES(e.data)))
    }
   
}
const fetchData_GAMING=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest_GAMING());
        Axios.get('/Gaming')
        .then(r=>dispatch(fetchDataSuccess_GAMING(r.data)))
        .catch(e=>dispatch(fetchDataFailure_GAMING(e.data)))
    }
   
}
const getSingleProduct=(id,product)=>(dispatch)=>{
    return(dispatch)=>{
        dispatch(get_singleProductRequest());
        Axios.get(`/products/${id}`)
        .then(r=>dispatch(get_singleProductSuccess(r.data)))
        .catch(e=>dispatch(get_singleProductFailure(e.data)))
    }
   
}

export {fetchData, fetchData_SW, fetchData_TWIRED, fetchData_TWIRELESS, fetchData_THEDPHONES, fetchData_GAMING, getSingleProduct} 