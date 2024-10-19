import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data = axios.post("/api/auth/register", {
      username: username,
      number: Number(number),
      email: email,
      password: password,
    });
    console.log(data);
  } catch (error) {
    console.log("user not created.");
  }
};
