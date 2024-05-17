//データ操作(取得、追加、削除、更新)

import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
  //GET ALLメソッド
  getAll() {
    const resurt = axios.get(ENDPOINT_URL);
    console.log(resurt);
    return resurt.data;
  },
  //POSTメソッド
  async post(todo) {
    const resurt = await axios.post(ENDPOINT_URL, todo);
    console.log(resurt);
    return resurt.data;
  },
  //DELETE
  async delete(todo) {
    const resurt = axios.delete(ENDPOINT_URL + "/" + todo.id);
    console.log(resurt);
    return resurt.data;
  },
  //UP_DATA
  async patch(todo) {
    const resurt = axios.delete(ENDPOINT_URL + "/" + todo.id, todo);
    console.log(resurt);
    return resurt.data;
  },
};
todoApi.getAll();

export default todoApi;
