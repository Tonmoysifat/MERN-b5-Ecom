import {create} from "zustand"
import axios from "axios";
import {unauthorized} from "../utility/utility.js";

const WishStore = create((set)=>({
    isSubmit: false,
    WishSaveRequest:async (productID)=>{
        try {
            set({isSubmit: true})
            let res = await axios.post(`/api/SaveWishList`,{productID:productID})
            return res.data["status"] === "Success";
        }
        catch (e) {
            // unauthorized(e.response.status)
        }
        finally {
            set({isSubmit: false})
        }
    },
    WishList:null,
    WishCount:0,
    WishListRequest:async ()=>{
        try {
            let res = await axios.get(`/api/WishList`)
            set({WishList: res.data["data"]})
            set({WishCount: (res.data["data"]).length})
        }
        catch (e) {
            // unauthorized(e.response.status)
        }
    }
}))

export default WishStore