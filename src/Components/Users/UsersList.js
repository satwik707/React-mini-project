import React from 'react'

import classes from './UsersList.module.css'
 import Cards from '../UI/Cards'
import Button from '../UI/Button/Button'
const UsersList = (props)=>
{

return (
      props.users.length>0 ? (  <Cards className={classes.users}>
    <ul>
        {props.users.map((user) => <div><li key={user.id}>   {user.name} ({user.age} years old)</li>
        <Button  onClick={()=>props.Deletehandler(user.id)}>    Delete</Button></div>)}
        
    </ul>
    
    </Cards>
     ) : ''

)

}

export default UsersList