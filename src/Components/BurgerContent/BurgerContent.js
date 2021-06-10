import React,{useState} from 'react'
import styled from 'styled-components'




const StyledMenu = styled.nav`


@media (max-width: 968px){
   
    display: flex;
    
    flex-direction: column;
   
    align-items: center;
    width: 100%;
}
`;
const Taga=styled.a`
@media (max-width: 968px){
border: 1px solid #eaeaea;
border-radius: 5px;
width: 100%;
height: 40px;
text-align: center;
padding: 10px;
text-decoration: none;
color: #666;
margin: 24px;
box-sizing: border-box;
font-size: 0.875rem;
font-weight: 500;
font-family: Inter,sans-serif;
}
`;

const Tagb=styled.a`
@media (max-width: 968px){
    border-radius: 5px;
    width: 100%;
    height: 40px;
    text-align: center;
    padding: 10px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #ffff;
    font-size: 0.875rem;
    font-weight: 500;
    background: #0070f3;
    box-sizing: border-box;
    font-family: Inter,sans-serif;
    div{
        width: 100%;
    }
    ul{
        list-style-type: none;
    }
    li{
        padding: 0px;
        font-size: 19px;
        font-family: sans-serif;
        color: #666;
    }
}
`;
const Division=styled.div`


@media (max-width: 968px){
   
    width: 100%;
    position: absolute;
    background: white;
    div{
        display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-inline: 17px;
    box-sizing: border-box;
    }
    
   
}
`;
const UnorderedBurger=styled.ul`

@media (max-width: 968px){
        list-style-type: none;
        padding-inline: 13px;
        box-sizing: border-box;
        display: flex;
    flex-direction: column;
    width: 100%;
}
`;
const ListBurger=styled.li`
@media (max-width: 968px){
    font-size: 1rem;
    padding: 8px;
    height: 35px;
    border-bottom: 1px solid #eaeaea;
    font-weight: 400;
    font-family: Inter,sans-serif;
    label{
 ::after {//        pseduo Element Keyword its should select the label tag after the label tag elememt .
        content: "+";
        float: right;
      }
    }
   
}
`;
const ListTemplateBurger=styled.li`


display: flex;
background: white;
width: 100%;
padding: 4%;

@media (max-width: 968px){

    display: flex;
    background: white;
    width: 100%;
    padding: 4%;
    
}
`;
const BurgerMenuDivision=styled.div`

@media (max-width: 968px){
    display: flex;
    position: absolute;
    background: white;
    width: 100%;

    top: 100%;
    
}
`;
const NavDivision=styled.div`

@media (max-width: 968px){
    border: 0px solid;
    display: block;
    visibility: visible;
    width: 100%;
    max-width: 100vw;
    z-index: 2000;
    position: fixed;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 0;
    overflow-y: scroll;
    
}
`;



function BurgerContent(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
  return (
 
<BurgerMenuDivision>
   <StyledMenu >
      <NavDivision>
 <Division>
     <div>
     <Taga href="/">
       Login
      </Taga>
      <Tagb href="/">      
 Sign up
        </Tagb>
     </div>
 
     <UnorderedBurger>
         <ListBurger>
             Templates
         </ListBurger>
         <ListBurger>
         Analytics
         </ListBurger>
         <ListBurger>
         Pricing
         </ListBurger>
         <ListBurger>
         Contact
         </ListBurger>
         <ListBurger>
         Documentation
         </ListBurger>
         <ListBurger>
         Experts
         </ListBurger>
         <ListBurger>
         Security
         </ListBurger>
         <ListBurger>
         Blog
         </ListBurger><ListBurger>
         Careers
         </ListBurger>
         <ListBurger>
            <label  onClick={toggle} >FrameWorks</label> 
            {
                isOpen ?
                <UnorderedBurger>
                <ListTemplateBurger>
                Next.js
                </ListTemplateBurger>
                <ListTemplateBurger>
                Create React App
                </ListTemplateBurger>
                <ListTemplateBurger>
                Gatsby
                </ListTemplateBurger>
                <ListTemplateBurger>
                Nuxt.js
                </ListTemplateBurger>
                <ListTemplateBurger>
                Vue
                </ListTemplateBurger>
                <ListTemplateBurger>
                Angular
                </ListTemplateBurger>
                <ListTemplateBurger>
                More Frameworks
                </ListTemplateBurger>
            </UnorderedBurger>
                    : null
            }
          
         </ListBurger>
         <ListBurger>
         <label  onClick={toggle1} >Resourses</label> 
         
         {
                isOpen1 ?
                <UnorderedBurger>
                <ListTemplateBurger>
                Documentation
                </ListTemplateBurger>
                <ListTemplateBurger>
                Experts
                </ListTemplateBurger>
                <ListTemplateBurger>
                Customers
                </ListTemplateBurger>
                <ListTemplateBurger>
                Guides
                </ListTemplateBurger>
                <ListTemplateBurger>
                Support
                </ListTemplateBurger>
                <ListTemplateBurger>
                API Reference
                </ListTemplateBurger>
                <ListTemplateBurger>
                OSS
                </ListTemplateBurger><ListTemplateBurger>
                Command-Line
                </ListTemplateBurger>
                <ListTemplateBurger>
                Integrations
                </ListTemplateBurger>
            </UnorderedBurger>
                    : null
            }
         </ListBurger>
     </UnorderedBurger>
 </Division>
      </NavDivision>

    </StyledMenu>
      </BurgerMenuDivision>
 
   
      
 
  
  )
}
export default BurgerContent;
