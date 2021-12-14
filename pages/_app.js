import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import {parseCookies,destroyCookie} from "nookies"
import baseUrl from "../utils/baseUrl"
import {redirectUser} from "../utils/authUser"

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
        <Component  {...pageProps}/>
    </Layout>
  ) 
}
MyApp.getInitialProps = async({Component,ctx})=>{
  const {token} = parseCookies(ctx)// converts the name token(the name we gave it when stored in the cookie) gotten from ctx and makes it usable
  let pageProps = {};

  const protectedRoutes = ctx.pathname === "/dashboard" 

  if(!token){
      if(protectedRoutes){
          redirectUser(ctx,"/");
      }//if there isnt a token and it is trying to acccess the protected route redirect to login page
  }else{
      if(Component.getInitialProps){
          pageProps = await Component.getInitialProps(ctx)// stores the properties of context of the current route or page we are in
      }

      try {
          const res = await axios.get(`${baseUrl}/homepage`,{
              headers: {Authorization: token}
          });
          const {user} = res.data
          if(user){
              !protectedRoutes && redirectUser(ctx,"/dashboard");/* if user is logged in and tring to access signup or login route redirect them to the homepage */
          }
          pageProps.user = user;
      } catch (error) {
          destroyCookie(ctx,"token");
          redirectUser(ctx,"/")
      }
  }
  return {pageProps};
}
export default MyApp
