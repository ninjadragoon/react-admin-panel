import React, { Component } from "react";
import '../public/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';  
import '../public/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../public/login/vendor/animate/animate.css';  
import '../public/login/vendor/css-hamburgers/hamburgers.min.css';  
import '../public/login/vendor/animsition/css/animsition.min.css';   
import '../public/login/vendor/select2/select2.min.css';  
import '../public/login/vendor/daterangepicker/daterangepicker.css';  
import '../public/login/css/util.css';  
import '../public/login/css/main.css';  
import './login.css';


class Login extends Component {

constructor(props) {
	super(props)

	this.login = this.login.bind(this)
	this.userNameChanged = this.userNameChanged.bind(this)
	this.passwordChanged = this.passwordChanged.bind(this)

	this.state = {
		userName: "",
		password: "",
		isLoggedIn: false,
		formErrors: {
			userName: "",
			password: ""
		},
		loading: false
	};
}
    
login(e){
	e.preventDefault();	
	var isValid = true;
	if(!this.state.userName){
		this.setState(prevState => ({
			formErrors: {
				...prevState.formErrors,
				userName: 'Please enter a username!'
			}
		}))
		isValid = false;
	}
	else
		this.state.formErrors.userName = "";

	if(!this.state.password){
		this.setState(prevState => ({
			formErrors: {
				...prevState.formErrors,
				password: 'Please enter a password!'
			}
		}))
		isValid = false;
	}
	else
		this.state.formErrors.password = "";

	if(!isValid)	
		return;

	this.setState({loading: true});
	
	setTimeout(() =>{
		this.setState({isLoggedIn: true}, function(){
			sessionStorage.setItem('user', JSON.stringify(this.state));
			this.props.updateLoginState(true);
			this.props.updateUserName(this.state.userName);
		});
	 }, 1000);

	
}

userNameChanged(event) {
	this.setState({userName: event.target.value});
}

passwordChanged(event) {
	this.setState({password: event.target.value});
}

  render() {
    return (
        <div>
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title" >
					<span className="login100-form-title-1">
						Sign In
					</span>
				</div>

				<form className="login100-form validate-form">
					<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span className="label-input100">Username</span>
						<input onChange={this.userNameChanged} className="input100" type="text" name="username" placeholder="Enter username"  />
						<span className="focus-input100"></span>
					</div>

					{this.state.formErrors.userName? <p className="field-error animated fadeIn">{this.state.formErrors.userName}</p> : <p></p>}

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input onChange={this.passwordChanged} className="input100" type="password" name="pass" placeholder="Enter password" />
						<span className="focus-input100"></span>
					</div>

					{this.state.formErrors.password? <p className="field-error animated fadeIn">{this.state.formErrors.password}</p> : <p></p>}

					<div className="flex-sb-m w-full p-b-30">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label className="label-checkbox100" htmlFor="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="" className="txt1">  
								Forgot Password?
							</a>
						</div>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={this.login} disabled={this.state.loading}>
							Login
						</button>
					</div>
					<div className={"lds-ellipsis " + (this.state.loading? 'show': 'hidden')}><div></div><div></div><div></div><div></div></div>
				</form>
			</div>
		</div>
	</div>
      </div>
    );
  }
}


export default Login;
