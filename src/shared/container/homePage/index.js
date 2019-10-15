import React,{useState,useEffect,useRef} from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { APP_NAME } from '../../config'
import Carousel from './components/carousel'
//import LeadGeneration from './components/leadGeneration'
import LazyLoad from 'react-lazyload';
import Loadable from 'react-loadable';

const SlidingTypeContainer = Loadable({
  loader: () => import('./containers/slidingTypeContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

const SlidingCategoryContainer = Loadable({
  loader: () => import('./containers/slidingCategoryContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

const AllCategoryContainer = Loadable({
  loader: () => import('./containers/allCategoryContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

const LeadGeneration = Loadable({
  loader: () => import('./components/leadGeneration'),
  loading() {
    return <div>Loading...</div>
  }
});

const ImgWrapper = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:-99;
`;

const carousel=[
            {   style:"carousel_type1",
                bg_image:"https://res.cloudinary.com/surajsharma/image/upload/v1565173308/muchstoryimages/landscape-101.jpg",
                text:["Ever wondered what attracts your reader ?"]
            },
            {   style:"carousel_type2",
                bg_image:"https://res.cloudinary.com/surajsharma/image/upload/v1571055642/muchstoryimages/foggybuildings.jpg",
                text:["Presenting story has never been so simple"]
            },
            {   style:"carousel_type3",
                bg_image:"https://res.cloudinary.com/surajsharma/image/upload/v1571063147/muchstoryimages/pillowLaptop.jpg",
                text:["Make today Amazing","Write your thoughts || Educate others"]
            }
]



const HomePage = ({allcategories}) =>{
    const [primary,setValue] = useState(allcategories.primary);
    const [activateCategory,setActivation] = useState(false);
    const topRef = useRef();
    useEffect(() => {
            setValue(allcategories.primary);
            setActivation(true);
            topRef.current.scrollTo(0, 0);
        }, [allcategories]);
  return(
    <div ref={topRef} style={{margin:'0',padding:'0',width:'100vw',overflow:'hidden'}}>
    <Helmet
      meta={[
        { name: 'description', content: `${APP_NAME} is the next generation writing platform for a story teller to tell their unique stories.` },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <Carousel carousel={carousel}/>
    <LazyLoad height={200} offset={100}>
        <SlidingTypeContainer title="LATEST ARTICLES"  type='latest'/>
    </LazyLoad> 
    <LazyLoad height={200} offset={100}>
        <SlidingCategoryContainer title={primary[0]||""} category={primary[0]} category_type="categoryA"/>
    </LazyLoad>
    
    <LeadGeneration title="Loved this PRODUCT ? Get in touch"/>
    
    <LazyLoad height={200} offset={100}>
        <SlidingCategoryContainer title={primary[1]||""} category={primary[1]} category_type="categoryB"/>
    </LazyLoad>
    <div style={{height:'100px',width:'100%',clear:'both'}}></div>
    <LazyLoad height={200} offset={100}>
        <AllCategoryContainer title="All Articles"/>
    </LazyLoad>
    
    
    <ImgWrapper style={{backgroundImage:`url(https://res.cloudinary.com/surajsharma/image/upload/v1571063482/muchstoryimages/adventure-black-and-white.jpg)`}}>
 
    </ImgWrapper>
    
  </div>);

}

HomePage.propTypes={
  allcategories:PropTypes.shape({
    primary:PropTypes.arrayOf(PropTypes.string).isRequired,
    other:PropTypes.arrayOf(PropTypes.string).isRequired
  }
  ).isRequired
};

function mapStateToProps(state){
  return {
    allcategories:state.theme && state.theme.allcategories
  }
}

export default connect(mapStateToProps,null)(HomePage);

