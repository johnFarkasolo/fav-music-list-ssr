import { Container } from "react-bootstrap";
import { Album } from "./components/Album";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <LanguageProvider>
      <Container className="mt-4">
        <Album />
        <ToastContainer />
      </Container>
    </LanguageProvider>
  );
}

export default App;
