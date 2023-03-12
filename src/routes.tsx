import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './layouts/App';
import {Home} from "./pages/Home";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
