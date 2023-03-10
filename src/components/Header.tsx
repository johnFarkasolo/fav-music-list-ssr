import { useContext } from "react";
import { Row, Col, Stack, Button } from "react-bootstrap";
import { HeartIcon, GridIcon, TableIcon } from "../assets/icons";
import { LangContext } from "../context/LanguageContext";
import { LangSwitcher } from "./UI/LangSwitcher";

interface HeaderProps {
  isGrid: boolean;
  isFavourite: boolean;
  onLayout: () => void;
  onFavorite: () => void;
}

export const Header = ({
  isGrid,
  isFavourite,
  onLayout,
  onFavorite,
}: HeaderProps) => {
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  return (
    <Row className="mb-3">
      <Col>
        <h1>{translate("logo")}</h1>
      </Col>
      <Col xs="auto">
        <Stack gap={2} direction="horizontal">
          <Button variant="outline-secondary" onClick={onFavorite}>
            <HeartIcon fill={isFavourite ? "red" : "none"} />
          </Button>
          <Button variant="outline-secondary" onClick={onLayout}>
            {isGrid ? <GridIcon /> : <TableIcon />}
          </Button>
          <LangSwitcher />
        </Stack>
      </Col>
    </Row>
  );
};
