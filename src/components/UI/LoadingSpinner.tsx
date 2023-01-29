import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { LangContext } from "../../context/LanguageContext";

export const LoadingSpinner = () => {
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">
        {translate("spinnerText")}Loading...
      </span>
    </Spinner>
  );
};
