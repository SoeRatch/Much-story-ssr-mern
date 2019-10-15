import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

  &:hover ul.list-categories{
	  max-height: inherit;
	  opacity: 1;
	}

  .list-categories{
  	  position:absolute;
	  list-style-type: none;
	  padding: 0px;
	  margin: 0px;
	  max-height: 0px;
	  opacity: 0;
	  overflow: hidden;
	  transition: opacity 300ms ease;
	  background:rgb(121, 210, 206);
	  width:100%;
	  border: 2px solid #fff;
	}
  
  .list-item{
    text-decoration:none;
  	padding:5px;
  	border-bottom:2px solid #fff;
  	&:hover{
	  background:white;
	}

  &:active{
    background:#4caf50;
  }
  }

`
const makeCategoryRoute=(param)=>`/category/${param.split(' ').join('-')}`;

const Listhoverbutton = ({label,othercategorynames}) =><div>
												<Buttonwrapper>
						                          <span>{label}</span>
						                          <ul className="list-categories">
						                          	{othercategorynames.map((item,index)=> 
                                          <NavLink key={index} to={makeCategoryRoute(item)} style={{textDecoration:'none',color:'black'}} activeStyle={{ color: '#4caf50'}} exact>
                                            <li className="list-item">{item}</li>
                                          </NavLink>)}
												  </ul> 
						                        </Buttonwrapper>

						                     </div>
  


export default Listhoverbutton

