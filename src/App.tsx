import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ background: `linear-gradient(to right, #FF7ED4,#7Aff95)` }}
    >
      <div>
        <p className="text-3xl font-mono text-white">Welcome to my world</p>
        <div
          className="computer flex flex-col items-center"
          onClick={() => navigate("/homepage")}
        >
          <img
            src={require("./images/computer.png")}
            alt="computer-icon"
            className="w-14 h-14 mt-10"
          />
          <p className="text-center font-mono text-white">
            Marina_Kim
            <br />
            Web_Developer.exe
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
