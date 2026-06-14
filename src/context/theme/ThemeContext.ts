import {createContext} from "react";

type ThemeContextType = {
  theme: string;
}
type ThemeContextTypeAction = {
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeContextAction = createContext<ThemeContextTypeAction | null>(null);