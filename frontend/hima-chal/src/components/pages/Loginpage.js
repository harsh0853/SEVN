import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Loginpage() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [justifyActiveDriver, setJustifyActiveDriver] = useState('driver');
  // Check box 
  const [isChecked, setIsChecked] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowInput(isChecked); // Show input when checked, hide when unchecked
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Do something with the input value if needed
  };

  // ----------

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleJustifyClickDriver = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActiveDriver(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <button className="mb-4 w-100 btn btn-primary">Sign in</button>
          <p className="text-center">Not a member? <a href='#' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          

          <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClickDriver('driver')} active={justifyActiveDriver === 'driver'}>
                Driver
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClickDriver('customer')} active={justifyActiveDriver === 'customer'}>
                Customer
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          
          <MDBTabsContent>
            <MDBTabsPane show={justifyActiveDriver === 'driver'}>

              <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
              <MDBInput label='Phone Number' id='typePhone' type='tel' />

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />


              <h3>Vehicles Details</h3>
              <MDBInput wrapperClass='mb-4' label='Regd. No' id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' label='Chassis No.' id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' label='Model' id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' label='RC No.' id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' label='DL No.' id='form1' type='text' />


              <button className="mb-4 w-100 btn btn-primary">Sign up</button>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActiveDriver === 'customer'}>

              <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
              <MDBInput label='Phone Number' id='typePhone' type='tel' />

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Do you want to add emergency contact number?' checked={isChecked}
                  onChange={handleCheckboxChange} />
              </div>

              {!showInput && <MDBInput label='Phone Number' id='typePhone' type='tel' value={inputValue}
                onChange={handleInputChange} />}


              <button className="mb-4 w-100 btn btn-primary">Sign up</button>

            </MDBTabsPane>
          </MDBTabsContent>


        </MDBTabsPane>



      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Loginpage;