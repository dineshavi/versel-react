import React, { useState } from 'react'
import styled from 'styled-components'

import BurgerContent from '../BurgerContent/BurgerContent';


  
  const StyledBurger = styled.button`
  @media (max-width: 968px){


 flex-direction: column;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--geist-radius);
    background: transparent;
    border: none;
    transition: background-color .2s ease;
    row-gap: 11px;
    user-select: none;
    margin: 8px 11px;
  }

  
`;



const Title = styled.div`
@media (max-width: 968px){



    
    :before {
        content: "";
        display: block;
        height: 1px;
        width: 22px;
        background-color: #111;
        transition: transform .15s ease;
    }
    :after {
        content: "";
        display: block;
        height: 1px;
        width: 22px;
        background-color: #111;
        transition: transform .15s ease;
    }
 
    :before {
        transform: translateY(-8px) rotate(
    0deg
    );
    }
    :after {
        transform: translateY(0) rotate(
    0deg
    );
    }
}
`;
const DivisionMenuBurger = styled.div`
@media (max-width: 968px){
    display: flex;
    /* position: absolute; */
    /* width: 100%; */
    justify-content: flex-end;
    // padding: 20px;
`;



//  function BurgerMenu({ open, setOpen }){
//     return(
//         <StyledBurger open={open} onClick={() => setOpen(!open)}>
//   <Title >
//      </Title>
//         </StyledBurger>
   
       
  
//     );

    
// }




function BurgerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

 

   

 


    return (
        <DivisionMenuBurger>
            <StyledBurger onClick={toggle} >
  <Title >
     </Title>



        </StyledBurger>
            {
                isOpen ?
                   <BurgerContent/>
                    : null
            }

        </DivisionMenuBurger>
    );
};

export default BurgerMenu;