import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
        <Component  {...pageProps}/>
    </Layout>
  ) 
}

export default MyApp
