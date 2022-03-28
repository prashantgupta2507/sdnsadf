import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import { actionCreators } from '../../Actions/index'
import toastMessage from '../../utils/toastMessage'

const useStyles = makeStyles((theme) => ({
    signupInputs: {
        margin: "30px 0px 50px 0",
    },
    btn: {
        border: "none",
        textTransform: "capitalize",
        fontWeight: 600,
        padding: "10px 20px",
    },
    para: {
        color: "#878787",
        fontSize: 12,
        fontWeight: 400,
        marginTop: 20,
        marginBottom: 10,
    },
    buttonProgress: {
        color: "white",
        margin: "0 10px",
    },
}));

export default function SignupStep1({ handleActions }) {

    const [email, setEmailId] = useState({
        value:"",
        isError: false,
        errorMsg: "",
    })

    const [loading, setLoading] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const initial = useRef(true)
    const dispatch = useDispatch()
    const { setOtpId, setLoginPage, setEmail } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        if (initial.current === true) {
            initial.current = false;
        } else {
            if (!email.isError) {
                submitEmail();
            }
        }
    }, [submitCount]);

    //variables
    const classes = useStyles();
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const submitEmail = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5500/api/auth/createUser/otp", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json, text/plain, */*'
                },
                body: JSON.stringify({
                    email:email.value,
                    type:"VERIFICATION"
                })
            });
            const result = await res.json()
            setLoading(false);
            if (res.status === 400)
                toastMessage("You are already registered. Please login", "info");
            else {
                setEmail(email.value);
                setOtpId(result.Details.otp_id)
                handleActions({
                    openStep1: false,
                    openStep2: false,
                    openOTPVerify: true,
                });
            }
        } catch (error) {
            setLoading(false);
            toastMessage("Something went wrong.", "error");
        }
    };

    const validateEmail = (email) => {
        if (email === "") {
            return {
                isError: true,
                errorMsg: "Email can not be empty",
            };
        } else if (!regEmail.test(email)) {
            return {
                isError: true,
                errorMsg: "Please enter valid Email",
            };
        } else {
            return {
                isError: false,
                errorMsg: "",
            };
        }
    };

    const onSubmit = () => {
        const { isError, errorMsg } = validateEmail(email.value);
        setEmailId({ ...email, isError: isError, errorMsg: errorMsg });
        setSubmitCount((cnt) => cnt + 1);
    };

    const handleInputs = (e) => {
        setEmailId({ ...email, value: e.target.value});
      };

    return (
        <>
            <TextField
                error={email.isError}
                id={
                    email.isError
                        ? "standard-error-helper-text"
                        : "standard-start-adornment"
                }
                label="Enter Email"
                className={`${classes.signupInputs} my-3`}
                onChange={handleInputs}
                value={email.value}
                name="email"
                helperText={email.isError && `${email.errorMsg}`}
            />
            <Button
                variant="contained"
                className={classes.btn}
                id="sign-in-button"
                style={{ background: "#fb641b", color: "#fff" }}
                disabled={loading}
                onClick={onSubmit}
            >
                {loading ? (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                ) : (
                    "CONTINUE"
                )}
            </Button>
            <Button
                variant="contained"
                className={classes.btn}
                style={{
                    background: "#fff",
                    color: "#2874f0",
                    marginTop: "20px",
                }}
                onClick={() => {
                    setLoginPage(true)
                }}
            >
                Existing User? Log in
            </Button>
        </>
    )
}
