import { LangActionType } from "../enum";

export interface LangState {
  language: string;
}

export interface SetLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

export interface ContextProps {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  };
}
