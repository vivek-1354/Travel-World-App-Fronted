import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const data = await axios.post("http://localhost:8000/api/auth/login", {
      number: number,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
