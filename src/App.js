import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleChat from "./Layout/Component/ToggleChat";
import { publicRoutes } from "./Router";
import DefaultLayout from "./Layout/Component/DefaultLayout";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
