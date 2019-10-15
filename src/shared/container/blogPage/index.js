import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet'
import { fetchblog } from '../../actions/blogs';
import styled from 'styled-components'
import NotesIcon from '@material-ui/icons/Notes';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Hidden from "@material-ui/core/Hidden";
import RelatedArticle from '../../component/relatedArticle';
import {Row,Column} from '../../lib/Grid';
import { APP_NAME } from '../../config'

const Container = styled.div`
  position:relative;
  margin-top:20px;
  white-space: nowrap;
  overflow:hidden;
  padding:3%;
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
`;


const ProfileImgWrapper = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top:0;
    height:500px;
`;

const BlogContent = styled.div`
  line-height: calc(1.6em + .21vw);
  font-family:'Gentium Book Basic', serif;
  font-size: calc(18px + .25vw);
`
const HeaderStyle = styled.div`
  text-align:center;

  h1{
      margin-top:10px;
      font-family:'Itim', cursive;
      color:#334;
      text-transform:uppercase;
      font-size:calc(0.935rem + 1.6vw);
      letter-spacing:0.1em;
      -webkit-font-smoothing: antialiased;
  }

  h3{
      text-transform:uppercase;
      font-family: proxima-nova,Proxima Nova,sans-serif;
      font-size:calc(14px + .50vw);
      color:rgb(121, 210, 206);
  }

  span{
    text-transform:uppercase;
    font-family:'Gentium Book Basic', serif;
    font-size: calc(14px + .25vw);
    color:#665;
  }

   @media only screen and (min-width:768px){
      text-align:left;
      h1{
        font-size:calc(1.635rem + 1.6vw);
      }
    }

`;

const BlogInfoStyle = styled.ul`
  background:rgba(121, 210, 206,0.8);
  padding:1em;
  margin:0;
  list-style:none;
  font-size:1.1em;
  border-radius:10px;
  color:#334;
  li{
    font-family:'Itim', cursive;
    line-height:1.5;
    display:flex;
    align-items:center;
  }

  @media only screen and (min-width:768px){
      padding:1em;
      margin:2em 0 0.2em 2em;
    }

`

const CommentActionStyle = styled.div`
  background:rgba(121, 210, 206,0.8);
  padding:1em;
  margin-top:2em;
  border-radius:10px;
  color:#334;
  text-align:center;  
  font-family:'Itim', cursive;
  line-height:1.5;
  font-size:1.5em;
`

class BlogPage extends React.Component{
	state={
    mobileOpen:false
  }
  
	componentDidMount = () => {
      this.onInit(this.props);
      window.addEventListener("scroll", this.handleScroll);
    }

  UNSAFE_componentWillReceiveProps(nextProps){
        if (this.props.match.params.blogparam !== nextProps.match.params.blogparam){
          this.onInit(nextProps);
        }
    }

  componentWillUnmount=()=>{
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll=(e)=>{
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let topbarObject = document.getElementById("topbar");
          if (scrollTop > 50) {
            topbarObject.style.position = `relative`;
          }
          else{
          topbarObject.style.position = `fixed`;
        } 
  }

 

    onInit = (props) =>{
       props.fetchblog(props.match.params.blogparam);
       window.scrollTo(0, 0);
    }

    dateFormatter =(datestring)=>{
      let date=new Date(datestring);
      return new Intl.DateTimeFormat('en-US', {  
                                        month: 'long', 
                                        day: '2-digit',
                                        year: 'numeric' 
                                    }).format(date);
    }

	render(){
		const { blog }= this.props;
		return(
      <div style={{margin:'0',width:'100%'}}>
        <Helmet >
          <title>{`${blog && blog.title}`}</title>
          <meta name="description" content={blog && blog.description} />
        </Helmet>
  			<Container>

          <Row>
            
            <Column xs="12" sm="12" md="2.5" >
              <Hidden smDown implementation="css">
                <div style={{padding:'20%',paddingLeft:'0'}}>
                  <ProfileImgWrapper style={{backgroundImage:`url(https://res.cloudinary.com/surajsharma/image/upload/v1569877316/muchstoryimages/backgroundforprofile.jpg)`}}>
                  </ProfileImgWrapper>
                </div>  
                </Hidden>
            </Column>

            <Column xs="12" sm="12" md="9.5">
              <HeaderStyle>
                  <span>{blog && blog.createdAt && this.dateFormatter(blog.createdAt)}</span>
                  <h1>{ blog && blog.title }</h1>
                  <h3>By {blog && blog.username}</h3>
              </HeaderStyle>
            </Column>
            <Column xs="12" sm="12" md="2.8" style={{float:'right'}}>
              <BlogInfoStyle>
                <li>
                  <NotesIcon/>
                  <span style={{marginLeft:'5px'}}>
                    {blog && blog.humanized_duration} read
                  </span>
                </li>
                <li>
                  <LocalOfferIcon/>
                  <span style={{marginLeft:'5px'}}>
                      {blog && blog.category}
                  </span>
                </li>
                
              </BlogInfoStyle>
            </Column>
            <Column xs="12" sm="12" md="6.5" >
              <BlogContent dangerouslySetInnerHTML={{ __html:blog && blog.blogdata_htmlstring }} />
              <Link to={`/blog/${blog && blog._id}/comments/show`} style={{textDecoration:'none'}}>
                  <CommentActionStyle>View Comments</CommentActionStyle>
              </Link>
            </Column>
          </Row>
          
          {blog && blog.category && 
              <LazyLoad height={200} offset={100}>
                <RelatedArticle category={blog.category}/>
              </LazyLoad> 
            }
          
  			</Container>
      </div>
			);
	}
}


BlogPage.propTypes={

  blog:PropTypes.object.isRequired,
  fetchblog:PropTypes.func.isRequired,
  match: PropTypes.shape({
		params:PropTypes.shape({
			username:PropTypes.string.isRequired,
			blogparam:PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

function mapStateToProps(state){
  return {
    blog:state.blog
  }
}

export default withRouter(connect(mapStateToProps,{fetchblog})(BlogPage));
