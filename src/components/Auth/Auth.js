import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { login, register } from "../../redux/thunk-middlewares/auth";

const initialState = {
  userType: "",
  firstName: "",
  lastName: "",
  userName: "",
  mail: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isSignup) {
      dispatch(register(formData, history))
    } else {
      dispatch(login(formData, history))
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {
            isSignup ?
              isLanguageEnglish ? "Sign up" : "Đăng ký"
              : 
              isLanguageEnglish ? "Sign in" : "Đăng nhập"
          }
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label={isLanguageEnglish ? "First Name" : "Họ"}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label={isLanguageEnglish ? "Last Name" : "Tên"}
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="userType"
                  label={isLanguageEnglish ? "User type" : "Loại người dùng"}
                  handleChange={handleChange}
                />
                <Input
                  name="mail"
                  label={isLanguageEnglish ? "Email address" : "Email"}
                  handleChange={handleChange}
                  type="email"
                />
              </>
            )}

            <Input
              name="userName"
              label={isLanguageEnglish ? "User Name" : "Tên đăng nhập"}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label={isLanguageEnglish ? "Password" : "Mật khẩu"}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label={isLanguageEnglish ? "Repeat password" : "Lặp lại mật khẩu"}
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup
              ? isLanguageEnglish
                ? "Sign up"
                : "Đăng ký"
              : isLanguageEnglish
              ? "Sign in"
              : "Đăng nhập"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? isLanguageEnglish
                    ? "Already have an account? Sign in"
                    : "Đã có tài khoản? Đăng nhập"
                  : isLanguageEnglish
                  ? "Don't have an account? Sign Up"
                  : "Chưa có tài khoản? Đăng ký"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;
