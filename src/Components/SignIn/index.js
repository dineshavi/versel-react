import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
// display: flex;
// // padding: 24px 0px 23px 0px;
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
// background: black;
`;
const List1=styled.a`
text-decoration: none;
    color: white;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    // padding: 30px;
    @media (max-width:968px) {
        flex-direction: column;
      }
`;
 function SignIn(){
    return(
     
        <Title>
        <UnorderedList>
<List>
<List1>
    Sign up
    </List1>

</List>
        </UnorderedList>
        </Title>
      




    );
      
    
}
export default SignIn;