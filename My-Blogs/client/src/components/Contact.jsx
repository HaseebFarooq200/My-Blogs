import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function Contact() {

  const [user, setUser] = useState({
    firstname: "", lastname: "", email: "", username: "", password: "", cnfrmpasword: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
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
                      <h3 class="mb-0">Feel Free to Contact</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <form>
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group focused">
                            <label class="form-control-label" for="input-first-name">Full name</label>
                            <input type="text" className="form-control form-control-alternative" name="fullname" placeholder="Full Name" value={user.firstname} onChange={handleInputs} />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label" for="input-email">Email address</label>#
                            <input type='email' className="form-control form-control-alternative" name="email" placeholder="Your Email" value={user.email} onChange={handleInputs} />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <InputGroup>
                          <InputGroup className="label">Message</InputGroup>
                          <InputGroup.Text></InputGroup.Text>
                          <FormControl as="textarea" placeholder='Write a Message'/>
                        </InputGroup>
                        <div className="text-left">
                          <input type="submit" method='POST' value="Send a Message" className="btn btn-primary my-4" />
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
