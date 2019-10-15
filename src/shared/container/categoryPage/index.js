import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchcategorycollections } from '../../actions/blogs';
import {
  CardContainer,
  ImageWrapper,
  TagBox,
  CardTitle,
  CardMeta,
  CardView
} from '../../lib/Card';

import {Row,Column} from '../../lib/Grid';
import {LeadTitle} from '../../lib/Headers';

  class CategoryPage extends React.Component{

    state={
      title:''
    }

  	componentDidMount = () => {
      this.onInit(this.props);
    }

  UNSAFE_componentWillReceiveProps(nextProps){
        if (this.props.match.params.categoryname !== nextProps.match.params.categoryname){
          this.onInit(nextProps);
        }
    }


    onInit = (props) =>{
      let categoryname = props.match.params.categoryname;
      categoryname=categoryname.split('-').join(' ');
      this.setState({
        title:categoryname
      });
      props.fetchcategorycollections(categoryname);
    }

   

  	render(){
  		const {blogcollections} = this.props;
  		return(
  			<React.Fragment>

           <Row style={{margin:'0',padding:'0',width:'100%',overflow:'hidden'}}>
              <LeadTitle> {this.state.title} </LeadTitle> 
              {blogcollections && blogcollections.map((item,index)=>{

                return <Column xs="12" sm="4" md="4" style={{height:'500px'}} key={index}>
                          <Link to={`/${item.username}/${item.title.split(' ').join('-')}-${item._id}`} style={{textDecoration:'none'}}>
                            <CardContainer >
                              <ImageWrapper height_value="40%" style={{backgroundImage: `url(${item.thumbnail_url})`}}></ImageWrapper>
                              <TagBox ><span style={{display:'block'}}>{item.category}</span></TagBox>
                              <CardTitle >{item.title}</CardTitle>
                              <CardMeta>By {item.username}</CardMeta>
                              <CardView>
                                {item.description}
                              </CardView>
                            </CardContainer>
                          </Link>
                        </Column>

              })}

              
            </Row>
            

          
	  		</React.Fragment>
  		);
  	}
  }

CategoryPage.propTypes={
  blogcollections:PropTypes.arrayOf(PropTypes.shape({
    _id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    thumbnail_url:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    votes:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired
  })).isRequired,
  match: PropTypes.shape({
    params:PropTypes.shape({
      categoryname:PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  fetchcategorycollections:PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    blogcollections:state.collections && state.collections.categorycollection
  };
}

export default withRouter(connect(mapStateToProps,{fetchcategorycollections})(CategoryPage));



