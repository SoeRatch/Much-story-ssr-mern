import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { 
          fetchThemeCategoryACollections,
          fetchThemeCategoryBCollections,
          fetchThemeCategoryCCollections 
        } from '../../../actions/theme';
import SlidingComponent from '../components/slidingComponent';

const SlidingCategoryContainer =({title,theme,category_type,category,fetchThemeCategoryACollections,fetchThemeCategoryBCollections,fetchThemeCategoryCCollections})=>{
    const [cat,setValue] = useState(category);
    const [tit,setTitle]=useState(title)
    useEffect(() => {
            setValue(category);
            setTitle(category);
            if(category_type=='categoryA' && category)
              fetchThemeCategoryACollections(category);
            if(category_type=='categoryB' && category)
              fetchThemeCategoryBCollections(category);
            if(category_type=='categoryC' && category)
              fetchThemeCategoryCCollections(category);
        }, [category])

    return (
        <SlidingComponent data={theme[category_type]} title={tit}/>
    );
  }



SlidingCategoryContainer.propTypes={
  title:PropTypes.string.isRequired,
  category_type:PropTypes.string.isRequired,
  fetchThemeCategoryACollections:PropTypes.func.isRequired,
  fetchThemeCategoryBCollections:PropTypes.func.isRequired,
  fetchThemeCategoryCCollections:PropTypes.func.isRequired,
  theme:PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    theme:state.theme
  }
}

export default connect(mapStateToProps,{ fetchThemeCategoryACollections,fetchThemeCategoryBCollections,fetchThemeCategoryCCollections })(SlidingCategoryContainer);
