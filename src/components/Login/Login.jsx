import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [show,setShow]=useState(true);
    const {login}=useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
    
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        const from=location.state?.from?.pathname||'/';

        login(email,password)
            .then(result=>{
                const loggedin=result.user;
                console.log(loggedin)
                form.reset();
                navigate(from,{ replace: true })
            })
            .catch(error=>{
                console.log(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type={show ?"text":'password'} placeholder="password" name="password" className="input input-bordered" required />
                <p onClick={()=>{setShow(!show)}}>{
                    show ? <span>Hide Password</span>: <span>Show Password</span>
                }
                </p>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='w-full text-center mb-7'>----or----</div>
            <div><button className='btn text-center w-full'>login with google</button></div>
            </div>
        </div>
        </div>
    );
};

export default Login;