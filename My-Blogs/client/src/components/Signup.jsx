import React , {useState} from 'react'
import './Signup.css'
import { Link,useNavigate} from 'react-router-dom';

export default function Signup() {
    const navigate =useNavigate()

        const [user,setUser] = useState({
    		firstname: "", lastname: "", email: "",username: "",password:"",cnfrmpasword: ""
    	})
    
        let name,value;
        const handleInputs = (e)=>{
            name = e.target.name;
            value = e.target.value;
            setUser({...user,[name]:value})
        }

    const PostData = async (e)=>{
                e.preventDefault()
        
                const   {firstname, email, lastname, username, password, cnfrmpasword} = user
                const res = await fetch ("/register",{ 
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({firstname, email, lastname, username, password, cnfrmpasword})
                });
                
                const data = await res.json()
        
                if(res.status===422 || !data ){
                    window.alert("Invalid Registeration")
                }
                else{
                    window.alert("Successfully Registered")
                    navigate('/')
                }
            }
    return (
        <>
            <div class="main-content ">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-xl-8 m-auto order-xl-1">
                            <div class="card bg-secondary shadow">
                                <div class="card-header bg-white border-0">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">Create your account</h3>
                                        </div>
                                        <div class="col-4 text-right ">
                                            <Link to="/" class="btn btn-sm btn-primary ">Already have an account ?</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <h6 class="heading-small text-muted mb-4">User information</h6>
                                        <div class="pl-lg-4">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group focused">
                                                        <label class="form-control-label" for="input-first-name">First name</label>
                                                        <input type="text" className="form-control form-control-alternative" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group focused">
                                                        <label class="form-control-label" for="input-last-name">Last name</label>
                                                        <input type="text" className="form-control form-control-alternative" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group focused">
                                                        <label class="form-control-label" for="input-username">Username</label>
                                                        <input type="text" className="form-control form-control-alternative" name="username" placeholder="User Name" value={user.username} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-email">Email address</label>#
                                                        <input type='email' className="form-control form-control-alternative" name="email" placeholder="Your Email" value={user.email} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group focused">
                                                        <label class="form-control-label" for="input-username">Password</label>
                                                        <input type="password" className="form-control form-control-alternative" name="password" placeholder="Password" value={user.password} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-email">Confirm Password</label>
                                                        <input type="password" className="form-control form-control-alternative" name="cnfrmpasword" placeholder="Confirm Password" value={user.cnfrmpasword} onChange={handleInputs} />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <input type="submit" method='POST' value="Sign up" className="btn btn-primary my-4" onClick={PostData} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

