import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import  { createblogs } from '../../actions/blogs';
import InlineError from '../../component/messages/InlineError';
import DropDown from '../../lib/dropDown';
import {Row,Column} from '../../lib/Grid';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loadable from 'react-loadable';

const SlateEditor = Loadable({
  loader: () => import('../../component/slateEditor'),
  loading() {
    return <div>Loading...</div>
  }
});

const Container = styled.div`
  background-color:#fdfaf5;
  margin:0;
  padding:2%;
  overflow:hidden;
  @media only screen and (min-width:768px){
    padding:0 5%;
  }
`;

const SlateComponent=styled.div`
  background:white;
  border: 1px solid #cecece; 
  padding: 8px 16px;
  margin: 0 0 10px 0; 
`;

const TitleInput=styled.textarea`
      background-color:#eee;
      border:none;
      padding:12px 15px;
      margin:0;
      width:87vw;
      font-size:20px;
      font-weight:700;
      white-space: pre-wrap;
      height:30px;
      overflow-y: hidden;
      
      /* CSS3 */
      white-space: -moz-pre-wrap;
      /* Firefox */
      white-space: -pre-wrap;
      /* Opera <7 */
      white-space: -o-pre-wrap;
      /* Opera 7 */
      word-wrap: break-word;
      /* IE */
      font-family:'Itim', cursive;

      @media only screen and (min-width:768px){
        width:80%
      }

`
const DropDownStyle=styled(DropDown)`
    font-family:'Itim', cursive;
`
const DropdownExtendedColumn=styled(Column)`
  padding:12px 0;
`;

class CreateStory extends React.Component{

    state={
          title:"",
          category:[
                    {
                      id:0,
                      title:'Technology',
                      selected:false,
                      key:'category'
                    },
                    {
                      id:1,
                      title:'Business',
                      selected:false,
                      key:'category'
                    },
                    {
                      id:2,
                      title:'Programming',
                      selected:false,
                      key:'category'
                    }
                ],
          selectedCategory:"",
          errors:{},
          open:false,
          blog_data:{
            title:"",
            category:"",
            description:"",
            blogdata_htmlstring:"",
            blogdata_string:""
          }
      }

      handleScroll=(e)=>{
          let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          
          let toolbar = document.getElementById("toolbar");

          if (scrollTop >50) {
               toolbar.style.position='fixed';
               toolbar.style.top='90px';
            }
          else{
            toolbar.style.position='relative';
            toolbar.style.top='0px';
          }           
      }

      componentDidMount = () => {
        
         window.addEventListener("scroll", this.handleScroll);
         setTimeout(()=>{
            this.init();
         },1000);
      }

      init=()=>{

        const {allcategories} = this.props;

        const all = [...allcategories.primary,...allcategories.other]
        const defaultcategory = all.map((item,index)=>({
          id:index,title:item,selected:false,key:'category'
        }));

        this.setState({
          ...this.state,
          category:defaultcategory

        })
      }


      componentWillUnmount=()=>{
        window.removeEventListener("scroll", this.handleScroll);
      }


    submit = data =>{
     
     data["title"]=this.state.title;
     data["category"]=this.state.selectedCategory;
     const errors = this.validateStage1(data);

      this.setState({errors});

       if(Object.keys(errors).length === 0){
              this.setState({
                blog_data:{
                  ...this.state.blog_data,
                  title:data.title,
                  category:this.state.selectedCategory,
                  description:this.state.description,
                  blogdata_htmlstring:data.blogdata_htmlstring,
                  blogdata_string:data.blogdata_string
                }        
              },function(){
                  this.handleClickOpen();
              });
      }      

    }

    

    updatetitle = e =>{
      e.preventDefault();
      this.setState({
        title:e.target.value
      });
    }

    updateOutline=e=>{
      e.preventDefault();
      let desc=e.target.value;
      const errors = this.validateStage2(desc);
      this.setState({errors});
      if(Object.keys(errors).length === 0){
          
          this.setState({
              blog_data:{
                ...this.state.blog_data,
                description:e.target.value
              }
          });

      }

      else{
        return;
      }

      
    }

