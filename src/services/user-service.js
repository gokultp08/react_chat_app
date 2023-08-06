import axios from "axios";

async function addUser(user) {
  return axios({
    url: `http://localhost:8000/v1/user`,
    method: "POST",
    headers: {
      authorization: "your token comes here",
    },
    data: user,
  });
}

async function login(data) {
  return axios({
    url: `http://localhost:8000/v1/login`,
    method: "POST",
    data: data,
  });
}

async function getAllUsers() {
  return axios({
    url: `http://localhost:8000/v1/user`,
    method: "GET",
  });
}

async function verify(data) {
  return axios({
    url: `http://localhost:8000/v1/verify`,
    method: "POST",
    data,
  });
}

export { addUser, login, getAllUsers, verify };
