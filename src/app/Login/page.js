'use client'
import { useState } from "react";
import { Provider, createDispatchHook, useDispatch } from "react-redux";
import Link from "next/link";

import { useRouter } from 'next/navigation';
import { loginSuccess } from "../store/AuthSlice";

import store from "../store/Store";
import { Store1Context } from "../store/Contexts";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const useStore1Dispatch = createDispatchHook(Store1Context);
  
  const dispatch1 =useStore1Dispatch();

    const handleLogin = async () => {
        console.log("login ------",{email,password})
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
             console.log("login response----",response)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                dispatch1(loginSuccess(data));
                router.push('/');       // redirect to the home page
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Provider store={store} context={Store1Context}>
            <div className="flex justify-center items-center m-8">
                <div className="flex flex-col p-8 border-[.3rem] border-r-[#7f8c8d] shadow-xl rounded gap-4 w-[30rem]">
                    <label className="text-xl font-bold">Email_ID</label>
                    <input
                        className="outline-none p-2 text-lg font-medium border border-red-500 rounded-md"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="text-xl font-bold">Password</label>
                    <input
                        className="outline-none p-2 text-lg font-medium border border-red-500 rounded-md"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="flex w-[6rem] justify-center text-xl font-bold rounded bg-red-700 h-8"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <Link href={'/Signup'}>Don't have an account? Register</Link>
                </div>
            </div>
        </Provider>
    );
};

export default Login;






















































// 'use client'
// import { useEffect, useState } from "react";
// import { Provider } from "react-redux";

// import Link from "next/link";
// import { toast } from "react-toastify";
// import store from "../store/Store";

// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation'
// import Header from "../components/Header/Header";
// import Navbar1 from "../components/Navbar/Navbar";
// import Footer from "../components/footer/Footer";

// const Login = () => {
    
//     const [username, usernameupdate] = useState('');
//     const [password, passwordupdate] = useState('');
// const [token, setToken] = useState()
// const isLoggedin = !!token
//     useEffect(()=>{
// sessionStorage.clear();

//     },[]);

//     const ProceedLogin = (e) => {
        
//         e.preventDefault();
//         if (validate()) {
//             ///implentation
//             // console.log('proceed');
//             fetch("http://localhost:8000/user/" + username).then((res) => {
//                 return res.json();
//             }).then((resp) => {
//                 //console.log(resp)
                
//                 if (Object.keys(resp).length === 0) {
//                     alert('Please Enter valid username');
//                 } else {
//                     if (resp.password === password) {
//                         alert('Success');
//                         sessionStorage.setItem('username',username);
//                         sessionStorage.setItem('userrole',resp.role);
                       
                        
//                         router.push('/');
//                     }else{
//                         alert('Please Enter valid credentials');
//                     }
//                 }
//             }).catch((err) => {
//                 alert('Login Failed due to :' + err.message);
//             });
//         }
//     }

//     const ProceedLoginusingAPI = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             ///implentation
//             // console.log('proceed');
//             let inputobj={"username": username,
//             "password": password};
//             fetch("https://localhost:44308/User/Authenticate",{
//                 method:'POST',
//                 headers:{'content-type':'application/json'},
//                 body:JSON.stringify(inputobj)
//             }).then((res) => {
//                 return res.json();
//             }).then((resp) => {
//                 console.log(resp)
//                 if (Object.keys(resp).length === 0) {
//                     toast.error('Login failed, invalid credentials');
//                 }else{
//                      toast.success('Success');
//                      sessionStorage.setItem('username',username);
//                      sessionStorage.setItem('jwttoken',resp.jwtToken);
//                      router.push('/shop/Payment');
//                 }
//                 // if (Object.keys(resp).length === 0) {
//                 //     toast.error('Please Enter valid username');
//                 // } else {
//                 //     if (resp.password === password) {
//                 //         toast.success('Success');
//                 //         sessionStorage.setItem('username',username);
//                 //         usenavigate('/')
//                 //     }else{
//                 //         toast.error('Please Enter valid credentials');
//                 //     }
//                 // }
//             }).catch((err) => {
//                 toast.error('Login Failed due to :' + err.message);
//             });
//         }
//     }
//     const validate = () => {
//         let result = true;
//         if (username === '' || username === null) {
//             result = false;
//             alert('Please Enter Username');
//         }
//         if (password === '' || password === null) {
//             result = false;
//             alert('Please Enter Password');
//         }
//         return result;
//     }
//     const router = useRouter()
//     return (
//         <>
       
//         <Provider store ={store} >
       
//         <Navbar1 /> 
//         <div className="row">
//             <div className="offset-lg-3 col-lg-6" style={{ marginTop: '50px' , marginBottom: '50px'}}>
//                 <form onSubmit={ProceedLogin} className="container">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2>User Login</h2>
//                         </div>
//                         <div className="card-body">
//                             <div className="form-group">
//                                 <label>User Name <span className="errmsg">*</span></label>
//                                 <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
//                             </div>
//                             <div className="form-group">
//                                 <label>Password <span className="errmsg">*</span></label>
//                                 <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
//                             </div>
//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-primary">Login</button> |
//                             <Link className="btn btn-success" href={'/Signup'}>New User</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//       <Footer />
//         </Provider>
//         </>
//     );
// }

// export default Login;