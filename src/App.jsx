import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { NavProvider } from "./context/navbarContext";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/darkModeBtn/DarkModeBtn";
import bgImage from "./assets/unsplash_9V1cYW4JIfQ.png";
import { Home } from "./pages/home/Home";
import { useScrollToHashElement } from "./utils/hooks/useScrollToHashElement";
import { Projet } from "./pages/projet/Projet";
import { ContactPage } from "./pages/contact/ContactPage";

function App() {
  useScrollToHashElement();
  return (
    <DarkModeProvider>
      <NavProvider>
        <div className="app">
          <img
            src={bgImage}
            alt="background image of the app"
            style={{
              position: "absolute",
              top: "0",
              zIndex: "-20",
              width: "100%",
              height: "100%",
            }}
          ></img>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projet/:id" element={<Projet />} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/admin" element={<div>Admin</div>} />
            </Routes>
          </main>
        <Footer />
        </div>
      </NavProvider>
    </DarkModeProvider>
  );
}

export default App;
