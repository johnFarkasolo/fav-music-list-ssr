import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LanguageProvider } from "./context/LanguageContext";
import { LoadingSpinner } from "./components/UI/LoadingSpinner";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

//@ts-ignore
const Album = lazy(() => import("./components/Album"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LanguageProvider>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Album />} />
          </Routes>
          <ToastContainer />
        </Container>
      </LanguageProvider>
    </Suspense>
  );
}

export default App;
