import styled,{createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
  @keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}
`
export const Bar = styled.div`
    width:35px;
    height:5px;
    background-color:red;
    margin:6px 0;
    transition:all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;


export const BodyContainer=styled.div`
	position:fixed;
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: proxima-nova,Proxima Nova,sans-serif;
	height: 80vh;
	width:100vw;
`;

export const Container = styled.div`
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 90%;
	max-width: 100%;
	min-height: 480px;

	.sign-up-container{
		left: 0;
		width: 50%;
		${({rightpanelactive}) => (rightpanelactive?"transform: translateX(100%)":"")};
		${({rightpanelactive}) => (rightpanelactive?"opacity: 1":"opacity: 0")};
		${({rightpanelactive}) => (rightpanelactive?"z-index: 5":"z-index: 1")};
		${({rightpanelactive}) => (rightpanelactive?`animation: show 0.6s`:"")};
	}

	.sign-in-container{
		left: 0;
		width: 50%;
		z-index: 2;
		${({rightpanelactive}) => (rightpanelactive?"transform: translateX(100%)":"")};
	}

	.overlay{
		${({rightpanelactive}) => (rightpanelactive?"transform: translateX(50%)":"transform: translateX(0)")};
	}
	.overlay-container {
		${({rightpanelactive}) => (rightpanelactive?"transform: translateX(-100%)":"")};
	}

	
	

    

	@media only screen and (min-width:320px) and (max-width:960px){
      	.sign-in-container {
			width: 100%;
		}



		.sign-up-container {
			width: 100%;
			
		}
    }
    
`;

export const FormContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;

	@media only screen and (min-width:320px) and (max-width:960px){
      	top: 20%;
		height: 80%;
    }
`

export const OverlayContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
`;

export const Overlay = styled.div`
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transition: transform 0.6s ease-in-out;

	.overlay-left {
		transform: translateX(0);
	}

	.overlay-right {
		right: 0;
		${({rightpanelactive}) => (rightpanelactive?"transform: translateX(20%)":"transform: translateX(0)")};
	}
	
`;

export const OverlayPanel = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

	

`
export const FormActionButton = styled.button`
	border-radius: 20px;
	border: 1px solid #FFFFFF;
	background-color: transparent;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;

	&:active{
        transform: scale(0.95);
      }
    &:focus{
    	outline: none;
    }

`
export const FormButtonInput = styled.input`
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	&:active{
        transform: scale(0.95);
      }
    &:focus{
    	outline: none;
    }
`

export const MobileTabContainer = styled.div`
	position:relative;
		z-index:9;
		width:100%;
		height:20%;
		background-color:rgb(121, 210, 206);
		border:1px solid #ccc;

		&::after{
		    content:'';
		    clear:both;
		    display:table;
		  }

`

export const MobileTabItem = styled.div`
	float:left;
	width:50%;
	background-color:#444;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size:20px;
	font-weight: bold;
	outline:2px solid #000;
    outline-offset: -3px;
    padding:8px 0;
    cursor:pointer;
    &:hover{
    	scale:0.7;
    };

     &:click{
    	scale:0.5;
    };
`

