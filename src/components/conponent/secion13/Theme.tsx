import {useTheme} from "../../../context/theme/useTheme.ts";

export default function Theme() {
  const {theme} = useTheme();
  return (
    <>
      <h1>Theme : {theme}</h1>
    </>
  );
};