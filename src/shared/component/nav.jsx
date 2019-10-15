import React from 'react'
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Msbutton from '../lib/buttons/muchstorynavbutton'
import Listhoverbutton from '../lib/buttons/listhoverbutton';
import { logout } from '../actions/auth';
import { fetchAllCategoryNames } from '../actions/theme';
import {Row,Column} from '../lib/Grid';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {
  HOME_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  CREATE_STORY_ROUTE
} from '../routes'



const TopBarWrapper = styled.div`
 position:fixed;
 width:100%;
 top:0;
 padding:0;
 padding-bottom:10px;
 padding-top:10px;
 z-index:999;
`;

const Bar = styled.div`
    width:35px;
    height:5px;
    background-color:#555;
    margin:6px 0;
    transition:all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;

const MenuContainer = styled.div`
    cursor:pointer;
    position:fixed;
    right:20px;
    top:20px;
    z-index:999;
`;

const navStyle = theme => ({
  sidebarWrapper: {
    position: "relative",
    marginTop:'50px',
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1",
      boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      width: 260,
      [theme.breakpoints.up("md")]: {
            width: 260,
            position: "fixed",
            height: "100%"
          },
      [theme.breakpoints.down("sm")]: {
            width:260,
           boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            zIndex: "1032",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            transform: `translate3d(-260px, 0, 0)`,
            transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          }    
    }

})

class Nav extends React.Component{
  state={
    mobileOpen:false
  }

handleScroll=(e)=>{
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let topbarObject = document.getElementById("topbar");
    let topbarObjectMobile = document.getElementById("topbarmobile");
    let navObject = document.getElementById("navwrapper");

          if (scrollTop > 50) {
          let alphaValue=(scrollTop-50)/300;
          topbarObject.style.background = `rgba(121, 210, 206,${alphaValue})`;
          topbarObject.style.boxShadow="0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)";
          topbarObjectMobile.style.background = `rgba(121, 210, 206,${alphaValue})`;
          topbarObjectMobile.style.boxShadow="0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)";
         
        }
        else{
          topbarObject.style.background = '';
          topbarObject.style.boxShadow='';
          topbarObjectMobile.style.background = '';
          topbarObjectMobile.style.boxShadow='';
        } 
  }


   handleDrawerToggle=()=>{
      let b1=document.getElementById("bar1");
      let b2=document.getElementById("bar2");
      let b3=document.getElementById("bar3");

      

      this.setState({
        mobileOpen:!this.state.mobileOpen
      },function(){
          if(this.state.mobileOpen){
            b1.style.transform="rotate(-45deg) translate(-9px, 6px)";
            b2.style.opacity="0";
            b3.style.transform="rotate(45deg) translate(-8px, -8px)";
          }
          else{
            b1.style.transform="rotate(0deg)";
            b2.style.opacity="1";
            b3.style.transform="rotate(0deg)";
          }

      });

    };
  

    resizeFunction=()=>{
      if (window.innerWidth >= 960) {
        this.setState({ mobileOpen: false });
      }
    }


  componentDidMount=()=>{
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.resizeFunction);
    this.init();
  }

  init=()=>{
    this.props.fetchAllCategoryNames();
  }

  componentWillUnmount=()=>{
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeFunction);
  }
  

  loggingout = e =>{
    e.preventDefault();
    this.props.logout().then((res)=>{
      this.props.history.push("/");
    });
  } 

  makeCategoryRoute=(param)=>`/category/${param.split(' ').join('-')}`;

  render(){
    const {classes,allcategories}=this.props;
    const { mobileOpen } = this.state;
    const {isAuthenticated, logout} = this.props;
    const ACTIVATE_ACTION= true;
    const defaultcategory = allcategories && allcategories.primary.map(item=>({
      route:this.makeCategoryRoute(item),label:item, md:'1.8', sm:'2'
    }));

    const othercategorynames = allcategories && allcategories.other;

    const defaultcategoryMobile = allcategories && allcategories.primary.map(item=>({
      route:this.makeCategoryRoute(item),label:item, md:'4'
    }));

    const othercategoryMobile = allcategories && allcategories.other.map(item=>({
      route:this.makeCategoryRoute(item),label:item, md:'4'
    }));
    return(
          <div style={{height:'13.5vh',zIndex:'999',position:'relative'}}>

            <Hidden smDown implementation="css">
                  <TopBarWrapper id="topbar">
                    
                      <Row>

                        <Column xs="12" sm="2" md="2">
                          <NavLink to="/" style={{textDecoration:'none'}}>
                          <img 
                              style={{width:'120px',height:'62px',border:'5px solid white'}}
                              src="https://res.cloudinary.com/surajsharma/image/upload/v1570562620/muchstoryimages/MUCHSTORY-LOGO-V2.jpg"  
                              lt="logo" />
                          </NavLink>
                        </Column>


                    {!isAuthenticated && 
                          <Column xs="12" sm="9" md="9" style={{opacity:'1'}} id="navwrapper">
                          <Row>
                              {[
                                        
                                       ...defaultcategory,
                                       { route:HOME_PAGE_ROUTE, label: 'Much More ..', md:'1.8', sm:'2' }, 
                                        { route:CREATE_STORY_ROUTE, label: 'Create Story', md:'2', sm:'2',action:ACTIVATE_ACTION }

                                      ].map((link,i) => (
                                        <Column xs="12" sm={link.sm} md={link.md} key={i} style={link.action?{float:'right'}:{}}>
                                          
                                            {(link.label!='Much More ..')&&
                                              <NavLink to={link.route} style={{textDecoration:'none'}} activeStyle={{ color: 'limegreen'}} exact>
                                                <Msbutton label={link.label} action={link.action}/>
                                              </NavLink>
                                            }
                                          {(link.label=='Much More ..')&&<Listhoverbutton label={link.label} action={link.action} othercategorynames={othercategorynames}/>}
                                        </Column>
                                        
                                      ))
                              }
                          </Row>
                        </Column>
                    }

                    {isAuthenticated &&
                          <Column xs="12" sm="9" md="9" style={{opacity:'1'}} id="navwrapper">
                          <Row>
                              {[
                                        
                                        ...defaultcategory,
                                        { route:HOME_PAGE_ROUTE, label: 'Much More ..', md:'1.8', sm:'2' },
                                        { route:DASHBOARD_PAGE_ROUTE, label: 'Dashboard', md:'2', sm:'2',action:ACTIVATE_ACTION},
                                        { route:CREATE_STORY_ROUTE, label: 'Create Story', md:'2', sm:'2',action:ACTIVATE_ACTION}
                                      ].map((link,i) => (
                                        <Column xs="12" sm={link.sm} md={link.md} key={i} style={link.action?{float:'right'}:{}}>
                                          {(link.label!='Much More ..')&&
                                              <NavLink to={link.route} style={{textDecoration:'none'}} activeStyle={{ color: 'limegreen'}} exact>
                                                <Msbutton label={link.label} action={link.action}/>
                                              </NavLink>
                                            }
                                          {(link.label=='Much More ..')&&<Listhoverbutton label={link.label} action={link.action} othercategorynames={othercategorynames}/>}
                                        
                                        </Column>
                                        
                                      ))
                              }
                          </Row>
                        </Column>
                    }


                        <Column xs="12" sm="1" md="1" style={{float:'right'}}>
                          {isAuthenticated?<div  
                                                onClick={this.loggingout}
                                                style={{textDecoration:'none',textAlign:'center',width:'70%',float:'right',marginTop:'3px'}}>
                                              <PersonOutlineIcon />
                                              <p style={{margin:'0',fontSize:'13px'}}>LOG OUT</p>
                                           </div>
                          :
                            <NavLink to="/register"
                              style={{textDecoration:'none',width:'70%',float:'right',marginTop:'3px'}} 
                              activeStyle={{ color: 'limegreen'}} 
                              exact>
                                   <PersonOutlineIcon fontSize="large" color="action" />
                          </NavLink>
                        }
                        </Column>   

                      </Row>
                </TopBarWrapper>
        </Hidden>

         <Hidden mdUp implementation="css">
                  <TopBarWrapper id="topbarmobile">
                    
                      <Row>

                        <Column xs="12" sm="4" md="2">
                          <NavLink to="/" style={{textDecoration:'none'}}>
                            <img 
                                style={{width:'140px',height:'64px',margin:'0 auto', display:'table',borderBottom:'3px solid white'}}
                                src="https://res.cloudinary.com/surajsharma/image/upload/v1570562620/muchstoryimages/MUCHSTORY-LOGO-V2.jpg"  
                                lt="logo" />
                          </NavLink>
                        </Column>
                      </Row>

                  </TopBarWrapper>

                  <Drawer
                      open={mobileOpen}
                      classes={{
                        paper:classes.drawerPaper
                      }}
                      onClose={this.handleDrawerToggle}
                    >
                      <MenuContainer onClick={this.handleDrawerToggle}>
                        <Bar style={{transform:"rotate(-45deg) translate(-9px, 6px)"}}></Bar>
                        <Bar style={{opacity:'0'}}></Bar>
                        <Bar style={{transform:"rotate(45deg) translate(-8px, -8px)"}}></Bar>
                      </MenuContainer>

                      <div className={classes.sidebarWrapper}>  
                        <List className={classes.list}>
                            
                            <Row>
                                                     
                                            <Column style={{marginBottom:'40px'}} onClick={this.handleDrawerToggle}>
                                                  {isAuthenticated?<div  
                                                                        onClick={this.loggingout}
                                                                        style={{textDecoration:'none'}}>
                                                                        
                                                                          <Msbutton label="logout" />
                                                                        
                                                                   </div>
                                                  :
                                                    <NavLink to="/register"
                                                      style={{textDecoration:'none'}} 
                                                      activeStyle={{ color: 'limegreen'}} 
                                                      exact>
                                                            
                                                                 <Msbutton label="login / signup" />
                                                            
                                                    </NavLink>
                                                } 
                                            </Column> 
                                      {!isAuthenticated &&
                                        [
                                                { route:CREATE_STORY_ROUTE, label: 'Create Story', md:'4',action:ACTIVATE_ACTION },
                                                ...defaultcategoryMobile,
                                                ...othercategoryMobile
                                                
                                              ].map(link => (
                                                <Column key={link.route} onClick={this.handleDrawerToggle}>
                                                  <NavLink to={link.route} style={{textDecoration:'none'}} activeStyle={{ color: 'limegreen'}} exact>
                                                   
                                                      <Msbutton label={link.label} action={link.action}/>
                                                    
                                                  </NavLink>
                                                </Column>
                                                
                                              ))
                                    }

                                    {isAuthenticated &&
                                        [
                                                { route:CREATE_STORY_ROUTE, label: 'Create Story', md:'4',action:ACTIVATE_ACTION },
                                                { route:DASHBOARD_PAGE_ROUTE, label: 'Dashboard', md:'4',action:ACTIVATE_ACTION },
                                                ...defaultcategoryMobile,
                                                ...othercategoryMobile
                                                
                                              ].map(link => (
                                                <Column key={link.route} onClick={this.handleDrawerToggle}>
                                                  <NavLink to={link.route} style={{textDecoration:'none'}} activeStyle={{ color: 'limegreen'}} exact>
                                                    
                                                      <Msbutton label={link.label} action={link.action}/>
                                                    
                                                  </NavLink>
                                                </Column>
                                                
                                              ))
                                    }
                            </Row>
                        </List>
                      </div>
                    </Drawer> 
                  <MenuContainer onClick={this.handleDrawerToggle}>
                    <Bar id="bar1"></Bar>
                    <Bar id="bar2"></Bar>
                    <Bar id="bar3"></Bar>
                  </MenuContainer>
          </Hidden>

        </div>

      );
  }
}

Nav.propTypes={
  history: PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired,
  classes:PropTypes.object.isRequired,
  logout:PropTypes.func.isRequired,
  fetchAllCategoryNames:PropTypes.func.isRequired,
  allcategories:PropTypes.shape({
    primary:PropTypes.arrayOf(PropTypes.string).isRequired,
    other:PropTypes.arrayOf(PropTypes.string).isRequired
  }
  ).isRequired
};

function mapStateToProps(state){
  return {
    isAuthenticated:state.user && !!state.user.token,
    allcategories:state.theme && state.theme.allcategories
  }
}

export default withRouter(withStyles(navStyle)(connect(mapStateToProps,{logout,fetchAllCategoryNames})(Nav)));
