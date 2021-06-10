import React,{useState}from 'react'
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
    font-size: .875rem;
    padding: 4%;
    border-bottom: 1px solid #eaeaea;
    font-weight: 400;
}

}
@media (max-width: 968px) {
  label{
    font-size: .875rem;
    padding: 4%;
    border-bottom: 1px solid #eaeaea;
    font-weight: 400;
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


 function FrameWork(){
  const [isOpen1, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen1] = useState(false);
  const[isopen3,setIsOpen2]=useState(false);
  const[isopen4,setIsOpen3]=useState(false);
  const toggle = () => setIsOpen(!isOpen1);
  const toggle1 = () => setIsOpen1(!isOpen2);
  const toggle2=()=>setIsOpen2(!isopen3);
  const toggle3=()=>setIsOpen3(!isopen4);
    return(
   
        <FooterMainDivision >
          <FooterMain1Division>
          <FooterSub1Division >
        <FooterSub2Division >

    <label onClick={toggle} >FrameWorks</label>
    {
                  
                  isOpen1 ?
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
            : null
                  
          }
  

</FooterSub2Division>
<FooterSub2Division >

    <label onClick={toggle1}>Resources</label>
    {
      isOpen2 ?
    
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
            :null}
</FooterSub2Division>
<FooterSub2Division >

    <label onClick={toggle2}>Company</label>
    {
      isopen3?
   
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
            :null
    }
</FooterSub2Division>
<FooterSub2Division >

    <label onClick={toggle3}>Legal</label>
    {
      isopen4?

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
            :null
            }
</FooterSub2Division>
        </FooterSub1Division>
            
            <VerselFooter/>
          </FooterMain1Division>
    
            
        </FooterMainDivision>
    
   
    );

    
}
export default FrameWork;





