import axios from "axios";

const getToken = () => `Bearer ${localStorage.getItem("token")}`;

async function addChat(data) {
  return axios({
    url: `http://localhost:8000/v1/chat`,
    method: "POST",
    headers: {
      token: getToken(),
    },
    data,
  });
}

async function getChatForReceiver(sender, receiver) {
  return axios({
    url: `http://localhost:8000/v1/chat/${sender}/${receiver}`,
    method: "GET",
    headers: {
      token: getToken(),
    },
  });
}

export { getChatForReceiver, addChat };
