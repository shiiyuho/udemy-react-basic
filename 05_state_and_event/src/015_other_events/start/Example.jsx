import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          onChange={() => console.log("onChange検知")} //入力値が変わったとき
          onBlur={() => console.log("onBlur検知")} //入力欄からフォーカス（選択）が外れた時の検知
          onFocus={() => console.log("onFocus検知")} //フォーカスがあてられたとき
        />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
