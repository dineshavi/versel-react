
import React from 'react'
import styled from 'styled-components'


const Title = styled.div`



display: flex;
width: 100%;
justify-content: center;
padding:17px 0px;
@media (max-width: 968px) {

    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const UnorderedList = styled.ul`
padding:0px;
`;
const List=styled.li`
cursor: pointer;
    list-style-type: none;
    display:flex;
    flex-direction: row;
    @media (max-width: 968px) {
        flex-direction: column;
      }
`;
const List1=styled.a`
text-decoration: none;
color: #888;
font-size: 16px;
font-family: sans-serif;
font-weight: 600;
    padding: 12px;
    @media (max-width: 968px) {
        padding: 0px;
      }
`;

 function NavBar(){
    return(
        <Title id="menu">
        <UnorderedList>
<List>
<List1>Templates</List1>
<List1>Analytics</List1>
 <List1>Pricing</List1>
</List>
        </UnorderedList>
        </Title>
      
    );
  
    
}
export default NavBar;



