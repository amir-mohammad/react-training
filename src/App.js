import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav";
import axios from 'axios';
import Users from "./components/users/Users";
import Search from "./components/search/Search";

function App() {
  const [users,setUsers] = useState([]);

  const searchUsers = async (text) => {
      const result = await axios.get(`https://api.github.com/search/users?q=${text}&clinet_id=${process.env.REACT_APP_GITHUB_REACT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_REACT_CLIENT_SECRET}`);
     
      setUsers(result.data.items);
  }
  useEffect(() => {
      async function getDate(){
         const result = await axios.get(`https://api.github.com/users?clinet_id=${process.env.REACT_APP_GITHUB_REACT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_REACT_CLIENT_SECRET}`);
       
         setUsers(result.data);
      }

      getDate();
  },[]);
  return (
    <div className="App">
      
        <Nav title="GitHub finder"/>
        <Search searchUsers={searchUsers} />
        <Users users={users} />
    </div>
  );
}

export default App;
