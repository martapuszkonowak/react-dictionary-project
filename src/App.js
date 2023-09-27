import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i class="fa-solid fa-book-open fa-2xl"></i> Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="technology" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://martanowak.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marta Nowak{" "}
            </a>
            and is{" "}
            <a
              href="https://github.com/martapuszkonowak/react-dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://sweet-sorbet-b909bd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
