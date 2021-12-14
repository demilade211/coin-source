import axios from "axios"
import baseUrl from "../utils/baseUrl"
import catchErrors from "./catchErrors"
import Router from "next/router"
import cookie from "js-cookie"

export const registerUser = async(user,setError)=>{
    try { 
        const res = await axios.post(`${baseUrl}/signup`,user)
        alert("Registered")
        Router.reload()
    } catch (error) {
        setError(catchErrors(error))
    }

}
export const loginUser = async(user,setError)=>{
    try {
        const res = await axios.post(`${baseUrl}/login`,user)
        setToken(res.data.token)
    } catch (error) {
        setError(catchErrors(error))
    }

}
export const redirectUser = (ctx,location)=>{
    if(ctx.req){//if it get a req
        ctx.res.writeHead(302,{Location:location})
        ctx.res.end();
    }else{
        Router.push(location);
    }

}
export const logOut=()=>{
    cookie.remove("token");
    Router.push("/");
    Router.reload()
}
const setToken=token=>{
    cookie.set("token",token)
    Router.push('/dashboard')
}