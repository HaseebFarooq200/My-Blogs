import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import './Login.css'
export default function Login() {

	const { dispatch } = useContext(UserContext)

	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const PostLogin = async (e) => {
		e.preventDefault();
		const res = await fetch('/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		})
		const data = await res.json()
		if (res.status === 400 || !data) {
			window.alert("Invalid Credentials")
		}
		else {
			dispatch({ type: 'USER', payload: true })
			navigate('/Home')
		}
	}

	return (
		<>
			<div className="main-content bg-default">
				<div className="container pb-5">
					<div className="row justify-content-center">
						<div className="col-lg-5 col-md-7">
							<div className="card bg-secondary shadow border-0 mt-5">
								<div className="card-header bg-transparent pb-5">
									<div className="text-muted text-left mt-2 mb-3">
										<h1>Sign in </h1>
									</div>
								</div>
								<div className="card-body px-lg-5 py-lg-5">
									<form>
										<div className="form-group mb-3">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="ni ni-email-83"></i></span>
												</div>
												<input className="form-control" placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
											</div>
										</div>
										<div className="form-group">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
												</div>
												{/* <input type="password" classNameName="form-control" placeholder="password" /> */}
												<input className="form-control" placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
											</div>
										</div>
										<div className="custom-control custom-control-alternative custom-checkbox">
											<input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
											<label className="custom-control-label" for=" customCheckLogin">
												<span className="text-muted">Remember me</span>
											</label>
										</div>
										<div className="text-center">
											<input type="submit" method='POST' value="Sign in" className="btn btn-primary my-4" onClick={PostLogin} />
										</div>
									</form>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-6 text-left">
									<Link to="/Signup" className="text-light"><small>Create new account</small></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
