import React from 'react';
import axios from 'axios';
  class AdminPage extends React.Component{
  	state={
      category:"hiphenwithprimary"
    }

    onChange=e => this.setState({
          [e.target.name]:e.target.value
        });
      
      onSubmitCategory=e=>{
        e.preventDefault();
        let type='secondary';
        let category = this.state.category.toLowerCase();
        if(category.includes('hiphenwithprimary')){
          category = category.replace('hiphenwithprimary','').trim();
          type='primary'
        }
        axios.post('/api/category',{category:{name:category,type:type}}).then(res=>res.data.category);
      }

  	render(){
      const {category}= this.state;

  		return(
  			<div>
          <p>create category</p>
  				<input
            name="category"
            id="create_category"
            type="text"
            value={category}
            placeholder="hiphenwithprimary"
            onChange={this.onChange}
          />
          <button onClick={this.onSubmitCategory}>
            create category
          </button>
	  			
          
	  		</div>
  		);
  	}
  }



export default AdminPage;