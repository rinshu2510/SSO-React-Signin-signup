import React, { Component } from "react";
import GoogleLogin from "react-google-login";
const responseG = (response) => {
    console.log(response);
    console.log(response.profileObj);
}

export default class Login extends Component {
    
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <GoogleLogin
                clientId="413945850654-a13ts62gk2612dlmtgq0crkv32fe3p7f.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseG}
                onFailure={responseG}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
            </form>
        );
    }
}