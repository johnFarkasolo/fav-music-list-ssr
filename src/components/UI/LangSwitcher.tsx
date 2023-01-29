import { useContext } from "react";
import { Form } from "react-bootstrap";
import { LangContext } from "../../context/LanguageContext";

export const LangSwitcher = () => {
  const {
    state: { language },
    dispatch: { setLanguage },
  } = useContext(LangContext);

  return (
    <Form.Select
      onChange={(e) => setLanguage(e.target.value)}
      value={language}
      className="py-2"
    >
      <option value="EN">EN</option>
      <option value="PL">PL</option>
    </Form.Select>
  );
};
