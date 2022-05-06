import Header from "./components/header/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Welcome from "./components/main/Welcome";
import ProtectedRoute from "./components/ProtectedRoute";
import News from "./components/main/News";
import { AuthContextProvider } from "./hooks/useAuth";

export default function App() {

  return (
    <main className="main">
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/news" element={<ProtectedRoute Component={<News/>} />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </main>
  );
}
