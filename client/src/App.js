import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import ToDoPage from './routes/to-do-page/to-do-page.component';
import JournalsPage from './routes/journals-page/journals-page.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='to-do-page' element={<ToDoPage/>} />
        <Route path='journals-page' element={<JournalsPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
