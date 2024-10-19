import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/login`,
      {
        number: number,
        password: password,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
