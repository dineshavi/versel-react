import React from 'react';
import styled from 'styled-components'
import Paragraph from '../Privary/privacy'
import ContactSales from '../LoginForm/ContactSales'


  const Form1Divion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
@media (max-width: 968px) {
    flex-direction: column;

    display: flex;
  }
  `
  const Form1SubDivion = styled.div`
  width: 50%;
  display: flex;
  div{
    display: flex;
    width: 100%;
    color: red;
    font-size: 14px;
  }
  flex-direction: column;
  label{
    font-size: 0.9rem;
    font-family: sans-serif;
    color: #666;
    width: 100%;

  }
@media (max-width: 968px) {
    width: 100%;
    display: flex;
    div{
        display: flex;
        width: 100%;
        color: red;
        font-size: 14px;
        justify-content: center;
      }
  }
  `
  const Form2Divion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
@media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    width: 100%;
   
  }
  `
  const Form2SubDivion = styled.div`
  width: 50%;
  display: flex;

  flex-direction: column;
  label{
    font-size: 0.9rem;

    color: #666;
    width: 100%;
  }
  div{
    display: flex;
    width: 100%;
    color: red;
    font-size: 14px;
  
  }
@media (max-width: 968px) {
    width: 100%;
    display: flex;
    div{
        display: flex;
        width: 100%;
        color: red;
        font-size: 14px;
        justify-content: center;
      }
  }

  ` ;
   const InputTag1 = styled.input`

   width: 75%;
   border: 1px solid #eaeaea;
   border-radius: 6px;
   height: 2rem;

//    width: 18rem;
}
@media (max-width: 968px) {

  }
  `;
  const InputTag2 = styled.input`

  width: 75%;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  height: 2rem;

//   width: 18rem;
}
@media (max-width: 968px) {

 }
 `;
 const InputTag3 = styled.input`

   width: 75%;
   border: 1px solid #eaeaea;
 border-radius: 6px;
 height: 2rem;

}
@media (max-width: 968px) {

}
`;
const SelectInputTag4= styled.select`


width: 80%;
border: 1px solid #eaeaea;
border-radius: 6px;
height: 37px;
background: white;
}
@media (max-width: 968px) {

}
`;
const FormTag= styled.form`


@media (max-width: 968px) {


}
`;
const FormDivisionTag= styled.div`


    height: auto;
    border-radius: 6px;
    background-color: #fff;
    border: none;
    box-shadow: 0 0px 48px rgb(0 0 0 / 21%);

    padding:5%;

@media (max-width: 968px) {
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    border: none;
    box-shadow: 0 0px 48px rgb(0 0 0 / 21%);


}
`;
const ProductDivion= styled.div`

display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    color: #666;
    // font-size: 17px;
    font-family: sans-serif;
  
@media (max-width: 968px) {
    flex-direction: column;

}
`;
const ProductSubDivion= styled.div`


    width: 50%;
@media (max-width: 968px) {

}
`;
const ProductUnList= styled.div`

list-style-type:none;
li{
    padding: 4px 0px 0px 60px;
    width: 100%;
    display: flex;
    font-size:12px;
}

svg{
    color: #fff;
    position: absolute;
}
@media (max-width: 968px) {

}
`;
const SpanTag= styled.span`


    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  
    margin: 23px 47px;
    background-color: #7928ca;
    display: flex;

@media (max-width: 968px) {

}
`;
const TextAreaMainDivision= styled.div`


width: 100%;
@media (max-width: 968px) {

}
`;
const TextLabelDivision= styled.div`


display: flex;
color: #666;
font-size: 0.9rem;
font-family: sans-serif;
    font-family: sans-serif;
@media (max-width: 968px) {

}
`;
const TextAreaInputTag= styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        width: 100%;
        color: red;
        font-size: 14px;
    }
textarea{
    border: 1px solid #eaeaea;
    border-radius: 4px;
    height: 8rem;

    display: flex;
 
}

@media (max-width: 968px) {
    width: 100%;
    display: flex;
}
`;

const FormSubDivision= styled.div`


