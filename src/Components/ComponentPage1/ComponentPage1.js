import React from 'react'
import styled from 'styled-components'


const Title1 = styled.div`


width: 100%;
padding-top: 12%;
div{
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  h1{
    font-size: 3rem;
      width: 100%;
      font-weight: 700;
      letter-spacing: -.049375rem
      font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  }
  h2{
    font-size: 1.5rem;
    width: 100%;
    font-weight: 400;
    font-family: "Segoe UI";
    color: #666;
  }
}


@media (max-width: 968px) {
  width: 100%;

  padding-top: 18%;

   
div{
  display: flex;
  flex-direction: column;
  padding: 20px;
    
  h1{
    font-size: 2rem;
    width: 100%;
    font-weight: 700;
    letter-spacing: -.049375rem
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
}
  h2{
    font-size: 1rem;
    width: 100%;
    font-weight: 400;
    font-family: "Segoe UI";
    color: #666;
  }
}

   


  }
  @media (max-width: 1440px) {
    width: 100%;
  
    display: flex;
    justify-content: start;

  }
  `
  ;
  

// Create a Wrapper component that'll render a <section> tag with some styles


 function ComponentPage1(){
    return(
     
        <Title1>
     <div>
     <h1>Contact our sales team</h1>
         <h2>
         Tell us how we can help and we’ll get in touch shortly.</h2> 
     </div>

   
      
            
        </Title1>
  
    );

    
}
export default ComponentPage1;





