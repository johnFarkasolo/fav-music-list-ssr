import { useReducer, ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LangState, SetLanguageAction, ContextProps } from "../types/lang";
import { LangActionType } from "../enum";

import en from "../translations/en.json";
import pl from "../translations/pl.json";

const langReducer = (
  state: LangState,
  action: SetLanguageAction
): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

export const LangContext = createContext({} as ContextProps);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useLocalStorage<string>("LANGUAGE", "EN");
  const [state, dispatch] = useReducer(langReducer, { language: lang });

  const setLanguage = (lang: string) => {
    setLang(lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };

  const translate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: string } = {};

    if (language === "EN") {
      langData = en;
    } else if (language === "PL") {
      langData = pl;
    }

    return langData[key];
  };

  return (
    <LangContext.Provider
      value={{ state, dispatch: { setLanguage, translate } }}
    >
      {children}
    </LangContext.Provider>
  );
};