@media (max-width: 968px) {

}
`;


class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["email"] = "";
        input["websitename"] = "";
        input["textarea"] = "";
    
        // input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["websitename"]) {
        isValid = false;
        errors["websitename"] = "Please enter your websiteSite Link.";
      }
      if (!input["textarea"]) {
        isValid = false;
        errors["textarea"] = "Please enter your textarea.";
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
    <>
     <FormTag  onSubmit={this.handleSubmit}>
       <FormDivisionTag>
     <FormSubDivision>
                  <Form1Divion>
                      <Form1SubDivion>
                      <label><p>YOUR EMAIL</p>
                          <InputTag1 type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}></InputTag1>
                          </label>
                          <div className="text-danger">{this.state.errors.email}</div>
                      </Form1SubDivion>
                      <Form1SubDivion>
                          <label><p>YOUR NAME</p>
                          <InputTag2 type="text" name="username"  value={this.state.input.username}
              onChange={this.handleChange}></InputTag2>
                          </label>
                          <div className="text-danger">{this.state.errors.username}</div>
                      </Form1SubDivion>
                     
                  </Form1Divion>
                  <Form2Divion>
                      <Form2SubDivion>
                      <label><p>COMPANY WEBSITE</p>
                          <InputTag3 type="text" name="websitename"  value={this.state.input.websitename}
              onChange={this.handleChange}></InputTag3>
                          </label>
                          <div className="text-danger">{this.state.errors.websitename}</div>
                      </Form2SubDivion>
                      <Form2SubDivion>
                      <label><p>COMPANY SIZE</p>
                      <SelectInputTag4>
                                                    <option value="1-100">1-100</option>
                                                    <option value="100-500">100-500</option>
                                                    <option value="500-1000">500-1000</option>
                                                    <option value="1000+">1000+</option>
                                                </SelectInputTag4>
                          
                          </label>
                      </Form2SubDivion>
                     
                  </Form2Divion>
              
    
        <TextLabelDivision>
            <label>PRODUCT(S) OF INTEREST</label>
        </TextLabelDivision>
        <ProductDivion>
            <ProductSubDivion>
                <ProductUnList>
                <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" >
                                                                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z">
                                                                </path>
                                                            </svg><li>
                                                            Vercel 
                    </li></SpanTag>
                    <SpanTag><input type="checkbox" ></input><svg width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="transparent"></path>
                                                                <path d="M17.2414 20.3109C17.106 20.1444 16.3635 19.1902 15.4876 18.0573L13.7441 15.8025L11.5594 12.7072C10.3573 11.0054 9.36836 9.61383 9.35983 9.61383C9.35131 9.61179 9.34278 10.9871 9.33852 12.6664C9.33213 15.6067 9.32999 15.725 9.29163 15.7944C9.23621 15.8944 9.19359 15.9352 9.10407 15.9801C9.03586 16.0127 8.97618 16.0188 8.65434 16.0188H8.28561L8.18756 15.9597C8.12362 15.9209 8.07673 15.8699 8.04476 15.8107L8 15.7189L8.01066 7.5346L8.07673 7.45503C8.11083 7.41218 8.1833 7.35708 8.23445 7.33056C8.32184 7.28975 8.35594 7.28567 8.72468 7.28567C9.15948 7.28567 9.23195 7.30199 9.34491 7.42034C9.37689 7.45298 10.5598 9.15881 11.9751 11.2136C13.3903 13.2683 15.3256 16.0739 16.2762 17.4512L17.9437 19.8694C17.7365 20.0403 17.5005 20.1866 17.2414 20.3109Z" fill="#fff"></path>
                                                                <path d="M16.0567 7.28159C16.0269 7.18364 15.9437 7.08978 15.8414 7.04081C15.7711 7.00408 15.7157 7 15.4002 7C15.0656 7 15.0336 7.00408 14.9462 7.04693C14.8439 7.09998 14.7693 7.18976 14.7352 7.30403C14.7224 7.35096 14.7139 8.32018 14.7139 10.0444V12.7113L15.3917 13.7029L16.0674 14.6946L16.0737 11.0258C16.078 8.46913 16.0737 7.33464 16.0567 7.28159Z" fill="#fff"></path>
                                                            </svg><li>
                                                            Next.js
                    </li></SpanTag>
                    <SpanTag><input type="checkbox"></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <path d="M2 12h20"></path>
                                                                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z">
                                                                </path>
                                                            </svg><li>
                                                            Edge Network
                    </li></SpanTag>
                    <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" >
                                                                <circle cx="18" cy="18" r="3"></circle>
                                                                <circle cx="6" cy="6" r="3"></circle>
                                                                <path d="M13 6h3a2 2 0 012 2v7"></path>
                                                                <path d="M6 9v12"></path>
                                                            </svg><li>
                                                            Git Solutions
                    </li></SpanTag>
                </ProductUnList>
            </ProductSubDivion>
            <ProductSubDivion>
            <ProductUnList>
                <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" >
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                </path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg><li>
                                                            Preview Deployments
                    </li></SpanTag>
                    <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                                                                </rect>
                                                                <path d="M7 11V7a5 5 0 0110 0v4"></path>
                                                            </svg><li>
                                                            Built in free SSL
                    </li></SpanTag>
                    <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" >
                                                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                                                <path d="M2 17l10 5 10-5"></path>
                                                                <path d="M2 12l10 5 10-5"></path>
                                                            </svg><li>
                                                            Integrations
                    </li></SpanTag>
                    <SpanTag><input type="checkbox" ></input><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                            </svg><li>
                                                            Analytics / RES
                    </li></SpanTag>
                </ProductUnList>
            </ProductSubDivion>
        </ProductDivion>
   
    <TextAreaMainDivision>
        <TextLabelDivision>
            <label>
            HOW CAN WE HELP YOU?
            </label>
        </TextLabelDivision>
        <TextAreaInputTag>
           <textarea type="text" name="textarea"  value={this.state.input.textarea}
              onChange={this.handleChange}/>
                    <div className="text-danger">{this.state.errors.textarea}</div>
        </TextAreaInputTag>
    </TextAreaMainDivision>
    </FormSubDivision>
    </FormDivisionTag>

    <ContactSales/>

    

    </FormTag> 

    <Paragraph/>
   </>
   
       

   
    );
  }
}
  
export default DemoForm;




