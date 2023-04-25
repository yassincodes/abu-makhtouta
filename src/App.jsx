import Home from "./Home";
import Chat from "./Chat"
import Prompts from "./Prompts"
import Five from "./pages/Five";
import Six from "./pages/Six";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/5" element={<Five />} />
        <Route path="/6" element={<Six />} />
      </Routes>
    </>
  );
}

export default App;
