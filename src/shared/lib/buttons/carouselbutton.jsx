import React from 'react'
import styled from 'styled-components'

const LeftButtonwrapper = styled.div`
  position:relative;
  border:3px solid #fff;
  background-color:#000;
  border-radius:50%;
  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);
  height:50px;
  width:50px;
  left:20px;
  &:hover{
      border:4px solid #fff;
      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);
    }

  &:hover ${LeftArrow}:after{
    transform-origin: -108% -50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  } 

`;

const LeftArrow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  right: 20%;
  top: 50%;
  margin-top: -10px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);

  &:before{
      content: '';
      width: 100%;
      height: 100%;
      border-width: 2px 0px 0px 2px;
      border-style: solid;
      border-color: white;
      transition: .2s ease;
      display: block;
  };

    &:after{
      content: '';
      width: 100%;
      height: 100%;
      border-width: 0px 0px 0px 2px;
      border-style: solid;
      border-color: white;
      transition: .2s ease;
      display: block;
      transform:translate(0px,-20px);
  }

`;

const RightButtonwrapper = styled.div`
  position:relative;
  border:3px solid #fff;
  background-color:#000;
  border-radius:50%;
  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);
  height:50px;
  width:50px;
  right:20px;
  &:hover{
      border:4px solid #fff;
      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);
    }

  &:hover ${RightArrow}:after{
    transform-origin: 226% 45%;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  } 

`;

const RightArrow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  left: 20%;
  top: 50%;
  margin-top: -10px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);

  &:before{
      content: '';
      width: 100%;
      height: 100%;
      border-width: 0px 2px 2px 0px
      border-style: solid;
      border-color: white;
      transition: .2s ease;
      display: block;
  };

    &:after{
      content: '';
      width: 100%;
      height: 100%;
      border-width: 0px 0px 2px 0px
      border-style: solid;
      border-color: white;
      transition: .2s ease;
      display: block;
      transform:translate(0px,-22px);
  }

`;

const CarouselButton = ({direction}) =>{
            if(direction==='left')
                return (<LeftButtonwrapper>
                          <LeftArrow></LeftArrow>
                       </LeftButtonwrapper>);
            else
              return (<RightButtonwrapper>
                          <RightArrow></RightArrow>
                       </RightButtonwrapper>);
          }
  


export default CarouselButton;