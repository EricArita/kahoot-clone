import * as api from "../../api";
import { AUTH } from "../../constants/actionTypes";

export const loginMiddleware = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    if (data?.accessToken !== "") localStorage.setItem("profile", JSON.stringify(data))
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const registerMiddleware = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};