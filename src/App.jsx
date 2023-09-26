import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';
import Signup from './routes/Signup'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />      
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
      <Route path="login" element={<Login />} />
    </Route>    
    <Route path="signup" element={<Signup />} />
  </Routes>
);
export default App;
