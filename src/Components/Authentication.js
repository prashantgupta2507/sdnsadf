import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/Authentication.css'
import Logo2 from '../logo2.png'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Authentication(props) {

  const [open, setOpen] = React.useState(props.true);
  const [switchbtn, setSwitch] = React.useState(true);
  const [otpSentBtn, setOtpSetBtn] = React.useState(false);

  const handleClose = () => {
    props.setvisible(false);
    setOpen(false);
  };

  const register = (e) => {
    if (e.target.innerHTML === 'CONTINUE') {
      //otp sent
      setOtpSetBtn(true);
    }else{
      // verify otp if matches then register
      setOtpSetBtn(false) // only for testing purpose
    }
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <div className='dialog-box'>
          <div className='dialog-box-left'>
            {switchbtn === false ?
              <>
                <h4 className='my-3 mx-4'>Login</h4>
                <p className='my-3 mx-4' style={{ width: '60%' }}>Get access to your Orders, Wishlist and Recommendations</p>
                <img src={Logo2} alt="logo" style={{ width: '100%' }} />
              </> :
              <>
                <h4 className='my-3 mx-4'>Looks like you're new here!</h4>
                <p className='my-3 mx-4' style={{ width: '60%' }}>Sign up with your email to get started</p>
                <img src={Logo2} alt="logo" style={{ width: '100%' }} />
              </>
            }
          </div>
          <div className='dialog-box-right py-3 px-5'>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
            {switchbtn === false ?
              <form action="/" method="get">
                <div class="user-input-wrp">
                  <br />
                  <input type="email" name="email" id="email" class="inputText" autoComplete='off' required />
                  <span class="floating-label">Enter Email</span>
                </div>
                <div class="user-input-wrp my-3">
                  <br />
                  <input type="password" name="pass" id="pass" class="inputText" required />
                  <span class="floating-label">Enter Password</span>
                  <p className='forgot-btn'>Forgot?</p>
                </div>
                <button type='button' className='btn btn-primary my-3'>LOGIN</button>
                <p className='register-to-btn' onClick={()=>setSwitch(true)}>New to Bestof Shopping? Create an account</p>
              </form> :
              <form action="/" method="get">
                <div class="user-input-wrp">
                  <br />
                  <input type="email" name="email" id="email" class="inputText" autoComplete='off' required />
                  <span class="floating-label">Enter Email</span>
                  {otpSentBtn === true ? <p className='change-email'>Change?</p> : null}
                </div>
                {otpSentBtn === true ?
                  <>
                    <div className='otp-text-display my-3'>
                      <p className="otp-email-send">OTP sent to Email</p>
                      <p className='otp-resend'>Resend?</p>
                    </div>
                    <div class="user-input-wrp">
                      <br />
                      <input type="text" inputmode='number' maxLength={6} name="otp" id="otp" class="inputText" autocomplete="one-time-code" required />
                      <span class="floating-label">Enter OTP</span>
                    </div>
                    <div class="user-input-wrp my-3">
                      <br />
                      <input type="password" name="pass" id="pass" class="inputText" required />
                      <span class="floating-label">Set Password</span>
                    </div>
                  </> : null}
                <button type='button' className='btn btn-primary my-2' onClick={(e)=>register(e)}>{otpSentBtn === true ? "Signup" : "CONTINUE"}</button>
                <button type='button' className='btn btn-light my-2' onClick={()=>setSwitch(false)}>Existing User? Log in</button>
              </form>
            }
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}