import React from 'react'
import styled from 'styled-components'
// import VerselFooter from './Footer/VerselFooter';
import VerselFooter from '../Footer/VerselFooter';
const FooterMainDivision = styled.div`

width: 100%;
@media (max-width: 968px) {
  width:100%;

  }
  `;
  const FooterMain1Division = styled.div`


padding: 4%;
@media (max-width: 968px) {
  padding: 0%;
  }
  `;
  const FooterSub1Division = styled.div`

display:flex;
justify-content:space-around;
flex-direction: row;

@media (max-width: 968px) {
  display:flex;
  justify-content:space-around;
  flex-direction: column;
  padding: 4%;
  }
  `;
  const FooterSub2Division = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  label{
    color: #666;
    font-size: 18px;
    font-family: sans-serif;
    padding: 4%;
    display:block;
}

}
@media (max-width: 968px) {
  label{
    color: #666;
    font-size: 18px;
    font-family: sans-serif;
    padding: 4%;
    border-bottom: 1px solid #eaeaea;
    ::after {//        pseduo Element Keyword its should select the label tag after the label tag elememt .
      content: "+";
      float: right;
    }

}
  }
  `;
  const UnorderedFooter = styled.div`

   display:block; 
 @media (max-width: 968px) {
 display:block; 
   }
  `;
  
  const ListTemplateFooter = styled.div`

  display: block;
  padding: 12px;
  
    @media screen and (max-width: 968px) {
 
    display:block; 
    }
    `;
// Create a Wrapper component that'll render a <section> tag with some styles


 function FooterDesktop(){
 
    return(
   
        <FooterMainDivision >
          <FooterMain1Division>
          <FooterSub1Division >
        <FooterSub2Division >

    <label >FrameWorks</label>

                  
              
                <UnorderedFooter >
            
                <ListTemplateFooter>
                Next.js
                </ListTemplateFooter>
                <ListTemplateFooter>
                Create React App
                </ListTemplateFooter>
                <ListTemplateFooter>
                Gatsby
                </ListTemplateFooter>
                <ListTemplateFooter>
                Nuxt.js
                </ListTemplateFooter>
                <ListTemplateFooter>
                Vue
                </ListTemplateFooter>
                <ListTemplateFooter>
                Angular
                </ListTemplateFooter>
                <ListTemplateFooter>
                More Frameworks
                </ListTemplateFooter>
                  
      
            </UnorderedFooter>
         
  

</FooterSub2Division>
<FooterSub2Division >

    <label >Resources</label>
    
    
    <UnorderedFooter>
    <ListTemplateFooter>
                Documentation
                </ListTemplateFooter>
                <ListTemplateFooter>
                Experts
                </ListTemplateFooter>
                <ListTemplateFooter>
                Customers
                </ListTemplateFooter>
                <ListTemplateFooter>
                Guides
                </ListTemplateFooter>
                <ListTemplateFooter>
                Support
                </ListTemplateFooter>
                <ListTemplateFooter>
                API Reference
                </ListTemplateFooter>
                <ListTemplateFooter>
                OSS
                </ListTemplateFooter><ListTemplateFooter>
                Command-Line
                </ListTemplateFooter>
                <ListTemplateFooter>
                Integrations
                </ListTemplateFooter>
            </UnorderedFooter>
    
</FooterSub2Division>
<FooterSub2Division >

    <label>Company</label>

   
    <UnorderedFooter>
    <ListTemplateFooter>
    Home
                </ListTemplateFooter>
                <ListTemplateFooter>
                Blog
                </ListTemplateFooter>
                <ListTemplateFooter>
                Changelog
                </ListTemplateFooter>
                <ListTemplateFooter>
                About
                </ListTemplateFooter>
                <ListTemplateFooter>
                Careers
                </ListTemplateFooter>
                <ListTemplateFooter>
                Pricing
                </ListTemplateFooter>
                <ListTemplateFooter>
                Security
                </ListTemplateFooter><ListTemplateFooter>
                Next.js Conf
                </ListTemplateFooter>
                <ListTemplateFooter>
                Partners
                </ListTemplateFooter>
                <ListTemplateFooter>
                Contact Us
                </ListTemplateFooter>
            </UnorderedFooter>
      
</FooterSub2Division>
<FooterSub2Division >

    <label>Legal</label>
  
<UnorderedFooter>
                <ListTemplateFooter>
                Privacy Policy
                </ListTemplateFooter>
                <ListTemplateFooter>
                Terms of Service
                </ListTemplateFooter>
                <ListTemplateFooter>
                Trademark Policy
                </ListTemplateFooter>
                <ListTemplateFooter>
                Inactivity Policy
                </ListTemplateFooter>
                <ListTemplateFooter>
                DMCA Policy
                </ListTemplateFooter>
                <ListTemplateFooter>
                DPA
                </ListTemplateFooter>
                <ListTemplateFooter>
                SLA
                </ListTemplateFooter>
            </UnorderedFooter>
          
</FooterSub2Division>
        </FooterSub1Division>
            
            <VerselFooter/>
          </FooterMain1Division>
    
            
        </FooterMainDivision>
    
   
    );

    
}
export default FooterDesktop;





