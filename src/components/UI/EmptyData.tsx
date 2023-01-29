import { useContext } from "react";
import { LangContext } from "../../context/LanguageContext";

export const EmptyData = () => {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  return <h3>{translate("emptyState")}</h3>;
};
