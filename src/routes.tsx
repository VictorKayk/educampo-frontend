import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './components/layouts/App';
import {Home} from './pages/Home';
import { NewAssociate } from './pages/NewAssociate';
import { Associate } from './pages/Associate';

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewAssociate />} />
          <Route path=":id" element={<Associate />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
