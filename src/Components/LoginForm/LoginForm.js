import React from 'react'
import styled from 'styled-components'
// import DemoForm from './validationLogin'
// import { TransitionGroup } from 'react-transition-group';
import Form from './Form'
const HeaderTag = styled.header`
width: 100%;
display: flex;
flex-direction: row;

@media (max-width: 968px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align:center;
    
  }
`;
const MainTag = styled.main`
display: flex;
flex-direction: column;
flex: 1;
justify-content: space-around;
padding:5%;
@media (max-width: 968px) {
  padding: 4%;
    box-sizing: border-box;
    width: 100%;
    display: flex;
   
  }
  `;
  const SideTag = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 5%;
  // justify-content: space-evenly;
}


@media (max-width: 968px) {
    width: 100%;
  }
  `;

const LogoH2Division= styled.div`

width: 100%;
display: flex;
overflow: hidden;
h2{
    color: #999;
    font-size: 0.875rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-family: "Segoe UI"; 
    text-align: center;
    font-weight: 700;
    padding-left: 3%;
    padding-right: 2%;
}
@media (max-width: 968px) {
    
    width: 100%;
    display: flex;
    justify-content: center;
    h2{
      width: 100%;
    
    }
}`;

// const LogoMainDivision= styled.div`


// width: 100%;

// display: flex;
// flex-direction:column;
// @media (max-width: 968px) {

//     width: 100%;
//         background: white;
//         height: 140px;
//         margin: auto;
//         overflow: hidden;
//         position: relative;
//         flex-flow: row;
// }`;
const LogoMain2Division= styled.div`

    display: flex;

    flex-wrap: wrap;
    
    width: 100%;
    align-items: center;
    row-gap: 25px;
   
  



div{
     width:34%;
}

@media (max-width: 968px) {
 
  flex-direction: column;
  width: 130%;
  height: 125px;
  margin: 13%;
  flex: 1 1 160px;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: rotate;
  width: 100%;
  height: 100px;

  div{
     width:54%;
}
    
    @keyframes rotate {
      0% {
        transform: transformX(250px);
      }
      100% {
        transform: translateX(calc(-250px * 3));
      }
    }
}

}`;
// Create a Wrapper component that'll render a <section> tag with some styles


 function LoginForm(){
    return(
     <HeaderTag>
   <MainTag>
   {/* <DemoForm/> */}
   <Form/>
       </MainTag>
    <SideTag>
 
   
     <LogoH2Division><h2>Join
        the thousands of innovators that are already building with Vercel</h2>
      </LogoH2Division>
      <LogoH2Division>

              <LogoMain2Division>
                {/* <TransitionGroup  transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
              <div>
<img src="asserts/auth0.svg" alt="" width="60%"></img>
</div>
<div>
<img src="asserts/carhartt-work-in-progress.svg" alt=""></img>
</div>
<div>
<img src="asserts/barstool-sports.svg" alt=""></img>
</div>
<div>
<img src="asserts/devolver-digital.svg" alt=""></img>
</div>
<div>
<img src="asserts/harry-rosen.svg" alt=""></img>
</div>
<div>
<img src="asserts/hashicorp.svg" alt="" ></img>
</div>
<div>
<img src="asserts/hulu.svg" alt="" width="40%"></img>
</div>
<div>
<img src="asserts/mcdonalds.svg" alt="" ></img>
</div>
<div>
<img src="asserts/patreon.svg" alt="" width="70%"></img>
</div>
<div>
<img src="asserts/scale_.svg" alt=""></img>
</div>
<div>
<img src="asserts/tripadvisor-horizontal.svg" alt=""></img>
</div>
<div>
<img src="asserts/twilio.svg" alt="" width="50%"></img>
</div>
<div>
<img src="asserts/uber.svg" alt="" width="50%"></img>
</div>
<div>
<img src="asserts/washingtonpost.svg" alt="" width="80%"></img>
</div>
<div>
<img src="asserts/facebook.svg" alt="" width="70%"></img>
</div>
<div>
<img src="asserts/herman.svg" alt=""  width="70%"></img>
</div>
{/* </TransitionGroup> */}
              </LogoMain2Division>

       
       
      </LogoH2Division>

</SideTag>
     </HeaderTag>
    
    );

    
}
export default LoginForm;



