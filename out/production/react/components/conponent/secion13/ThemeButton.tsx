import {useThemeAction} from "../../../context/theme/useTheme.ts";

export default function ThemeButton() {

  const { changeTheme } = useThemeAction();

  return (
    <>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
};