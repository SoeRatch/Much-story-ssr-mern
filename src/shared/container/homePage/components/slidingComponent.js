import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import CarouselButton from '../../../lib/buttons/carouselbutton';
import { LeadTitle } from '../../../lib/Headers';
import { fetchtypecollections } from '../../../actions/blogs';


const Container = styled.div`
  position:relative;
  width:100vw;
  height:50vh;
  margin:0;
  padding:0;
  white-space: nowrap;
  overflow:hidden;

`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;


function getWidthString(span){
  if(!span) return;

  let width =span/12 * 100; 
  return `width:${width}%;`;
}

const SlideStyle = styled.div`
    display:inline-block;
    height: 100%; 
    overflow: hidden;

    ${({ xs }) => (xs?getWidthString(xs) : "width:100%")};

    @media only screen and (min-width:768px){
      ${({ sm })=>sm && getWidthString(sm)};
    }

    @media only screen and (min-width:992px){
      ${({ md })=>md && getWidthString(md)};
    }

    @media only screen and (min-width:1200){
      ${({ lg })=>lg && getWidthString(lg)};
    }

    h4{
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
    }
`;

const ImgContainer=styled.div`
      width:80%;
      height:70%;
      border-radius:15px;
      margin:0 auto;
      overflow: hidden;

      &:hover .im{
        transform: scale(1.2);
      }
`;
const ImageWrapper = styled.div`
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    width:100%;
    height:100%;
    transition:all 0.3s ease-in-out 0s;
`;

const HeaderContainer=styled.div`
      width:80%;
      height:30%;
      margin:0 auto;
      overflow: hidden;
`;


const Slide = ({ blogdetail }) => {
  const styles = {
    backgroundImage: `url(${blogdetail.thumbnail_url})`
  }
  return <SlideStyle sm="4" className="slide">
          <Link to={`/${blogdetail.username}/${blogdetail.title.split(' ').join('-')}-${blogdetail._id}`} style={{textDecoration:'none'}}>
            <ImgContainer>
              <ImageWrapper style={styles} className="im">
              </ImageWrapper>
            </ImgContainer>
            <HeaderContainer>
              <h4 style={{textAlign:'left',color:'black'}}>{blogdetail.title}</h4>
            </HeaderContainer>
          </Link>
          </SlideStyle>
}





class SlidingComponent extends React.Component {
state = {
      currentIndex: 0,
      translateValue: 0
    };
    
previousSlide=(e)=>{
    e.preventDefault();
    console.log("clicked");
    if(this.state.currentIndex === 0)
      return;

    this.setState({
      currentIndex:this.state.currentIndex-1,
      translateValue:this.state.translateValue+this.slideWidth()
    });
    
  }

  nextSlide=(e)=>{
     e.preventDefault();
     console.log("clicked");
     let imglen= this.props.data.length;

     if(this.state.currentIndex === imglen-3){
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
     }

    this.setState({
      currentIndex:this.state.currentIndex+1,
      translateValue:this.state.translateValue-this.slideWidth()
    });
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }


  render () {
    const {title,data } = this.props;

    return (
        <div style={{backgroundColor:'#fdfaf5',margin:'0',marginTop:'-38px',padding:'0'}}>
          <div style={{margin:'0',padding:'0 4%',paddingTop:'5%'}}>
            <LeadTitle>
               {title} 
            </LeadTitle>
          </div>

          <Container>
           <SliderWrapper style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
              
              {
                data && data.map((item, i) => (
                  <Slide key={i} blogdetail={item} />
                ))
              }

          </SliderWrapper >

              <div onClick={this.previousSlide} 
              style={{
                position:'absolute',
                top:'50%',
                margin:'-6% 0 0 1%'
              }}>
            <CarouselButton direction='left' style={{position:'absolute'}}/>
          </div>

        <div onClick={this.nextSlide} 
          style={{
            position:'absolute',
            top:'50%',
            right:'0',
            margin:'-6% 1% 0 0'
          }}>
      <CarouselButton direction='right' style={{position:'absolute'}}/>
      </div>
      
        </Container>

    </div>
    );
  }
}


SlidingComponent.propTypes={
  data:PropTypes.arrayOf(PropTypes.shape({
    title:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail_url:PropTypes.string.isRequired,
    votes:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
    _id:PropTypes.string.isRequired
  })).isRequired
};


export default SlidingComponent;
