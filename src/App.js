import "./App.css";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Chat from "./views/Chat";
import Call from "./views/Call";
import Setting from "./views/Setting";
import Status from "./views/Status";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/call" element={<Call />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
