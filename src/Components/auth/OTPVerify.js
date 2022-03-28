import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import OtpInput from "react-otp-input";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";

import toastMessage from "../../utils/toastMessage";

const useStyles = makeStyles((theme) => ({
    buttonProgress: {
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function OtpVerify({ handleActions, email }) {
    const [otp, setOTP] = useState("");
    const [loading, setLoading] = useState(false);
    const { OTPResult } = useSelector((state) => state.userReducer);
    const [data, setData] = useState({
        otp_id:OTPResult,
        check:'VERIFICATION',
        otp:""
    })

    const classes = useStyles();

    useEffect(() => {
        toastMessage(`Verification code send to ${email}`, "success");
    },[]);

    const verifyOTP = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5500/api/auth/createUser/verify/otp', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json, text/plain, */*"
                },
                body: JSON.stringify(data)
            })
            setLoading(false);
            if(res.status === 200){
                handleActions({
                    openStep1: false,
                    openStep2: true,
                    openOTPVerify: false,
                });
            }else
                toastMessage("Invalid code. Please enter valid code", "info");
        } catch (error) {
            setLoading(false);
            if (error.toString().includes("auth/invalid-verification-code")) {
                toastMessage("Invalid code. Please enter valid code", "info");
            } else {
                toastMessage("Something went wrong", "error");
            }
        }
    };

    const handleOnClick = () => {
        handleActions({
            openStep1: true,
            openStep2: false,
            openOTPVerify: false,
        });
    };

    const handleChange = (OTP) => {
        setOTP(OTP);
        setData({...data,otp:OTP})
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: 18, margin: "20px 0" }}>
                {`Please enter the OTP send to ${email} `}
                <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={handleOnClick}
                >
                    Change
                </Link>
            </p>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={5}
                separator={<span></span>}
                inputStyle={{
                    height: 50,
                    width: 50,
                    margin: "0px 5px",
                    fontSize: 18,
                }}
                errorStyle={{ borderColor: "red" }}
            />
            <Button
                variant="contained"
                disabled={loading}
                style={{
                    background: "#2874f0",
                    width: "50%",
                    height: 40,
                    margin: "20px 0",
                }}
                onClick={verifyOTP}
            >
                {loading ? (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                ) : (
                    "Verify"
                )}
            </Button>
        </div>
    )
}