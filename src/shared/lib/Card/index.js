import styled from 'styled-components'

export const CardContainer=styled.div`           
      height:100%;
      padding:15px;

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
`;
export const ImageWrapper = styled.div`
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    
     ${({height_value})=>height_value?`height:${height_value}`:'height:35%'};

`;

export const TagBox = styled.div`
  position:'relative';
  width:fit-content;
  height:fit-content;
  margin:-15px 8%;
  background-color:rgb(121, 210, 206);
  font-family: proxima-nova,Proxima Nova,sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-style:bold;
  span {
    display: block;
    padding:12px;
    color:#282726;
  }
`;

export const CardTitle = styled.h4`
  font-family: Poppins,Helvetica,Arial,sans-serif;
  display:block;
  font-size: 24px;
  font-weight: 700;
  font-style:bold;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding: 12px 24px 4px;
  color:#2e2e2e;
  margin-bottom:0;
`;

export const CardMeta = styled.p`
  font-family: Poppins,Helvetica,Arial,sans-serif;
  color:#909090;
  letter-spacing:0.4px;
  padding:0 24px;
  margin:0;
  display:block;
  
`

export const CardView = styled.p`
  font-family: Merriweather,Helvetica,Arial,sans-serif;
  font-size:16px;
  line-height:28px;
  color:#2e2e2e;
  letter-spacing:0;
  font-weight:300;
  padding:20px 24px 24px;
  display:block;
  margin:0;
  
`