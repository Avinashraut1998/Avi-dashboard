import "./App.css";
import LoginPage from "./pages/LoginPage";
import users from "./data";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                users={users}
                setUser={setUser}
              />
            ) : (
              <Navigate replace to={"/dashboard"} />
            )
          }
        />

        <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
