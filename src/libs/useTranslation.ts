import {type SupportedLanguage, translations} from "./i18n.ts";
import {useSetting} from "../context/userProfileSetting/useSetting.ts";


// 아래코드 전체 적으로 질문 무슨 내용이고 어떤 개념인지 return에서 t는 사용하는데 lang는 언제 사용되는것인지?
export default function useTranslation() {
  const { preferences } = useSetting();
  const lang = preferences.language as SupportedLanguage;
  const t = translations[lang];
  return { t, lang }
};