import React from 'react'
import styled from 'styled-components'


const DevelopDivisionTag= styled.div`
width: 100%;
background: #0070f3;



`;

const DevelopSubDivision1Tag= styled.div`

display: flex;
flex-direction: row;
padding-top: 24px;
padding-bottom: 24px;
@media (max-width: 968px) {
    display: flex;
    flex-direction: column;


}
`;

const DevelopSubDivision2Tag= styled.div`

display: flex;
flex: 1;
justify-content: center;
flex-direction: row;
padding-right: 24px;
padding-left: 24px;
@media (max-width: 968px) {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;

}
`;
const DevelopSubDivision3Tag= styled.div`

display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
@media (max-width: 968px) {

}
`;
const DivisionH2Tag= styled.div`

display: flex;
flex-direction: column;
flex: 2;
h2 {
    font-size: 3.5rem;
    width: 100%;
    font-weight: 800;
 
    // font-family: Inter,Roboto,sans-serif;

    color: #ffff;
    text-align: center;

}
h4 {
    font-size: 16px;
    width: 100%;
    font-weight: 700;
    font-family:"Segoe UI";
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    width: 100%;
    font-weight: 400;

    font-family: Inter,Roboto,sans-serif;

    color: rgba(255, 255, 255, 0.7);
    text-align: center;
}
@media (max-width: 968px) {
    display: flex;
  
    flex-direction: column;
    h2 {
        font-size: 3.5rem;
        width: 100%;
        font-weight: 800;
        // font-family: Inter,Roboto,sans-serif;
        color: #ffff;
        text-align: center;
    margin-block-end: 0em;
    margin-block-start: 0em;
    }
    h4 {

        font-size: 17px;
        width: 100%;
        font-weight: 400;
        font-family: "Inter","Segoe UI";
        color: rgba(255, 255, 255, 0.7);
        text-align: center;

    }
}
`;
// Create a Wrapper component that'll render a <section> tag with some styles

const Title = styled.div`
min-width: 200px;
@media (max-width: 968px) {
    min-width: 200px;
}
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const UnorderedList = styled.ul`
border: 1px solid black;
    border-radius: 6px;
    /* width: 100px; */
    /* height: 31px; */
    background: black;
    color: white;
    list-style-type: none;
    padding: 0px 0px 0px 0px;
    @media (max-width:968px) {
        flex-direction: column;
      }
`;
const List=styled.li`
padding: 15px;
@media (max-width: 968px) {
    padding: 15px;
}
`;
const List1=styled.a`
text-decoration: none;
text-decoration: none;
color: white;
font-size: 16px;
font-family:"Segoe UI";
font-weight: 700;
display: flex;
justify-content: center;
    @media (max-width:968px) {
        flex-direction: column;
        display: flex;
        align-items: center;
        font-family:"Segoe UI";
        font-weight: 500;
      }
`;
 function DevelopComponent(){
    return(
     
        
<DevelopDivisionTag>
 <DevelopSubDivision1Tag>
     <DevelopSubDivision2Tag>
         <DivisionH2Tag>
         <span><h2>
     Develop. Preview. Ship.

 </h2> <h4>The development platform for the best frontend teams.</h4></span>

         </DivisionH2Tag>
         <DevelopSubDivision3Tag>
     <Title>
        <UnorderedList>
<List>
<List1>
    Start Deploying
    </List1>

</List>
        </UnorderedList>
        </Title>
     </DevelopSubDivision3Tag>
     </DevelopSubDivision2Tag>

 </DevelopSubDivision1Tag>

 </DevelopDivisionTag>
  
    );

    
}
export default DevelopComponent;






















