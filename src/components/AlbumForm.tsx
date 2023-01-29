import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { LangContext } from "../context/LanguageContext";
import { AlbumData, Album } from "../types/album";

interface AlbumProps {
  onSubmit: (data: AlbumData) => void;
}

const initialValue: Album = {
  id: "",
  albumName: "",
  artistName: "",
  createDate: "",
  isFavorite: false,
};

export const AlbumForm = ({ onSubmit }: AlbumProps) => {
  const [form, setForm] = useState<Album>(initialValue);
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  const onCreateSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      albumName: form.albumName,
      artistName: form.artistName,
      createDate: new Date().toLocaleString(),
      isFavorite: false,
    });

    setForm(initialValue);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={onCreateSubmit}>
      <Row className="mb-4 mt-3">
        <Col>
          <Form.Control
            className="mb-3"
            type="text"
            name="albumName"
            value={form.albumName || ""}
            placeholder={translate("albumName")}
            onChange={onInputChange}
            required
          />
          <Form.Control
            className="mb-3"
            type="text"
            name="artistName"
            value={form.artistName || ""}
            placeholder={translate("authorName")}
            onChange={onInputChange}
            required
          />
          <Button className="mb-4" variant="primary" type="submit">
            {translate("addNewButton")}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
