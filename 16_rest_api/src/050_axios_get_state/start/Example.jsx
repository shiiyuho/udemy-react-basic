// POINT サーバーから取得したデータを画面表示
import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState();

  //第2引数に空の配列を入れる（[]）
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {/* 「?.」をつけることによって、mapメソッド（初期値がなくても）を使ってもエラーにならない */}
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            {/* 配列がつながるときに「hobbies.join(",")」を付ければ間にカンマが入る */}
            <p>hobby: {user.hobbies.join(",")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
