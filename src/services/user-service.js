import axios from "axios";

async function addUser(user) {
  return axios({
    url: "http://localhost:8080/files",
    method: "POST",
    headers: {
      authorization: "your token comes here",
    },
    data: user,
  });
  // .then((res) => {})
  // .catch((err) => {});
}

export { addUser };
