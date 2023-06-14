import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {FaUser} from "react-icons/fa"
import {register, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {
    const [formData, setfromData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setfromData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log("onChange");
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match')
          } else {
            const userData = {
              name,
              email,
              password,
            }
      
            dispatch(register(userData))
          }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser/> Register
                </h1>
                <p> create account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" style={{fontSize:"12px"}}>Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="set name" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" style={{fontSize:"12px"}}>Email</label>
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="set email" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{fontSize:"12px"}}>Password</label>
                        <input type="text" className="form-control" id="password" name="password" value={password} placeholder="set Password" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2" style={{fontSize:"12px"}}>Password confirm</label>
                        <input type="text" className="form-control" id="password2" name="password2" value={password2} placeholder="Password confirm" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Register</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register