    toggleSelected=(id, key)=>{
      let temp = this.state[key];

      //omit this for multiple selection
      temp=temp.map(item=>{
        if(item.selected)
          item.selected=false
        return item;
      });

      temp[id].selected = !temp[id].selected
      this.setState({
        [key]: temp,
        selectedCategory:temp[id].title
      })
    }

    handleClickOpen=()=>this.setState({open:true})

    handleClose=()=>this.setState({open:false})

    submitBlog=()=>{
      
      let data = this.state.blog_data;
      let selectedCategory = this.state.selectedCategory;
      data["description"]=data["description"];
      data["category"]=(selectedCategory!=="")?selectedCategory:"uncategorized";
      const errors = this.validateStage3(data);

      this.setState({errors});

      if(Object.keys(errors).length === 0){
        this.props.createblogs(data).then(()=>this.props.history.push('/dashboard'));
      }
 
    }

    validateStage1 = (data) => {
      const errors={};
      if(!data.blogdata_string)
        errors.blog_data="oops! Content cannot be blank";
      if(!data.title)
        errors.title="oops! Title cannot be blank";
      return errors;
  }
  validateStage2=(desc)=>{
    const errors={};
    if(desc.length>130){
      errors.descriptionConstraint="oops! Outline should be short and crispy"
    }
    return errors;
  }
    validateStage3 = (data) => {
        const errors={};
        if(!data.blogdata_string)
          errors.blog_data=" oops! Content cannot be blank";
        if(!data.title)
          errors.title="oops! Title cannot be blank";
        if(!data.description)
          errors.description="oops! Outline cannot be blank"
        return errors;
    }

    

    render() {
        const {title,category,errors,selectedCategory} = this.state;
        return (
                  <Container>
                    <Row>
                      
                      <DropdownExtendedColumn xs="12" sm="6" md="4" style={{float:'right'}}>
                            <DropDownStyle
                              titleHelper={{"singular":selectedCategory,"plural":selectedCategory}}
                              title="Select Category"
                              list={category}
                              toggleItem={this.toggleSelected}
                              multipleSelection={false}
                            />
                      </DropdownExtendedColumn>
                      <Column xs="12" sm="6" md="8">
                            <TitleInput 
                                type="text" 
                                id="title"
                                name="title"
                                value={title}
                                placeholder="Title"
                                onChange={this.updatetitle}
                              />
                      </Column>
                    </Row>
                    <Row>
                        <SlateComponent>
                          <div style={{width:'100%',maxWidth:'87vw'}}>
                           <SlateEditor submit={this.submit}/>
                          </div>
                        </SlateComponent>
                        {errors.title && <InlineError text={errors.title} />}
                        {errors.blog_data && <InlineError text={errors.blog_data} />}
                    </Row>
                    
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Outline</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Set an outline/description for your article to make it look outstanding . 
                        </DialogContentText>
                        
                        
                        <TextField
                          autoFocus
                          id="filled-textarea"
                          label="Outline"
                          placeholder="Write your outline within 130 letters"
                          multiline
                          margin="normal"
                          variant="filled"
                          fullWidth
                          onChange={this.updateOutline}
                          value={this.state.blog_data.description}
                        />

                        <DialogContentText>
                          {errors.descriptionConstraint && <InlineError text={errors.descriptionConstraint} />}
                        </DialogContentText>

                        <DialogContentText>
                          {errors.description && <InlineError text={errors.description} />}
                        </DialogContentText>
                        
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={this.submitBlog} color="primary">
                          Publish
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Container>

        );
    }
} 

CreateStory.propTypes ={
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  allcategories:PropTypes.shape({
    primary:PropTypes.arrayOf(PropTypes.string).isRequired,
    other:PropTypes.arrayOf(PropTypes.string).isRequired
  }
  ).isRequired,
  createblogs:PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    allcategories:state.theme && state.theme.allcategories
  }
}

export default withRouter(connect(mapStateToProps,{createblogs})(CreateStory));
