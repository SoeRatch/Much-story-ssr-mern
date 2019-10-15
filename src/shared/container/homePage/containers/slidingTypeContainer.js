import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { fetchThemeTypeCollections } from '../../../actions/theme';
import SlidingComponent from '../components/slidingComponent';

class SlidingTypeContainer extends React.Component {

componentDidMount(){
    const type = this.props.type;
    this.props.fetchThemeTypeCollections(type);
}
   
  render () {
    const {title,latestCollection } = this.props;

    return (
        <SlidingComponent data={latestCollection} title={title}/>
    );
  }
}


SlidingTypeContainer.propTypes={
  title:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  fetchThemeTypeCollections:PropTypes.func.isRequired,
  latestCollection:PropTypes.array.isRequired
};

function mapStateToProps(state){
  return {
    latestCollection:state.theme && state.theme.latest
  }
}

export default connect(mapStateToProps,{fetchThemeTypeCollections})(SlidingTypeContainer);
