import {useState} from "react";
import { useRouter } from 'next/router'
import {container,left,right,inside_left,mobile_nav} from "../styles/dashboard.module.css"
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import {logOut} from "../utils/authUser"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {registerUser} from "../utils/authUser"

const dashboard = ({user}) => {

    const [errMsg, setErrMsg] = useState(null)
    const [users, setUsers] = useState({
        userId:"",
        accessCode: "",
        name:"",
        email:""
    })

    const router = useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await registerUser(users,setErrMsg)
    
      }
      const handleChange=(e)=>{
        const {name,value} = e.target// takes the name and vale of event currently changing
        setUsers({...users,[name]:value})
      }
    

    const isActive = route => router.pathname === route;

    return (
        <section className={container}>
            <h1>Welcome to your dashboard {user.name}</h1>
            <div style={{display:"flex",width:"100%",padding:"40px 0px"}}>
                <div className={left}>
                    <div className={inside_left}>
                        <Image src="/images/deposit.jpg" alt="" width={70} height={80}/>
                        <p>Deposit</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/withdraw.jpg" alt="" width={70} height={80}/>
                        <p>Withdraw</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/referral.jpg" alt="" width={70} height={80}/>
                        <p>Affiliate</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/track.jpg" alt="" width={70} height={80}/>
                        <p>Track</p>
                    </div>
                    <div className={inside_left} onClick={logOut}>
                        <Image src="/images/logout.jpg" alt="" width={70} height={80}/>
                        <p>Logout</p>
                    </div>
                </div>
                <div className={right}>
                {errMsg && <p style={{color:"red"}}>{errMsg}</p>}
                    {user.role==="admin"&&(
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" onChange={handleChange} name="userId" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Access Code</Form.Label>
                            <Form.Control type="password" onChange={handleChange} name="accessCode" placeholder="Access code" />
                            </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={handleChange} name="email" placeholder="you@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onChange={handleChange} placeholder="Odunlade Adekola" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    )}
                </div>
            </div>
            <div className={mobile_nav}>
                    <div className={inside_left}>
                        <Image src="/images/deposit.jpg" alt="" width={70} height={80}/>
                        <p>Deposit</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/withdraw.jpg" alt="" width={70} height={80}/>
                        <p>Withdraw</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/referral.jpg" alt="" width={70} height={80}/>
                        <p>Affiliate</p>
                    </div>
                    <div className={inside_left}>
                        <Image src="/images/track.jpg" alt="" width={70} height={80}/>
                        <p>Track</p>
                    </div>
                    <div className={inside_left} onClick={logOut}>
                        <Image src="/images/logout.jpg" alt="" width={70} height={80}/>
                        <p>Logout</p>
                    </div>
            </div>
        </section>
    )
}

export default dashboard
