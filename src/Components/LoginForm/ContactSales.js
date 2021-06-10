import React from 'react'
import styled from 'styled-components'


const ColorFormButtonTag= styled.div`



    background-color: #7928ca;

    display: flex;
    width: 100%;
    height:9rem;
@media (max-width: 968px) {

    width: 100%;
    background-color: #7928ca;

    display: flex;
   
    height:10rem;
}
`;
const ColorMainButtonTag= styled.div`

display: flex;
    width: 100%;
    flex-direction: row;
    padding: 30px;
@media (max-width: 968px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding:0px;
}
`;
const ColorSubH4ButtonTag= styled.div`


width: 60%;
display: flex;
font-size: 16px;
color: #fff;
align-items: center;
button{



    border: none;
    width: 12rem;
    height: 3rem;
    background: white;
    color: #7928ca;
    /* display: flex; */
    position: relative;
    /* justify-content: center; */
    /* align-items: center; */
    top: 24px;
}
@media (max-width: 968px) {

}
`;
const ButtonTagContent= styled.button`

    border: none;
    width: 10rem;
    height: 3rem;
    background: white;
    color: #7928ca;
    position: relative;

   

@media (max-width: 968px) {

}
`;
const ContactSalesDivisionTag= styled.div`

 display:flex;
 align-items:center;
 width: 40%;
@media (max-width: 968px) {

}
`;

// Create a Wrapper component that'll render a <section> tag with some styles


 function ContactSales(){
    return(
     
        <ColorFormButtonTag>
        <ColorMainButtonTag>
            <ColorSubH4ButtonTag>
                <h4>
                You can also email us directly at sales@vercel.com
                </h4>
            </ColorSubH4ButtonTag>
            <ContactSalesDivisionTag>
            <ButtonTagContent type="submit" value="Submit">Contact Sales</ButtonTagContent>
            </ContactSalesDivisionTag>
            </ColorMainButtonTag>
        </ColorFormButtonTag> 
  
    );

    
}
export default ContactSales;