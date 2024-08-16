import axios from "axios";
import axiosInstance from "infrastructure/aixos/axiosInstance";
import URL_API from "infrastructure/UrlAPI";

export default async function sendRequestGetLinkResetPassword(email:String) {
    return await axiosInstance.post(URL_API.URL_SEND_MAIL_RESET_PASS,{email:email})
    .then(repsonse=>{
        
    })
    .catch(error=>{

    })
}