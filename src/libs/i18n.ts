export const translations = {
  ko: {
    profileTitle: "사용자 설정",
    languageSetting: "언어 설정",
    fontSize: {
      label: "글자 크기",
      small: "작게",
      medium: "보통",
      large: "크게",
    },
    notifications: {
      label: "알림 설정",
      email: "이메일 알림",
      push: "푸시 알림",
      desktop: "데스크톱 알림",
    },
    theme: {
      label: "테마 설정",
      system: "시스템",
      light: "라이트",
      dark: "다크",
    },
  },
  en: {
    profileTitle: "User Settings",
    languageSetting: "Language Setting",
    fontSize: {
      label: "Font Size",
      small: "Small",
      medium: "Medium",
      large: "Large",
    },
    notifications: {
      label: "Notification Settings",
      email: "Email Notifications",
      push: "Push Notifications",
      desktop: "Desktop Notifications",
    },
    theme: {
      label: "Theme Setting",
      system: "System",
      light: "Light",
      dark: "Dark",
    },
  },
  ja: {
    profileTitle: "ユーザー設定",
    languageSetting: "言語設定",
    fontSize: {
      label: "文字サイズ",
      small: "小",
      medium: "中",
      large: "大",
    },
    notifications: {
      label: "通知設定",
      email: "メール通知",
      push: "プッシュ通知",
      desktop: "デスクトップ通知",
    },
    theme: {
      label: "テーマ設定",
      system: "システム",
      light: "ライト",
      dark: "ダーク",
    },
  },
} as const;

// 리터럴 타입으로 사용하기 위함이 무슨 뜻이야?
// keyof typeof는 자바스크립트만일 경우에는 사용하지 않는거지? 타입스크립트때만 사용하는 건지와, 타입스크립트가 아닌 코드도 보여줘
export type SupportedLanguage = keyof typeof translations;
export type LocaleKey = keyof (typeof translations)["ko"];
