import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const userlist = [
    {id:1, name: 'iron man', email: 'ironman@exemple.com'},
    {id:2, name: 'spider man', email: 'spiderman@exemple.com'},
    {id:3, name: 'deadpool', email: 'deadpool@exemple.com'},
  ]
  const [users, setUsers] = useState(userlist);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email){
      alert('please fill the form');
    }else {
      if(isEditing){
        let tempUser = users.map((user) => {
          return user.id === editID ? {...user, name, email} : user;
        })
        setUsers(tempUser);
        setName('');
        setEmail('');
        setEditID(null);
        setIsEditing(false);
      }
    }
  }
  const handleDelete = (id) => {
    let tempUser = users.filter((user) => user.id !== id);
    setUsers(tempUser);
  }
  const handleEdit = (id) => {
    let tempUser = users.find((user) => user.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(tempUser.name);
    setEmail(tempUser.email);
  }
  const handleaddUser = () => {
    if(!name || !email){
      alert('please fill the form');
    }else {
      let user = {id: users.length+1, name, email};
      setUsers([...users, user]);
      setName('');
      setEmail('');
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">{isEditing ? 'edit' : 'submit'}</button>
      </form>
      <form onSubmit={handleaddUser}>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">ADD</button>
      </form>

    </div>
  );
}

export default App;
