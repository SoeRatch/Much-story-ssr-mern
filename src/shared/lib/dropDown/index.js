import React from 'react';
import styled from 'styled-components'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const DropDownStyle=styled.div`
	display: inline-block;
  	position: relative;
  	font-family:'Itim', cursive;
  	
  	@media only screen and (min-width:768px){
    	float:right;
  	}
`;

const DropDownButton=styled.div`
	  display: inline-block;
	  border: 1px solid gray;
	  border-radius: 4px;
	  padding:5px 15px 5px 10px;
	  background-color: #ffffff;
	  cursor: pointer;
	  white-space: nowrap;

	  &::after{
	  	  content: '';
		  position: absolute;
		  top: 50%;
		  right: 15px;
		  transform: translateY(-50%);
		  width: 0; 
		  height: 0; 
		  border-left: 5px solid transparent;
		  border-right: 5px solid transparent;
		  /*border-top: 5px solid black;*/
	  }

	  &:hover{
	  	background-color: #eeeeee;
	  }
`;

const DropDownMenu=styled.ul`
		position: absolute;
		z-index:900;
	    top: 100%;
	    border: 1px solid #ccc;
	    border-radius: 4px;
	    padding: 0;
	    margin: 2px 0 0 0;
	    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
	    background-color: #ffffff;
	    list-style-type: none;

`;

const DropDownList=styled.li`
	  padding: 10px 20px;
	  cursor: pointer;
	  white-space: nowrap;
	  display:flex;
    align-items:center;
	  &:hover{
	  	background-color: #f6f6f6;
	  }
`;

class DropDown extends React.Component{
	state={
        listOpen: false,
    	headerTitle: this.props.title
	}

	static getDerivedStateFromProps(nextProps){
	    const count = nextProps.list.filter(function(a) { return a.selected; }).length;

	if(count === 0){
	      return {headerTitle: nextProps.title}
	    }
	    else if(count === 1){
	    	if(!nextProps.multipleSelection)
	    		return {headerTitle: `${nextProps.titleHelper.singular}`}
	      return {headerTitle: `${count} ${nextProps.titleHelper.singular}`}
	    }
	    else if(count > 1){
	      return {headerTitle: `${count} ${nextProps.titleHelper.plural}`}
	    }
	  }
	handleClickOutside(){
	  this.setState({
	    listOpen: false
	  })
	}
	toggleList(){
	  this.setState(prevState => ({
	    listOpen: !prevState.listOpen
	  }))
	}
render(){
  const{list,toggleItem} = this.props
  const{listOpen, headerTitle} = this.state
  return(
    <DropDownStyle>
		<DropDownButton onClick={() => this.toggleList()}>
	        <span>{headerTitle}</span>
		        {listOpen
		          ? <i className="fa fa-angle-up"></i>
		          : <i className="fa fa-angle-down"></i>
		        }
		</DropDownButton>
		{listOpen && 
			<DropDownMenu>

		       {list && list.map((item) => (
		         <DropDownList key={item.title} 
		         	 onClick={() => toggleItem(item.id, item.key)}
		         	>
		         	 	{item.title} {item.selected && <CheckCircleOutlineIcon />}
		         </DropDownList>
		        ))}

      		</DropDownMenu>
      	}
	</DropDownStyle>
  );

}

}

export default DropDown;