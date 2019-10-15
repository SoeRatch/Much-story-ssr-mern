import React from 'react'
import styled from 'styled-components'

const Buttonwrapper = styled.div`
  color: #000;
  margin:0px 5px;
  padding-bottom: 3px;
  box-shadow: 0 2px 0 #fff;
  position: relative;
  font: normal 14px/17px 'Gentium Book Basic', serif;

  font-family:'Itim', cursive;
  
  letter-spacing:0em;
  text-transform: uppercase; 
  text-decoration: none;
  text-align:center;
  span {
    display: block;
    padding: 1px 2px;
    border: 2px solid #fff;
    color:#282726;
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
  }

  &:hover{
    padding-bottom:0px;
  }

  

`

const actionButtonStyle={
  letterSpacing:'0.1em',
  background:'#e9ad6b',


}

const actionSpanStyle={
 padding:"3px 9px" 
}

const Msbutton = ({label,action}) =><Buttonwrapper style={action?actionButtonStyle:{}}>
                          <span style={action?actionSpanStyle:{}}>{label}</span>
                        </Buttonwrapper>
  


export default Msbutton

