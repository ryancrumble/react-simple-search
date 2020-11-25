import './App.css';
import List from './components/List';

import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch data from endpoint on init
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  // Search Filter
  useEffect(() => {
    setFilteredUsers(
      data.filter((user) => {
        return user.username.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, data])

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="Search">
        <input
          className="Search__input"
          type="text"
          placeholder="Search by user name"
          onChange={(e) => setSearch(e.target.value)}
          />
        
        <List data={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
