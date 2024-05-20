import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const THEMES = ["light", "dark", "red"];

  //更新用関数
  const changeTheme = (e) => setTheme(e.target.value);

  //radioボタンの生成
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              key={_theme}
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
