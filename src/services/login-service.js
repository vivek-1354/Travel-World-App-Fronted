import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const data = await axios.post("/api/auth/login", {
      number: number,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
