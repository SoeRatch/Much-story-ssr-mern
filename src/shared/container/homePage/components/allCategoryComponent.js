import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import CarouselButton from '../../../lib/buttons/carouselbutton';
import { LeadTitle } from '../../../lib/Headers';
import { fetchtypecollections } from '../../../actions/blogs';
import { Row,Column } from '../../../lib/Grid';
import {Link} from 'react-router-dom';
import {
  CardContainer,
  ImageWrapper,
  TagBox,
  CardTitle,
  CardMeta,
  CardView
} from '../../../lib/Card';

const Container = styled.div`
  position:relative;
  margin:0;
  white-space: nowrap;
  overflow:hidden;
  padding:3%;
`;

class AllCategoryComponent extends React.Component {


  render () {
    const {data,title} = this.props;

    return (
        <div style={{backgroundImage:'linear-gradient(rgba(0,0,0,0) 0%, #fdfaf5 10%)',margin:'0',width:'100vw'}}>
          <div style={{margin:'0',padding:'0 4%',paddingTop:'5%'}}>
            <LeadTitle>
               {title} 
            </LeadTitle>
          </div>
          <Container>
            <Row margin_bottom="15px">
              {
                data && data[0] &&
                <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[0].username}/${data[0].title.split(' ').join('-')}-${data[0]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[0].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[0].category}</span></TagBox>
                      <CardTitle>{data[0].title}</CardTitle>
                      <CardMeta>By {data[0].username}</CardMeta>
                      <CardView>
                          {data[0].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
              }
              {
                data && data[1] &&
              <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[1].username}/${data[1].title.split(' ').join('-')}-${data[1]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[1].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[1].category}</span></TagBox>
                      <CardTitle>{data[1].title}</CardTitle>
                      <CardMeta>By {data[1].username}</CardMeta>
                      <CardView>
                          {data[1].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
            }
            {
                data && data[2] &&
               <Column xs="12" sm="12" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[2].username}/${data[2].title.split(' ').join('-')}-${data[2]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[2].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[2].category}</span></TagBox>
                      <CardTitle>{data[2].title}</CardTitle>
                      <CardMeta>By {data[2].username}</CardMeta>
                      <CardView>
                          {data[2].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
              }
            </Row>
            <Row margin_bottom="50px">
            {
                data && data[3] &&
               <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[3].username}/${data[3].title.split(' ').join('-')}-${data[3]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[3].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[3].category}</span></TagBox>
                      <CardTitle>{data[3].title}</CardTitle>
                      <CardMeta>By {data[3].username}</CardMeta>
                      <CardView>
                          {data[3].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
              }
              {
                data && data[4] &&
               <Column xs="12" sm="6" md="8" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[4].username}/${data[4].title.split(' ').join('-')}-${data[4]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{height:'68%',backgroundImage: `url(${data[4].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[4].category}</span></TagBox>
                      <CardTitle>{data[4].title}</CardTitle>
                      <CardMeta>By {data[4].username}</CardMeta>
                    </Link>
                  </CardContainer>
                
              </Column>
              
              }
              
            </Row>

             <Row margin_bottom="15px">
             {
                data && data[5] &&
              <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[5].username}/${data[5].title.split(' ').join('-')}-${data[5]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[5].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[5].category}</span></TagBox>
                      <CardTitle>{data[5].title}</CardTitle>
                      <CardMeta>By {data[5].username}</CardMeta>
                      <CardView>
                          {data[5].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
              }

              {
                data && data[6] &&
              <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[6].username}/${data[6].title.split(' ').join('-')}-${data[6]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[6].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[6].category}</span></TagBox>
                      <CardTitle>{data[6].title}</CardTitle>
                      <CardMeta>By {data[6].username}</CardMeta>
                      <CardView>
                          {data[6].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
            }

            {
                data && data[7] &&
               <Column xs="12" sm="12" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[7].username}/${data[7].title.split(' ').join('-')}-${data[7]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[7].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[7].category}</span></TagBox>
                      <CardTitle>{data[7].title}</CardTitle>
                      <CardMeta>By {data[7].username}</CardMeta>
                      <CardView>
                          {data[7].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
              }
            </Row>
            <Row margin_bottom="50px">
            {
                data && data[8] &&
             <Column xs="12" sm="6" md="8" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[8].username}/${data[8].title.split(' ').join('-')}-${data[8]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{height:'68%',backgroundImage:`url(${data[8].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[8].category}</span></TagBox>
                      <CardTitle>{data[8].title}</CardTitle>
                      <CardMeta>By {data[8].username}</CardMeta>
                    </Link>
                  </CardContainer>
                
              </Column>
            }

            {
                data && data[9] &&
               <Column xs="12" sm="6" md="4" style={{height:'600px'}}>
                
                  <CardContainer>
                    <Link to={`/${data[9].username}/${data[9].title.split(' ').join('-')}-${data[9]._id}`} style={{textDecoration:'none'}}>
                      <ImageWrapper style={{backgroundImage: `url(${data[9].thumbnail_url})`}}></ImageWrapper>
                      <TagBox><span style={{display:'block'}}>{data[9].category}</span></TagBox>
                      <CardTitle>{data[9].title}</CardTitle>
                      <CardMeta>By {data[9].username}</CardMeta>
                      <CardView>
                          {data[9].description}
                      </CardView>
                    </Link>
                  </CardContainer>
                
              </Column>
            }
            </Row>

      
          </Container>

    </div>
    );
  }
}


AllCategoryComponent.propTypes={
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


export default AllCategoryComponent;
