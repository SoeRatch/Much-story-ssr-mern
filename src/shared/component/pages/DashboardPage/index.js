import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ConfirmEmailMessage from '../../messages/ConfirmEmailMessage';
import { fetchusercollections } from '../../../actions/blogs';
import {
  CardContainer,
  ImageWrapper,
  TagBox,
  CardTitle,
  CardMeta,
  CardView
} from '../../../lib/Card';

import {Row,Column} from '../../../lib/Grid';
import {LeadTitle} from '../../../lib/Headers';

  class DashboardPage extends React.Component{
  	componentDidMount = () => {
      this.onInit(this.props);
    }

    onInit = (props) =>{
       props.fetchusercollections();
    }

  	render(){
  		const {user,blogcollections} = this.props;
  		return(
  			<div>
	  			{ user && !user.confirmed && <ConfirmEmailMessage />}

           { user && user.confirmed &&

              <Row>
                <LeadTitle> Your Articles </LeadTitle> 
                {blogcollections && blogcollections.map((item,index)=>{

                  return <Column xs="12" sm="4" md="4" style={{height:'600px'}} key={index}>
                            <Link to={`/${item.username}/${item.title.split(' ').join('-')}-${item._id}`} style={{textDecoration:'none'}}>
                              <CardContainer>
                                <ImageWrapper style={{backgroundImage: `url(${item.thumbnail_url})`}}></ImageWrapper>
                                <TagBox><span style={{display:'block'}}>{item.category}</span></TagBox>
                                <CardTitle>{item.title}</CardTitle>
                                <CardMeta>By {item.username}</CardMeta>
                                <CardView>
                                  {item.description}
                                </CardView>
                              </CardContainer>
                            </Link>
                          </Column>

                })}

                
              </Row>

            }

          
	  		</div>
  		);
  	}
  }

DashboardPage.propTypes={
  user:PropTypes.object.isRequired,
  blogcollections:PropTypes.arrayOf(PropTypes.shape({
    _id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    thumbnail_url:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    votes:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired
  })).isRequired,
  fetchusercollections:PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    user:state.user,
    blogcollections:state.collections && state.collections.userblogs
  };
}

export default connect(mapStateToProps,{fetchusercollections})(DashboardPage);
