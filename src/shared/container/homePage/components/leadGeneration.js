import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import axios from 'axios';
import Validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BlockError from '../../../component/messages/BlockError';

const Container = styled.div`
  position:relative;
  width:100vw;
  height:52vh;
  margin:0;
  padding:0;
  white-space: nowrap;
  overflow: hidden;
  background-image:url(https://res.cloudinary.com/surajsharma/image/upload/v1568825564/muchstoryimages/best_place.png);
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
`;

const Wrapper = styled.div`
  width:100%;
  height:100%;
  overflow: hidden;
  margin:0;
  padding:0;
  background:rgba(121, 210, 206,0.95);

   white-space: pre-wrap;
      /* CSS3 */
      white-space: -moz-pre-wrap;
      /* Firefox */
      white-space: -pre-wrap;
      /* Opera <7 */
      white-space: -o-pre-wrap;
      /* Opera 7 */
      word-wrap: break-word;
      /* IE */
      vertical-align: middle;

`;

const LeadTitle = styled.h2`
  color:white;
  margin:10% 5% 0 5%;
  font-size:1.2em;
  font-weight:800;
  font-family: proxima-nova,Proxima Nova,sans-serif;
  text-align:center;
  letter-spacing:0.2em;
  text-transform: uppercase; 
  @media only screen and (min-width:768px){
      font-size:1.9em;
      margin:3% 5% 0 5%;
    }
`;

const LeadInput = styled.div`
  width:80%;
  margin-left:auto;
  margin-right:auto;
  @media only screen and (min-width:768px){
      width:50%;
    }  
`;


class LeadGeneration extends React.Component {

  state={
    data:{
      email:'',
      message:''
    },
    successMsg:"",
    errors:{}
  }

  onChange = e => this.setState({data:{
    ...this.state.data,
    [e.target.name]:e.target.value
    }
  });

  submit =(e) =>{
    e.preventDefault();
    
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      const data= this.state.data;
      axios.post('/api/emails/getintouch',{data}).then(res=>{
        let message= res.data.message;
        this.setState({
          ...this.state,
          successMsg:message
        })
      })
    }
  };

  validate = (data) => {
    const errors={};
    if(!Validator.isEmail(data.email))
      errors.email = "Invalid email";
    if(!data.message)
      errors.message="A message from you would help us to be in contact quickly";
    return errors;
  }

  render () {

    const { title } = this.props;
    const {data,errors,successMsg} = this.state;
    return (
      <Container>
        <Wrapper>
          <LeadTitle>{title}</LeadTitle>
          <LeadInput>
            <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
                value={data.email}
                onChange={this.onChange}
              />
            <TextField
                          id="filled-textarea"
                          label="Your message"
                          name="message"
                          placeholder="Write your message . Please Mention your name"
                          multiline
                          margin="normal"
                          variant="filled"
                          fullWidth
                          value={data.message}
                          onChange={this.onChange}
               />
            <Button 
                color="secondary" 
                variant="contained" 
                fullWidth
                onClick={this.submit}>
                          Get in touch
              </Button>
              {errors.email && <BlockError text={errors.email} />}
              {errors.message && <BlockError text={errors.message} />}
              {(successMsg.length>0) && <BlockError text={successMsg} />}
            </LeadInput>
        </Wrapper>
      </Container>
    );
  }
}



export default LeadGeneration;
