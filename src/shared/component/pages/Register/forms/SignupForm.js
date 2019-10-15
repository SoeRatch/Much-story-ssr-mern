import React from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import {withRouter} from 'react-router-dom';
import InlineError from '../../../messages/InlineError';
import {FormButtonInput} from '../styledcomponents';

class SignupForm extends React.Component{
	state={
		data:{
			email:'',
			password:'',
			username:''
		},
		errors:{},
		containertype:this.props.containertype
	}


	onChange = e => this.setState({data:{
		...this.state.data,
		[e.target.name]:e.target.value
		}
	});

	onSubmit =(e) =>{
		e.preventDefault();
		
		const errors = this.validate(this.state.data);
		
		this.setState({errors});
		if(Object.keys(errors).length === 0){
			this.props.submit(this.state.data)/*
				.catch(err => this.setState({
				 	errors: err.response.data.errors
				 }));*/
		}
	};

	
	

	validate = data => {
			const errors ={};
			if(!Validator.isEmail(data.email))
				errors.email = "Invalid email";
			if(!data.password)
				errors.password = "Can't be blank";
			if(!data.username)
				errors.username = "Can't be blank";
			return errors;
		};

	render(){
	
			const {data,errors,containertype} = this.state;
			const {u_id,e_id,p_id}={u_id:`${containertype}usernamesignup`,e_id:`${containertype}emailsignup`,p_id:`${containertype}passwordsignup`};

		return(
			<form 
				style={{ 
					backgroundColor:'#FFFFFF',
					display:'flex',
					alignItems:'center',
					justifyContent:'center',
					flexDirection:'column',
					padding:'0 50px',
					height:'100%',
					textAlign:'center' }}

			 	onSubmit={this.onSubmit}>

					<h1 style={{fontWeight:'bold',margin:'0',color:'#79d2ce'}} >Create Account</h1>

					<input style={{
								   backgroundColor:'#eee',
								   border:'none',
								   padding:'12px 15px',
								   margin:'8px 0',
								   width:'100%'
								}} 
							type="text" 
							id={u_id}
							name="username"
							value={data.username}
							placeholder="Name"
							onChange={this.onChange} />
					{errors.username && <InlineError text={errors.username} />}

					<input style={{
									backgroundColor:'#eee',
									border:'none',
									padding:'12px 15px',
									margin:'8px 0',
									width:'100%'
								}} 
							type="email" 
							id={e_id}
							name="email"
							value={data.email}
							placeholder="Email"
							onChange={this.onChange} />
					{errors.email && <InlineError text={errors.email} />}
						
					<input style={{
									backgroundColor:'#eee',
									border:'none',
									padding:'12px 15px',
									margin:'8px 0',
									width:'100%'
								}} 
								type="password" 
								id={p_id}
								name="password"
								value={data.password}
								placeholder="Password"
								onChange={this.onChange}/>
					{errors.password && <InlineError text={errors.password} />}

					<FormButtonInput
						type="submit"
						name=""
						value="Sign Up"
					/>
			</form>
		);
	}
}

SignupForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default withRouter(SignupForm);
