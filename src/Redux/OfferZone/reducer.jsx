import *as types from './actionTypes';

const initialState ={
    Best_Sellers:[],
    Smart_Watches:[],
    Trending_Wired:[],
    Trending_Wireless:[],
    Trending_Headphones:[],
    CurrentProduct:{},
    Gaming:[],
    error:'',
    loading:false,
}

const reducer = (state = initialState, action)=>{
    const {type, payload}=action;
    switch (type) {
        case types.FETCH_DATA_REQUEST_BS:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_BS:
             return{
                ...state,
                Best_Sellers:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_BS:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.FETCH_DATA_REQUEST_SW:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_SW:
             return{
                ...state,
                Smart_Watches:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_SW:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.FETCH_DATA_REQUEST_TWIRED:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_TWIRED:
             return{
                ...state,
                Trending_Wired:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_TWIRED:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.FETCH_DATA_REQUEST_TWIRELESS:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_TWIRELESS:
             return{
                ...state,
                Trending_Wireless:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_TWIRELESS:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.FETCH_DATA_REQUEST_THEDPHONES:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_THEDPHONES:
             return{
                ...state,
                Trending_Headphones:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_THEDPHONES:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.FETCH_DATA_REQUEST_GAMING:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.FETCH_DATA_SUCCESS_GAMING:
             return{
                ...state,
                Gaming:payload,
                error:"",
                loading:false,
             }
       
        case types.FETCH_DATA_FAILURE_GAMING:
             return{
                ...state,
               error:payload,
               loading:false,
             }
        case types.GET_PRODUCT_REQUEST:
             return{
                ...state,
                error:"",
                loading:true,
             }
        case types.GET_PRODUCT_SUCCESS:
             return {
                ...state,
                error:"",
                CurrentProduct: payload,
               loading:false,
             }
       
        case types.GET_PRODUCT_FAILURE:
             return{
                ...state,
               error:payload,
               loading:false,
             }
                       
        default:
          return state;
    }
}

export default reducer;