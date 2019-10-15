import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { fetchThemeAllCollections } from '../../../actions/theme';
import AllCategoryComponent from '../components/allCategoryComponent';

const AllCategoryContainer=({allCollection,fetchThemeAllCollections,title})=>{
    const [allblogs,setValue] = useState(allCollection);
    useEffect(() => {
        fetchThemeAllCollections('all',10,0).then(result=>{
          setValue(result);
        });
    },[]);
    return(<AllCategoryComponent data={allblogs} title={title}/>
        
    );
  }



AllCategoryContainer.propTypes={
  title:PropTypes.string.isRequired,
  fetchThemeAllCollections:PropTypes.func.isRequired,
  allCollection:PropTypes.arrayOf(PropTypes.shape({
      title:PropTypes.string.isRequired,
      username:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      thumbnail_url:PropTypes.string.isRequired,
      votes:PropTypes.number.isRequired,
      category:PropTypes.string.isRequired,
      _id:PropTypes.string.isRequired
  })).isRequired,
};

function mapStateToProps(state){
  return {
    allCollection:state.theme && state.theme.allCollection
  }
}

export default connect(mapStateToProps,{fetchThemeAllCollections})(AllCategoryContainer);
