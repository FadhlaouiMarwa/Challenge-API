import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import Profile from './components/Profile';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="/profile/post/:id" element={<Post/>}/>

      </Routes>
    </div>
  );
}

export default App;
