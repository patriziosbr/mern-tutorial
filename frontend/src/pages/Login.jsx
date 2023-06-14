import { useState, useEffect } from "react"
import {FaSignInAlt} from "react-icons/fa"

function Login() {
    const [formData, setfromData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const onChange = (e) => {
        setfromData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log("onChange");
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("onSubmit");
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Start setting goals</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" style={{fontSize:"12px"}}>Email</label>
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="set email" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{fontSize:"12px"}}>Password</label>
                        <input type="text" className="form-control" id="password" name="password" value={password} placeholder="set Password" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Register</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login