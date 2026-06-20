import {Monitor, Moon, Sun} from "lucide-react";
import {useSetting, useSettingAction} from "../../../../context/userProfileSetting/useSetting.ts";
import {twMerge} from "tailwind-merge";
import useTranslation from "../../../../libs/useTranslation.ts";

export default function ThemeSetting() {
  const {preferences} = useSetting();
  const {updateColorScheme} = useSettingAction()
  const {t} = useTranslation();
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="text-blue-500" size={24}/>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.theme.label}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">

          {/*[] 뒤에 as const는 뭐야 아직도 햇갈리네*/}
          {
            (
              ["system", "light", "dark"] as const
              /*.map((scheme) => 에서 {}가 아닌 ()를 사용하는 이유)*/
            ).map((scheme) => {
                return (
                  <button
                    key={scheme}
                    className={twMerge(
                      "flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      preferences.colorScheme === scheme
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    )}
                    onClick={() => updateColorScheme(scheme)}
                  >
                    {
                      scheme === "system" ?
                        /*<></>을 감싸는 ()를 해도 되고 안해도 되네?*/
                        <>
                          <Monitor size={16}/>
                          <span>{t.theme.system}</span>
                        </>
                        : scheme === "light" ?
                          <>
                            <Sun size={16}/>
                            <span>{t.theme.light}</span>
                          </>
                          :
                          <>
                            <Moon size={16}/>
                            <span>{t.theme.dark}</span>
                          </>

                    }
                  </button>
                )
              }
            )
          }

        </div>
      </div>
    </>
  );
}
