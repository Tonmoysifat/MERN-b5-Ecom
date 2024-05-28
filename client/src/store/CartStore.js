import {create} from "zustand"
import axios from "axios";
import {unauthorized} from "../utility/utility.js";


const CartStore = create((set)=>({
    isSubmit: false,
    CartForm:{productID:"",color:"",size:""},
    CartFormOnChange: (name, value) => {
        set((state) => ({
            CartForm: {
                ...state.CartForm,
                [name]: value
            }
        }))
    },
    CartSaveRequest:async (PostBody,productID,quantity)=>{
        try {
            set({isSubmit: true})
            PostBody.productID = productID;
            PostBody.qty = quantity;
            let res = await axios.post(`/api/SaveCartList`,PostBody)
            return res.data["status"] === "Success";
        }
        catch (e) {
            // unauthorized(e.response.status)
        }
        finally {
            set({isSubmit: false})
        }
    },
    CartList:null,
    CartCount:0,
    CartListRequest:async ()=>{
        try {
            let res = await axios.get(`/api/CartList`)
            set({CartList: res.data["data"]})
            set({CartCount: (res.data["data"]).length})
        }
        catch (e) {
            // unauthorized(e.response.status)
        }
    }
}))
export default CartStore