import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { createComment,fetchcomments } from '../../actions/blogs';
import styled from 'styled-components'
import CommentEditor from '../../component/slateEditor/CommentEditor';
import {Link} from 'react-router-dom';

const HeaderStyle = styled.div`
    padding:20px;
    b{
        font-family:'Itim', cursive;
        color:#334;
        text-transform:uppercase;
    }
    p{
      font-family:Poppins,Helvetica,Arial,sans-serif;
      font-size: calc(14px + .20vw);
      color:#665;
  }
`;

const BodyStyle = styled.div`
    background:rgba(121, 210, 206,0.1);
    padding:20px;
     h4{
      font-family: proxima-nova,Proxima Nova,sans-serif;
      font-size: calc(14px + .25vw);
      color:#665;
    }

    .username{
       text-transform:uppercase;
      font-family: proxima-nova,Proxima Nova,sans-serif;
      font-size:calc(14px + .25vw);
      color:#FF4B2B;
      }

    .date{
        text-transform:uppercase;
        font-family:proxima-nova,Proxima Nova,sans-serif;
        font-size: calc(10px + .15vw);
        color:#665;
        margin-top:0px;
    }

`;

const InnerContainer=styled.div`
  width:100%;
  margin:0 auto;
  @media only screen and (min-width:768px){
    width:50%;
  }

  
`;

const BoxContainer=styled.div`
  background:white;
  border:1px solid rgba(0,0,0,0.9);
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding:1em;
  margin-top:2em;
  border-radius:2px;
  
`;

const CommentContent=styled.div`
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  padding:5px;
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

  font-size:calc(0.8em + .15vw);
  @media only screen and (min-width:768px){
    font-size:13px;
  }
`;


class CommentPage extends React.Component{
	
    componentDidMount = () => {
      this.onInit(this.props);
      window.addEventListener("scroll", this.handleScroll);
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

    onChange=e=>this.setState(
      {data:{
        ...this.state.data,
        [e.target.name]:e.target.value
        }
      }
  );

    submit=data=>{
      let bundleddata={
        comment:data,
        blogid:this.props.match.params.blogid
      }
      this.props.createComment(bundleddata)
    }
 

    onInit = (props) =>{
       props.fetchcomments(this.props.match.params.blogid);
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
		const { comments,blog }= this.props;
    const id_from_param=this.props.match.params.blogid
		return(
      <div style={{margin:'0',width:'100%'}}>
          <HeaderStyle>
            <InnerContainer>
              <BoxContainer>
                <b>{blog && blog.title}</b>
                <p> By {blog && blog.username} </p>
              </BoxContainer>
            </InnerContainer>
          </HeaderStyle>
          <BodyStyle>
            <InnerContainer>
                
                <BoxContainer>
                  <CommentEditor submit={this.submit}/>
                </BoxContainer>
            </InnerContainer>

            <InnerContainer>
                <h4>Comments</h4>
                {
                  comments && comments.map((comment,index)=>{
                    return <BoxContainer key={index}>
                            <h4 className="username">{comment.username}</h4>
                            <p className="date">{this.dateFormatter(comment.createdAt)} </p>
                            <CommentContent dangerouslySetInnerHTML={{__html:comment.comment_string}}/>
                          </BoxContainer>
                  })
                }
                
            </InnerContainer>
          </BodyStyle>	
      </div>
			);
	}
}


CommentPage.propTypes={
  blog:PropTypes.object.isRequired,
  fetchcomments:PropTypes.func.isRequired,
  match: PropTypes.shape({
		params:PropTypes.shape({
			blogid:PropTypes.string.isRequired
		}).isRequired
	}).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
      _id:PropTypes.string.isRequired,
      comment_string:PropTypes.string.isRequired,
      userId:PropTypes.string.isRequired,
      blogId:PropTypes.string.isRequired,
      username:PropTypes.string.isRequired,
      votes:PropTypes.number.isRequired,
      createdAt:PropTypes.string.isRequired,
      updatedAt:PropTypes.string.isRequired
  })).isRequired
};

function mapStateToProps(state){
  return {
    blog:state.blog,
    comments:state.comments
  }
}

export default withRouter(connect(mapStateToProps,{createComment,fetchcomments})(CommentPage));