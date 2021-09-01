import React , {useState}  from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [Userlist,SetUserlist] =useState([])

  

  const onAddUserhandler =(uName, uAge)=>
  {
    SetUserlist((prevState)=>
    {
      return [ 
        ...prevState,
         { name :uName , age :uAge, id:Math.random().toString()}

      ]
    })
  }


  const Deletehandler=(id)=>
  {
    const newList=(Userlist.filter((user)=> user.id!== id))
    SetUserlist(newList)
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserhandler}/>
      <UsersList users={Userlist} Deletehandler={Deletehandler}/>
    </div>
  );
}

export default App;
