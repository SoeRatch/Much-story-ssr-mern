import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Hidden from "@material-ui/core/Hidden";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { signup } from '../../../actions/users';
import { login } from '../../../actions/auth';

import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';

import {
	Bar,
	BodyContainer,
	Container,
	FormContainer,
	OverlayContainer,
	Overlay,
	OverlayPanel,
	FormActionButton,
	MobileTabContainer,
	MobileTabItem
} from './styledcomponents';




class Register extends React.Component{
	state={
		rightpanelactive:false
	}

	signupsubmit = data =>this.props.signup(data);

	loginsubmit = data => this.props.login(data).then(()=>{
		this.props.history.push("/dashboard");
	});
	

	movehandler=e=>{
		e.preventDefault();
		const container = document.getElementById('container');
		let elemId=e.target.id;

		/*let hashedEg=container.classList[0].split('--');
		hashedEg[hashedEg.length-1]='right-panel-active';
		hashedEg=hashedEg.join('--');*/

		let hashedEg = 'rightpanelactive';

		if(elemId=='signUp'){
			//container.classList.add(hashedEg);
			this.setState({
				rightpanelactive:true
			})
		}
		else if(elemId=='signIn'){
			//container.classList.remove(hashedEg);
			this.setState({
				rightpanelactive:false
			})
		}

	}

	mobiletabhandler=e=>{
		e.preventDefault();
		let elemId=e.target.id;
		let targetedElem=document.getElementById('mobilesignup');
		if(elemId=='signUp'){
			targetedElem.style.opacity='1';
			targetedElem.style.zIndex='5';
		}
		else if(elemId=='signIn'){
			targetedElem.style.opacity='0';
			targetedElem.style.zIndex='1';
		}

	}

	render(){
		return(
				<div>
					<Hidden smDown implementation="css">
						<BodyContainer>
							<Container id="container" rightpanelactive={this.state.rightpanelactive}>

								<div style={{position:'absolute',right:'0',top:'0',marginRight:'1%',zIndex:'101',border:'2px solid black',backgroundColor:"white"}}>
												<NavLink to="/" exact>
						                                <Bar style={{transform:"rotate(-45deg) translate(-9px, 6px)"}}></Bar>
								                        <Bar style={{opacity:'0'}}></Bar>
								                        <Bar style={{transform:"rotate(45deg) translate(-8px, -8px)"}}></Bar>
						                          </NavLink>
												
								</div>

								<FormContainer className="sign-up-container">
									<SignupForm submit={this.signupsubmit} containertype="desktop"/>
								</FormContainer>

								<FormContainer className="sign-in-container">
									<LoginForm submit={this.loginsubmit} containertype="desktop"/>
								</FormContainer>


								<OverlayContainer className="overlay-container">
									<Overlay rightpanelactive={this.state.rightpanelactive} className="overlay" >
										<OverlayPanel className="overlay-left">
											<h1 style={{fontWeight:'bold',margin:'0'}} >
												Already have an account ?
											</h1>
											<p style={{fonSize:'14px',fontWeight:'100',lineHeight:'20px',letterSpacing:'0.5px',margin:'20px 0 30px'}}>
												Sign in to read the most amazing articles of 21st century or start writing your most valuable, unique and futuristic story today.
											</p>
											<FormActionButton id="signIn" onClick={this.movehandler}>Sign In</FormActionButton>
										</OverlayPanel>
										<OverlayPanel className="overlay-right">
											<h1 style={{fontWeight:'bold',margin:'0'}} >
												Join Much Story .
											</h1>

											<p style={{fonSize:'14px',fontWeight:'100',lineHeight:'20px',letterSpacing:'0.5px',margin:'20px 0 30px'}}>
												Sign up to create, read, watch and publish your personalized creative stories right now .</p>
											<FormActionButton id="signUp" onClick={this.movehandler}>Sign Up</FormActionButton>
										</OverlayPanel>
									</Overlay>
								</OverlayContainer>

						</Container>
					</BodyContainer>

				</Hidden>

					

				<Hidden mdUp implementation="css">
						<BodyContainer>
							<Container id="container">

								<MobileTabContainer>
										<div style={{width:'100%',height:'50%'}}>
											<div style={{position:'absolute',right:'0',top:'0',marginRight:'1%',zIndex:'101',border:'2px solid black',backgroundColor:"white"}}>
												<NavLink to="/" exact>
						                                <Bar style={{transform:"rotate(-45deg) translate(-9px, 6px)"}}></Bar>
								                        <Bar style={{opacity:'0'}}></Bar>
								                        <Bar style={{transform:"rotate(45deg) translate(-8px, -8px)"}}></Bar>
						                          </NavLink>
											</div>
										</div>
										<MobileTabItem
											 id="signUp" 
											 onClick={this.mobiletabhandler}
											 >
											 	Sign Up
										</MobileTabItem>
										<MobileTabItem
											 id="signIn" 
											 onClick={this.mobiletabhandler}
											 >
											 	Sign In
										</MobileTabItem>
								</MobileTabContainer>

								<FormContainer className="sign-up-container" id="mobilesignup">
									<SignupForm submit={this.signupsubmit} containertype="mobile"/>
								</FormContainer>

								<FormContainer className="sign-in-container">
										<LoginForm submit={this.loginsubmit} containertype="mobile"/>
								</FormContainer>

						</Container>
					</BodyContainer>
				</Hidden>			


			</div>
				
			);
	}

}
	

Register.propTypes = {
	signup:PropTypes.func.isRequired,
	login:PropTypes.func.isRequired
};

export default withRouter(connect(null,{signup,login})(Register));

