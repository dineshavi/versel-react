

import React from 'react'
import styled from 'styled-components'
import SignIn from '../SignIn/index'

const Title = styled.div`
display: flex;
width: 100%;
justify-content: center;
@media (max-width:968px) {
    flex-direction: column;
  }

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const UnorderedList = styled.ul`

`;
const List=styled.li`
cursor: pointer;
    list-style-type: none;
    // display: inline-block;
    display: flex;
    flex-direction: row;
    @media (max-width:968px) {
        flex-direction: column;
      }
`;
const List1=styled.a`
text-decoration: none;
    color: black;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 500;
    padding: 27px;
    @media (max-width:968px) {
        padding: 0px;
      }
`;

 function Content(){
    return(
        <Title id="menu1">
        <UnorderedList>
<List>
<List1 className="menu1-css">Contact</List1>
<List1 className="menu1-css">Login</List1> 
<List1>  <SignIn/></List1>

</List>
        </UnorderedList>
        </Title>
      
    );
  
    
}
export default Content;







