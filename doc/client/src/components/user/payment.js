// import React from 'react'

// const Payment = () => {
//     const ruppess = localStorage.getItem('ruppes')
//     const avatar = localStorage.getItem('avatar')
//   return (
//     <div style={{padding:'10px 50px',backgroundColor:"#645a5a4d",color:'black', height:"600px",width:'500px',marginLeft:'300px'}}>
//       <div className="profile-1" style={{width:"280px",marginLeft:"50px"}}>
//                     <div className="profile-img" style={{height:"300px", width:"250px"}}>
//                         <img src={avatar} alt="" />
//                     </div>
//                     </div>
     
     
//       <p>{ruppess}</p>
//       </div>
//   )
// }

// export default Payment



import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const ruppess = localStorage.getItem('ruppes')
const clinic = localStorage.getItem('clinic')
const place = localStorage.getItem('location')
const scan = localStorage.getItem('scan')
const sc = localStorage.getItem('sc')
const time = localStorage.getItem('date')
const Space = () => {
  return(
    <div>scan clinic : {clinic} <br></br>place : {place}<br></br> scan: {scan}<br></br> Duration:{time}</div>
  )
}
const St = () => {
  return(
  
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Card number"
          placeholder='0000-0000-0000'
          multiline
          maxRows={4}
         
         
        />
        
        <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)} style={{height:"10px",cursor:"pointer",backgroundColor:"transparent",color:'black'}}>
            ✓verify
         </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 1 }} style={{color:'green'}}>verified</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
      
        </div>
        
        
  );
}
const steps = [
  {
    label: 'Clinic Details',
    description:<Space /> ,
  },
  {
    label: 'Card Details',
    description: <St />
  },
  {
    label: 'Payment Money',
    description:` ${ruppess} `,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    
  };



  return (
    <Box sx={{ maxWidth: 400 }} style={{marginLeft:"400px", marginTop:"80px",backgroundColor:"rgb(103 106 108 / 16%)",boxShadow:"0px 0px 10px #261616",borderRadius:"20px"}}>
      <Stepper activeStep={activeStep} orientation="vertical" style={{fontSize:"50px",marginLeft:"10px"}}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography style={{fontSize:"30px"}}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - Payment successful</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
