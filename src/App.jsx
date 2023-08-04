import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0);
  const pageSize = 12;
  const newsApiKeys = import.meta.env.VITE_NEWS_API_KEY;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                newsApiKeys={newsApiKeys}
                category="technology"
              />
            }
          />
        </Routes>
        {/* <News mt={4} p={2}/> */}
      </Router>
    </>
  );
}

export default App;
