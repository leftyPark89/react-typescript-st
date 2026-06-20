import {SettingContext, SettingContextAction} from "./SettingContext.ts";
import {useEffect, useMemo, useState} from "react";


const defaultValue: UserPreferences = {
  language: "ko",
  fontSize: "medium",
  notifications: {
    email: false,
    push: false,
    desktop: false,
  },
  colorScheme: "system"
}
export default function SettingProvider({
                                          children
                                        }: {
  children: React.ReactNode;
}) {

  const [preferences, setPreferences] = useState<UserPreferences>(defaultValue);

  // UserPreferences["language"]에서 defaultValue["language"]을 쓰는게 아닌지? 그리고
  // []을 사용한거면 "ko" 가오는것인지? 아니면 language: "ko"가 오는것인지?
  const updateLanguage = (language: UserPreferences["language"]) => {
    setPreferences((preferences) => ({...preferences, language}));
  }
  const updateFontSize = (fontSize: UserPreferences["fontSize"]) => {
    setPreferences((preferences) => ({...preferences, fontSize}));
  }

  // keyof의 개념과 왜 사용하는것인지?
  const updateNotifications = (
    key: keyof UserPreferences["notifications"],
    value: boolean
  ) => {
    setPreferences((preferences) => ({
      ...preferences,
      // 아래 사용된 문법 전부 모르겠음 특히 [key]????
      notifications: {...preferences.notifications, [key]: value},
    }))
  }

  const updateColorScheme = (colorScheme: UserPreferences["colorScheme"]) => {
    setPreferences((preferences) => ({...preferences, colorScheme}))
  }

  useEffect(() => {
    document.documentElement.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[preferences.fontSize];
  }, [preferences]);


  // 화살표 함수 다음 ()로 감싸는 것은 여러 함수가 포함되기 때문이 맞는거지?
  const memoization = useMemo(
    () => ({
      updateLanguage,
      updateFontSize,
      updateNotifications,
      updateColorScheme
    }), []
  )

  return (
    <>
      <SettingContextAction value={memoization}>
        <SettingContext value={{preferences}}>
          {children}
        </SettingContext>
      </SettingContextAction>
    </>
  );
};