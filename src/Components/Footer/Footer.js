import React  from 'react'

import FrameWork from '../Footer/FrameWork';

import FooterDesktop from '../Footer/FooterDesktop';

// Create a Wrapper component that'll render a <section> tag with some styles


 function Footer(){

            return (
                <>
                <div className="mobile">
                <FrameWork/>
                </div>
        <div  className="desktop">
        <FooterDesktop/>
        </div>
      
                </>
            );
          }
 
   

  
    

    

export default Footer;

