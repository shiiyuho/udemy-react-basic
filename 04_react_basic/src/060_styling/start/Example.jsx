/**
 * コンポーネントのスタイリング　当て方
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
/**スタイルの定義 */
import "./Example.css"; //相対パスの時は「./」を付ける

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
    </div>
  );
};

export default Example;
