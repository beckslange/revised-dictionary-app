import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>

      <footer className="text-center mt-3 px-2">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/rebecca-lange-804b8b111/"
          target="_blank"
          rel="noreferrer"
        >
          Rebecca Lange
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/beckslange/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-react-forecast-wk6.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
