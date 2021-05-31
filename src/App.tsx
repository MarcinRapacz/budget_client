import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
