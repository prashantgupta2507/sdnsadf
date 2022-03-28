import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import clsx from 'clsx'

import { actionCreators } from '../../Actions/index'
import toastMessage from '../../utils/toastMessage'
import { makeCapitalizeText } from "../../utils/makeCapitalizeText";

const useStyles = makeStyles((theme) => ({
    signupInputs: {
        margin: "5px 0px 20px 0",
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
        margin: "0px 10px",
    },
}));

export default function SignupStep2() {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        fName: "",
        lName: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        fName: false,
        lName: false,
        password: false,
    });

    const [errorMsg, setErrorMsg] = useState({
        fName: "",
        lName: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const initial = useRef(true);
    const { popupLogin, email } = useSelector((state) => state.userReducer);

    const regName = /^[a-zA-Z]+$/;
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/;

    useEffect(() => {
        if (initial.current === true) {
            initial.current = false;
        } else {
            let formError = false;
            const errorValues = Object.values(errors);
            errorValues.forEach((value) => {
                if (value) formError = true;
            });
            if (!formError) {
                completeSignup();
            }
        }
    }, [submitCount]);

    const classes = useStyles();
    const dispatch = useDispatch();
    const { setIsAuthenticate, setUserInfo, modalClose, setAuthtoken } = bindActionCreators(actionCreators, dispatch)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateName = (name, fieldName) => {
        if (name === "") {
            return {
                isError: true,
                errorMsg: `${fieldName} can not be empty`,
            };
        } else if (name.length < 3) {
            return {
                isError: true,
                errorMsg: "Minimum 3 charterers required",
            };
        } else if (name.length > 20) {
            return {
                isError: true,
                errorMsg: "Maximum 20 charterers allowed",
            };
        } else if (!regName.test(name)) {
            return {
                isError: true,
                errorMsg: `Invalid ${fieldName}`,
            };
        } else {
            return {
                isError: false,
                errorMsg: "",
            };
        }
    };

    const validatePassword = (pass) => {
        if (pass === "") {
            return {
                isError: true,
                errorMsg: `Password can not be empty`,
            };
        } else if (pass.length < 6) {
            return {
                isError: true,
                errorMsg: "Minimum 6 charterers required",
            };
        } else if (pass.length > 20) {
            return {
                isError: true,
                errorMsg: "Maximum 20 charterers allowed",
            };
        } else if (!regPassword.test(pass)) {
            return {
                isError: true,
                errorMsg: "Week Password !",
            };
        } else {
            return {
                isError: false,
                errorMsg: "",
            };
        }
    };

    const completeSignup = async () => {
        setLoading(true);
        let admin = false;
        if (email === 'chayangupta7@gmail.com') {
            admin = true;
        }
        try {
            const res = await fetch("http://localhost:5500/api/auth/createUser/register", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json, text/plain, */*"
                },
                body: JSON.stringify({
                    email: email,
                    fName: makeCapitalizeText(values.fName),
                    lName: makeCapitalizeText(values.lName),
                    password: values.password,
                    admin: admin
                })
            });
            setLoading(false);
            let result = await res.json()
            if (res.status === 201) {
                setIsAuthenticate(true);
                setUserInfo({ fName: makeCapitalizeText(result.Data.fName), lName: makeCapitalizeText(result.Data.lName), gender:null,phone:null, admin: Boolean(result.Data.admin),orders:[]})
                setAuthtoken(result.Data.token)
                toastMessage("Registration Successfull", "success")
            }

            //Modal Close
            if (popupLogin)
                modalClose();
            if (result.Data.admin) {
                history.replace('/admin')
            }
        } catch (error) {
            setLoading(false);
            toastMessage("Something went wrong. Please sign up later.", "error");
        }
    };

    const handleInputs = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const submitForm = () => {
        const validatedFName = validateName(values.fName, "First Name");
        const validatedLName = validateName(values.lName, "Last Name");
        const validatedPassword = validatePassword(values.password);

        //Set Error
        setErrorMsg({
            fName: validatedFName.errorMsg,
            lName: validatedLName.errorMsg,
            password: validatedPassword.errorMsg,
        });

        setErrors({
            fName: validatedFName.isError,
            lName: validatedLName.isError,
            password: validatedPassword.isError,
        });
        setSubmitCount((cnt) => cnt + 1);
        //checkout useEffect
    };

    return (
        <>
            <TextField
                id={errors.fName ? "standard-basic" : "standard-start-adornment"}
                label="Enter First Name"
                className={`${classes.signupInputs} 'my-2'`}
                value={values.fName}
                onChange={handleInputs}
                name="fName"
                error={errors.fName}
                helperText={errors.fName && `${errorMsg.fName}`}
            />
            <TextField
                id={errors.lName ? "standard-basic" : "standard-start-adornment"}
                label="Enter Last Name"
                className={`${classes.signupInputs} my-2`}
                value={values.lName}
                onChange={handleInputs}
                name="lName"
                error={errors.lName}
                helperText={errors.lName && `${errorMsg.lName}`}
            />
            <FormControl
                className={clsx(
                    classes.margin,
                    classes.textField,
                    classes.signupInputs
                )}
                error={errors.password}
            >
                <InputLabel htmlFor="standard-adornment-password">
                    Set Password
                </InputLabel>
                <Input
                    id={
                        errors.password
                            ? "standard-adornment-password"
                            : "standard-start-adornment"
                    }
                    type={showPassword ? "text" : "password"}
                    onChange={handleInputs}
                    value={values.password}
                    name="password"
                    error={errors.password}
                    className="my-3"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {errors.password && (
                    <FormHelperText id="standard-helper-text" error={true}>
                        {errorMsg.password}
                    </FormHelperText>
                )}
            </FormControl>
            <p className={classes.para}>
                By continuing, you agree to Bestof Shopping Terms of Use and Privacy Policy.
            </p>
            <Button
                variant="contained"
                className={`${classes.btn} my-2`}
                style={{ background: "#fb641b", color: "#fff" }}
                disabled={loading}
                onClick={submitForm}
            >
                {loading ? (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                ) : (
                    "Signup"
                )}
            </Button>
        </>
    )
}
