import axios from "axios";
import { DATA } from "./actionType";
import env from "react-dotenv";
const url = `https://api.unsplash.com/photos?client_id=${env.ACCESS_KEY}`;

export const fetchData = (number) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url + `&page=${number}`);
        dispatch({
          type: DATA,
          payload: response.data,
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  };
};
