import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Footer, Header, RequireAuth } from './components';
import { Home, Create, Update, Upgrade, Signin } from './pages';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/create" element={<Create />} />

          {/* <Route
            path="/create"
            element={
              <RequireAuth>
                <Create />
              </RequireAuth>
            }
          /> */}
          <Route
            path="/update"
            element={
              <RequireAuth>
                <Update />
              </RequireAuth>
            }
          />
          <Route
            path="/upgrade"
            element={
              <RequireAuth>
                <Upgrade />
              </RequireAuth>
            }
          />
        </Routes>
      </DataProvider>
      <Footer />
    </Router>
  );
}

export default App;
