'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Provider } from "react-redux";

import { Store1Context } from "../store/Contexts";
import store from "../store/Store";



const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phoneNo,
                    password
                })
            });

            if (response.ok) {
                router.push('/'); // Redirect to the home page
            } else {
                const errorData = await response.json();
                console.error(`Registration failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
        }
    };

    return (
        <Provider store={store} context={Store1Context}>
            <div className="flex justify-center m-8">
                <div className="border-[.3rem] border-r-[#7f8c8d] shadow-xl rounded">
                    <div className="flex justify-between items-center p-8 rounded gap-20">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Name</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="text" 
                                    placeholder="Enter your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Email</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="email" 
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Phone No.</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="text" 
                                    placeholder="Enter your Phone No."
                                    value={phoneNo}
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-bold">Password</label>
                                <input 
                                    className="w-[22rem] outline-none p-2 text-lg font-medium border border-red-500 rounded-md" 
                                    type="password" 
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={handleClick} 
                        className="ml-8 bg-red-500 rounded-sm text-2xl font-medium w-28 mb-2 h-10" 
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </div>
        </Provider>
    );
}

export default Register;


















































// 'use client'
// import { useState } from "react";

// import Link from "next/link";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation'


// import { Provider } from "react-redux";
// import store from "../store/Store";


// const Register = () => {

//     const [id, idchange] = useState("");
//     const [name, namechange] = useState("");
//     const [password, passwordchange] = useState("");
//     const [email, emailchange] = useState("");
//     const [phone, phonechange] = useState("");
//     const [country, countrychange] = useState("india");
//     const [address, addresschange] = useState("");
//     const [gender, genderchange] = useState("female");

   

//     const IsValidate = () => {
//         let isproceed = true;
//         let errormessage = 'Please enter the value in ';
//         if (id === null || id === '') {
//             isproceed = false;
//             errormessage += ' Username';
//         }
//         if (name === null || name === '') {
//             isproceed = false;
//             errormessage += ' Fullname';
//         }
//         if (password === null || password === '') {
//             isproceed = false;
//             errormessage += ' Password';
//         }
//         if (email === null || email === '') {
//             isproceed = false;
//             errormessage += ' Email';
//         }

//         if(!isproceed){
//             alert(errormessage)
//         }else{
//             if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

//             }else{
//                 isproceed = false;
//              alert('Please enter the valid email')
//             }
//         }
//         return isproceed;
//     }


//     const handlesubmit = (e) => {
//             e.preventDefault();
//             let regobj = { id, name, password, email, phone, country, address, gender };
//             if (IsValidate()) {
//             //console.log(regobj);
//             fetch("http://localhost:8000/user", {
//                 method: "POST",
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(regobj)
//             }).then((res) => {
//                 alert('Registered successfully.')
//                 router.push('/Login');
//             }).catch((err) => {
//                 alert('Failed :' + err.message);
//             });
//         }
//     }
//     const router = useRouter()
//     return (
//         <Provider store={store}>
//         <div>
            
//             <div className="offset-lg-3 col-lg-6">
//                 <form className="container" onSubmit={handlesubmit}>
//                     <div className="card">
//                         <div className="card-header">
//                             <h1>User Registration</h1>
//                         </div>
//                         <div className="card-body">

//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>User Name <span className="errmsg">*</span></label>
//                                         <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Password <span className="errmsg">*</span></label>
//                                         <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Full Name <span className="errmsg">*</span></label>
//                                         <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Email <span className="errmsg">*</span></label>
//                                         <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Phone <span className="errmsg"></span></label>
//                                         <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Country <span className="errmsg">*</span></label>
//                                         <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
//                                             <option value="india">India</option>
//                                             <option value="usa">USA</option>
//                                             <option value="singapore">Singapore</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label>Address</label>
//                                         <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Gender</label>
//                                         <br></br>
//                                         <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
//                                         <label>Male</label>
//                                         <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
//                                         <label>Female</label>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-primary">Register</button> |
//                             <Link href={'/Login'} className="btn btn-danger">Close</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
            

//         </div>
//         </Provider>
//     );
// }

// export default Register;