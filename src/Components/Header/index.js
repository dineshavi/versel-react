import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/index';
import NavBar from '../NavBar/index';
import Content from '../Content/index';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import ComponentPage1 from '../ComponentPage1/ComponentPage1';
import LoginForm from '../LoginForm/LoginForm';
import DevelopComponent from '../Develop/Develop';
import Footer from '../Footer/Footer';

const NavWapper = styled.div`
 display: flex;
  width: 100%;
  background-color: #fff;
  position: fixed;
 box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
 
 z-index: 1;

 @media (max-width: 968px) {
  background-color: #fff;
  position: fixed;
  width: 100%;
    justify-content: flex-end;
    display: flex;
    box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
    
    z-index: 1;

}
`;


const Wrapper1=styled.header `
// display:flex;
width:100%;
@media (max-width: 968px) {
  

}
`;
const Wrapper2=styled.header `
// display:flex;
width:100%;
@media (max-width: 968px) {
  
  display:none;
}
`;
const Wrapper3=styled.header `
// display:flex;
width:100%;
@media (max-width: 968px) {
 display:none;
}

`;
const Wrapper4=styled.header `
display:none;
@media (max-width: 968px) {

display: flex;


}`;
const BodyDivision=styled.header `
background-color: #fafafa;
@media (max-width: 968px) {

// padding: 12px;
background-color: #fafafa;
}`;


 function Header(){


  
    return(
      <BodyDivision>
  
        <NavWapper>
          <Wrapper1> <Logo/></Wrapper1>
          <Wrapper2> <NavBar/> </Wrapper2>
          <Wrapper3>  <Content/></Wrapper3>
          <Wrapper4> <BurgerMenu/> </Wrapper4>
  
        </NavWapper>
      
   

<ComponentPage1/>
<LoginForm/>
<DevelopComponent/>
<Footer/>
      </BodyDivision>
     
    );
      
    
}
export default Header;