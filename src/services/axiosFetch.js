import axios from "axios";

const instance = axios.create({
  baseURL: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
});

export default instance;