import { useContext } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { SearchIcon } from "../assets/icons";
import { LangContext } from "../context/LanguageContext";

interface SortPanelProps {
  query: string;
  sort: string;
  setQuery: (query: string) => void;
  setSort: (sort: string) => void;
}

export const SortPanel = ({
  query,
  setQuery,
  sort,
  setSort,
}: SortPanelProps) => {
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder={translate("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputGroup.Text>
          <SearchIcon />
        </InputGroup.Text>
      </InputGroup>
      <Form.Select
        className="mb-3"
        size="sm"
        name="sort"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
        onBlur={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="">{translate("sort")}</option>
        <option value="id">{translate("sortByid")}</option>
        <option value="albumName">{translate("sortByAlbums")}</option>
        <option value="artistName">{translate("sortByArtist")}</option>
        <option value="createDate">{translate("sortByDate")}</option>
      </Form.Select>
    </>
  );
};
