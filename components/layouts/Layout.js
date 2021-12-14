import {useState} from "react";
import HeadTags from "./HeadTags";
import Navbar from '../FixedNavbar'
import {hero_container,headings,paragraphs,inside_hero_container,button} from "../../styles/homePage.module.css"
import Footer from "../Footer";
import {loginUser} from "../../utils/authUser"
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'


function Layout({children}) {

  const router = useRouter();
  const isActive = route => router.pathname === route;
  
  const [errMsg, setErrMsg] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState({
    userId:"",
    accessCode: ""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await loginUser(user,setErrMsg)
    if(!errMsg){
      setModalShow(false)
    }

  }
  const handleChange=(e)=>{
    const {name,value} = e.target// takes the name and vale of event currently changing
    setUser({...user,[name]:value})
  }

  return (
    <div>
        <HeadTags />
        <Navbar />
        <section className={hero_container}>
          <div className={inside_hero_container}>
            <h1 className={headings}>CRYPTO CLOUD </h1>
            <h1 className={headings}>HASHING </h1>
            <p className={paragraphs}>Invest in Bitcoin, Join CRYPTO CLOUD HASHING, Trusted and Original Bitcoin Multiplier</p>

            <MydModalWithGrid errMsg={errMsg} handleChange={handleChange} handleSubmit={handleSubmit} show={modalShow} onHide={() => setModalShow(false)} />
            {isActive("/dashboard")?<button className={button}>Invest Now</button>:<button onClick={() => setModalShow(true)} className={button}>Login</button>}
          </div>
        </section>
        < >
          {children}
        </>
        <Footer/>
    </div>
  )
}
function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.errMsg && <p style={{color:"red"}}>{props.errMsg}</p>}
      <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="text" name='userId' onChange={props.handleChange} placeholder="Enter User Id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Access code</Form.Label>
          <Form.Control type="password" name="accessCode" onChange={props.handleChange} placeholder="Enter Access Code" />
        </Form.Group>
        <button type="submit" className={button} >login</button>
      </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Layout;
