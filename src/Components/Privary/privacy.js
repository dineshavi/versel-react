import React from 'react'
import styled from 'styled-components'


const ParagraphTag= styled.div`
width:100%;
font-size:16px;
width: 100%;
color: #666;
font-family: "Segoe UI";
display: flex;
justify-content: center;
p{
    display: flex;
  
    text-align: center;
}
div{
    width:100%;
}
@media (max-width: 968px) {
    font-size: 16px;
    width: 100%;
    color: #666;
    font-family: "Segoe UI";
   
    p{
        display: flex;
        padding: 13px;
        text-align: center;
        margin-block-start: 3em;
    margin-block-end: 1em;
    }
}

`;



// Create a Wrapper component that'll render a <section> tag with some styles


 function Paragraph(){
    return(
     
        
<ParagraphTag>
<div>
<p>
 By submitting this form, I confirm that I have read and understood the
 Vercel Privacy Statement.
 </p>
</div>

 
 

 </ParagraphTag>
  
    );

    
}
export default Paragraph;






















