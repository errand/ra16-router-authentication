import AuthContextProvider from "./components/AuthContextProvider";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  return (
    <main className="main">
      <AuthContextProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </main>
  );
}
