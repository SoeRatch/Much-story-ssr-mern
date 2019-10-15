import React from 'react';
import PropTypes from 'prop-types';
import {withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchblog } from '../../actions/blogs';
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
import {fetchrelatedcollections} from '../../actions/blogs';
class RelatedArticle extends React.Component{

	componentDidMount(){
		const category = this.props.category;
		this.props.fetchrelatedcollections(category);
	}

	render(){
		const {related} = this.props;
		return(
				<Row>
		              <LeadTitle> Related Articles </LeadTitle> 
		              {related && related.map((item,index)=>{

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
			);
	}
}


RelatedArticle.propTypes={
  category:PropTypes.string.isRequired,
  related:PropTypes.arrayOf(PropTypes.shape({
    title:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail_url:PropTypes.string.isRequired,
    votes:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
    _id:PropTypes.string.isRequired
  })).isRequired,

  fetchrelatedcollections:PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    related:state.collections && state.collections.related
  };
}

export default connect(mapStateToProps,{fetchrelatedcollections})(RelatedArticle);