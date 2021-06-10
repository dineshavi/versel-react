import React from 'react'
import styled from 'styled-components'


const VerselFooterDivision1 = styled.div`

width: 100%;

@media (max-width: 968px) {

  }
  `;

const VerselFooterDivision2 = styled.div`


display: flex;
flex-direction: column;

@media (max-width: 968px) {
    display: flex;
 flex-direction: column; 

  }
  `;




const VerselFooterDivision3 = styled.div`
justify-content: space-between;
    width: 100%;
    display: flex;
div{
  width: 100%;
 
}
@media (max-width: 968px) {


  div{
    display: flex;
    
      justify-content: center;
  }

    
  }
  `;
const VerselFooterDivision4 = styled.div`

  @media (max-width: 968px) {
  
    }
    `;
const VerselFooterSubDivision = styled.div`
    display: flex;
  
    flex-direction: row;
    justify-content: space-between;

      @media (max-width: 968px) {
        display: flex;
      
        flex-direction: column-reverse;
        margin-top: -12%;
        align-items: center;
        padding: 24px 0 24px;
        }
        `;
        const FooterCopyDivision = styled.div`
width:50%;

      @media (max-width: 968px) {
          width: 100%;
        display: flex;
        justify-content: center;
        p{
          display: flex;
            color: #666;
            font-size: 14px;
            text-align: center;
            
        }
        }
        `;
        
const LogoDivision = styled.div`

        display: flex;
        flex-direction: row;
        align-items: center;
        color:#666;
    width: 35%;
    justify-content: center;

        div{
            margin:4%
        }
          @media (max-width: 968px) {
            display: flex;
          
            flex-direction: row;
            
            align-items: center;
            div{
                margin:4%
            }
            }
            `;
       
const StatusDivision = styled.div`
          
border: 1px solid #eaeaea;
border-radius: 6px;
width: 75%;
justify-content: center;
display: flex;
height: 34px;
background: #fff;
     label{
      align-items: center;
      display: flex;
   
     }
            span{
              flex-shrink: 0;
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 100%;
              background-color: #0070f3;
              margin: 14px 7px;
            }
            label.labelcolor{
              color: #0070f3;
              font-family: sans-serif;
              display: flex;
    align-items: center;
    font-weight: 500;
            }
              @media (max-width: 968px) {
                border: 1px solid #eaeaea;
    border-radius: 6px;
    justify-content: center;
    display: flex;
    height: 34px;
    background: #fff;
    align-items: center;
    display: flex;
    font-size: 14px;
  font-weight: 400;
  color: #000;
   }
                span{
                  flex-shrink: 0;
                  display: inline-block;
                  width: 10px;
                  height: 10px;
                  border-radius: 100%;
                  background-color: #0070f3;
                  margin: 13px 7px;
                }
                }
                `;
const SelectDivision = styled.div`
width: 100%;
label{
  display: flex;
  align-items: center;
  justify-content: center;
}
div{
  position: relative;
  display: flex;
  align-items: center;
}
                select{
                  border:none;
                  appearance: none;
                  display: flex;
                  align-items: center;
                  border: 1px solid #eaeaea;
                  padding-left: 45px;
                  padding-right: 45px;
                  border-radius: 7px;
                  height: 34px;
                  background: #fff;
                  outline: none;
                }
              
                span.image1{
                  display: flex;
                  position: absolute;
                  align-items: center;
                  padding:4%;
                }
                span.image2{
                  display: flex;
                  position: absolute;
                  align-items: center;
                  left:86%;
                }
                  @media (max-width: 968px) {
                
                    width: 100%;
                    select{
                      margin: 20px;
                    }
                    span.image2{
                      display: flex;
                      position: absolute;
                      align-items: center;
                      margin-left: -8%;
                    }
                    span.image1{
                      display: flex;
                      position: absolute;
                      align-items: center;
                      padding: 15%;
                    }
                    select{
                      border:none;
                      appearance: none;
                      display: flex;
                      align-items: center;
                      border: 1px solid #eaeaea;
                      padding-left: 45px;
                      padding-right: 45px;
                      border-radius: 7px;
                      height: 34px;
                      outline: none;
                    }
                   
                    }
                    `;
                    const VerselFooterSvgDivision = styled.div`

                    svg{
                      height:26px;
                    }
                    @media (max-width: 968px) {
                      padding: 14%;
                      svg{
                        height:20px;
                      }
                    }
                        `;
                        const StatusMainDivision = styled.div`

                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @media (max-width: 968px) {
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                          margin: 19px
                        }
                            `;
// Create a Wrapper component that'll render a <section> tag with some styles


function VerselFooter() {
  return (
    <VerselFooterDivision1>
      <VerselFooterDivision2>
        <VerselFooterDivision3>
          <VerselFooterSvgDivision>
            <svg  viewBox="0 0 284 65" fill="var(--geist-foreground)">
              <title>Vercel Logotype</title>
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z">
              </path>
            </svg>
          </VerselFooterSvgDivision>


        </VerselFooterDivision3>
        <VerselFooterDivision4>

          <VerselFooterSubDivision>
            <FooterCopyDivision>
              <p>Copyright © 2021 Vercel Inc. All rights reserved.</p>
              </FooterCopyDivision>

            <LogoDivision>
              <div>

                <svg width="19" height="19" viewBox="0 0 14 14" aria-label="github">
                  <path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fill-rule="nonzero"></path>
                </svg>
              </div>
              <div>
                <svg height="16" viewBox="0 0 18 15" aria-label="twitter" fill="currentColor">
                  <path d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z" fill-rule="nonzero"></path>
                </svg>
              </div>
            </LogoDivision>
   <StatusMainDivision>
   <StatusDivision>
              <label>Status:</label><span></span>
              <label className="labelcolor"
              >All systems normal.</label >
            </StatusDivision>
            <SelectDivision>
              <label>
                <div>
                <span class="image1">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z"></path></svg>
                </span>
                <select>
                  <option >System</option>
                  <option >Dark</option>
                  <option >Light</option>

                </select>
                <span class="image2">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path></svg>     </span>
           
                </div>
                  </label>
            </SelectDivision>
       
   </StatusMainDivision>
        
          </VerselFooterSubDivision>




        </VerselFooterDivision4>
      </VerselFooterDivision2>
    </VerselFooterDivision1>


  );


}
export default VerselFooter;





