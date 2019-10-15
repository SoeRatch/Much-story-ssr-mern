import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";

const SlideStyle = styled.div`
    display:inline-block;
    width:100%;
    height: 100%; 
    overflow: hidden;
`;

const ImgContainer=styled.div`
      width:100%;
      height:100%;
      margin:0 auto;
      background-size:cover;
      background-repeat:no-repeat;
      background-position:center;

`;

const TextContainer = styled.div`
      position:absolute;
      background:rgba(0,0,0,0.2);
      width:100%;
      top:50%;
      margin:-10% 0 0 0;
      text-align:center;
      text-transform:uppercase;
      font-family:'Itim', cursive;
      color:white;
      font-size:calc(0.735rem + 1.6vw);
      letter-spacing:0.1em;
      -webkit-font-smoothing: antialiased;

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
      vertical-align: middle;

      @media only screen and (min-width:768px){
         margin:-5% 0 0 0;
         
      }

`;

const TextStyle=styled.p`
  padding:0 25px;
`
const Slide = ({ item }) => {
  const styles = {
    backgroundImage: `url(${item.bg_image})`
  }
  return <SlideStyle className="slidecarousel">
            <ImgContainer style={styles}>
              <TextContainer>
                {item && item.text && item.text.map((text,index)=>{
                      return <TextStyle key={index} styletype={item.style} index={index}>{text}</TextStyle>;
                  })
                }
              </TextContainer>
            </ImgContainer>            
          </SlideStyle>
}


const Container = styled.div`
  position:relative;
  width:100vw;
  height:60vh;
  margin:20px 0 0 0;
  padding:0;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (min-width:768px){
       margin:0;
    }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;


const ArrowLeftStyle = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;

  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`

const ArrowRightStyle = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;

 transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`
const DotWrapper=styled.div`
   position:absolute;
    left:50%;
    bottom:7%;
    width:20%;
    z-index:1;
    margin-left:-10%;
    display:flex;
    justify-content:space-between;


    @media only screen and (min-width:768px){
      width:10%;
      margin-left:-5%;
    }

`;

const Dot=styled.div`
    height: 10px;
    width: 10px;
    background: white;
    opacity:0.8;

    border-radius: 10px;
    display: inline-block;
`;

const ActiveDot=styled.div`
    height: 10px;
    background: white;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);
    width:20px
`;

const PlayButton=styled.div`
  width: 5px;
  height: 5px;
  border-style: solid;
  border-width: 5px 0px 5px 10px;
  border-color: transparent transparent transparent white;
  box-sizing: border-box;
`;

const PauseButton=styled.div`
 width: 10px;
  height: 10px;
  border-style: solid;
  border-color:white;
  border-style: double;
  border-width: 0px 0px 0px 10px;
`;



class Carousel extends React.Component {
state = {
      currentIndex: 0,
      translateValue: 0,
      pause:false
    };
    
startlooping=()=>{
  let imglen= this.props.carousel.length;

         if(this.state.currentIndex === imglen-1){
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

componentDidMount() {
    this._interval = setInterval(() =>this.startlooping(),4000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

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
     let imglen= this.props.carousel.length;

     if(this.state.currentIndex === imglen-1){
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

  selectSlide=(e,i)=>{
    e.preventDefault();
    let diff = i-this.state.currentIndex;
    this.setState({
      currentIndex:i,
      translateValue:this.state.translateValue-diff*this.slideWidth()
    });
  }

  slideWidth = () => {
      let element = document.querySelector('.slidecarousel');
      return element.clientWidth;  
  }

  playpause=e=>{
    e.preventDefault();
    if(!this.state.pause)
      clearInterval(this._interval);
    else
      this._interval = setInterval(() =>this.startlooping(),4000);

    this.setState({
      pause:!this.state.pause
    })
  }

  render () {

    const { carousel } = this.props;

    return (
      <Container>
        <DotWrapper>
          {!this.state.pause && <PauseButton onClick={this.playpause}/>}
          {this.state.pause && <PlayButton onClick={this.playpause}/>}
            {
                    this.props.carousel && this.props.carousel.map((item, i) => {

                      if(i===this.state.currentIndex)
                        return(
                          <ActiveDot key={i}/>
                        )
                      else
                         return(
                          <Dot key={i} onClick={(e)=>this.selectSlide(e,i)}/>
                        )

                      }
                    )
            }
        </DotWrapper>

        <SliderWrapper style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
              {
                this.props.carousel && this.props.carousel.map((item, i) => (
                  <Slide key={i} item={item} />
                ))
              }
          </SliderWrapper >

        <div onClick={this.previousSlide} 
          style={{
            position:'absolute',
            top:'50%',
            margin:'-2% 0 0 3%'
          }}>
        <ArrowLeftStyle ></ArrowLeftStyle>
      </div>

        <div onClick={this.nextSlide} 
          style={{
            position:'absolute',
            top:'50%',
            right:'0',
            margin:'-2% 4% 0 0'
          }}>
      <ArrowRightStyle ></ArrowRightStyle>
      </div>
      

      </Container>
    );
  }
}

Carousel.propTypes={
  carousel:PropTypes.array.isRequired
};

export default Carousel;
