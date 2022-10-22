import axios from "axios";
// const url = "http://192.168.18.29:3000/api";
const url = "https://api.openweathermap.org/data/2.5/weather";
const config = {};
axios.defaults.baseURL = url;
class Api {
  //
  //   async setToken(payload) {
  //     config.headers.Authorization = payload.token;
  //     return "token";
  //   }

  //   async userLogin(payload) {
  //     const { data } = await axios.post("/user/login", payload, config);
  //     return data;
  //   }

  //   async editUser(payload) {
  //     const { data } = await axios.patch(`/user/${payload._id}`, payload, config);
  //     return data;
  //   }

  async getWeatherDetails(payload) {
    const { query = "" } = payload;
    const { data } = await axios.get(query, config);
    return data;
  }
}

export const api = new Api();
