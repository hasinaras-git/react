import './styles/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./components/User";
import Ressources from "./components/Ressources";
import NavLink from './components/NavLink';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserDetails from './components/UserDetails';
import RessourceDetails from './components/RessourceDetails';
import NotFound from './components/NotFound';


function App() {
  const [ users, setUsers ] = useState([]);
  const [ ressources, setRessources ] = useState([]);

  useEffect(() => {
    const fetchUser = async() => {
        try {
            const users1 = await axios.get('https://reqres.in/api/users?page=1');
            const users2 = await axios.get('https://reqres.in/api/users?page=2');
            const allUsers = users1.data.data.concat(users2.data.data)
            setUsers(allUsers);

            const { data } = await axios.get('https://reqres.in/api/unknown');
            setRessources(data.data);
        } catch(error) {
            console.log(error.message);
        }
    }
    fetchUser();
}, []);

  return (
    <div className="App">
      <Router>
        <NavLink />
        <Routes>
            <Route path="/" element={<User users={users}/>} />
            <Route exact path="/user" element={<User users={users}/>} />
            <Route exact path="/ressources" element={<Ressources data={ressources}/>} />
            <Route exat path='/ressources/details/:resId' element={<RessourceDetails allRes={ressources}/>} />
            <Route path="/user/details/:id" element={<UserDetails users={users} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
