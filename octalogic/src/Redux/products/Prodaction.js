import axios from "axios";
import { ADD_POST, GET_COURSE } from "./ProdactionTypes";

export const GetCourse = () => async (dispatch) => {
  try {
    let res = await axios.get("https://sleepy-wasp-singlet.cyclic.app/course");
    const data = res.data
    dispatch({ type: GET_COURSE, payload: data })
  } catch (err) {
    console.log(err);
  }
}


export const AddPost = (data) => async (dispatch) => {
  try {
    let res = await axios.post("https://sleepy-wasp-singlet.cyclic.app/course", data);
    dispatch({ type: ADD_POST })
  } catch (err) {
    console.log(err);
  }
}