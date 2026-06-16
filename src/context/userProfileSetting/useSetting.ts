import {useContext} from "react";
import {SettingContext, SettingContextAction} from "./SettingContext.ts";

export function useSetting(){
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error(
      "useSetting은 SettingProvider에서만 사용 가능하다."
    );
  }
  return context;
}

export function useSettingAction(){
  const context = useContext(SettingContextAction);
  if (!context) {
    throw new Error(
      "useSetting은 SettingContextAction에서만 사용 가능하다."
    );
  }
  return context;
}