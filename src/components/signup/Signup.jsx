import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {
    const[error,setError]=useState('');
    const {signup}=useContext(AuthContext);
    const handleSignUP=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.confirm.value;
        console.log(email,password,confirm);

        if(password !== confirmPassword){
            setError("password did't match")
            return
        }
        else if(password.length <6){
            setError('password can not less then 6')
            return
        }

        signup(email,password)
            .then(result=>{
                const loggedUser = result.user;
            })
            .catch(error=>{
                setError(error.message)
            })
    
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUP} className="card-body">
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
                <input type="text" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="password" name="confirm" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='w-full text-center mb-7'>----or----</div>
            <div><button className='btn text-center w-full'>Signup with google</button></div>
            <p>{error}</p>
            </div>
            
        </div>
        </div>
    );
};

export default Signup;