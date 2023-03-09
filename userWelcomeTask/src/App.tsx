import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user/User';

const users = [
  {
    firstName: "gili",
    age: 28,
  },
  {
    firstName: "vika",
    age: 20,
  },
  {
    firstName: "hadar",
    age: 25,
  },
];

function App() {
  return (
    <div>
      {users.map((user) => {return <User firstName={user.firstName} age={user.age}/>})}
    </div>
  );
}

export default App;

