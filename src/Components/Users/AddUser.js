import React , {useState, useRef, useEffect} from 'react'
 import Card from '../UI/Cards'

 import classes from './AddUser.module.css'

 import Button from '../UI/Button/Button'


 

const AddUser =(props)=>
{
    const [username, SetUsername]=useState('')
    const [age, SetAge]=useState('')
   
   const [check,Setcheck] =useState(false)
   useEffect(()=>
   {
        if(username.length>0 && age.length >0)
        {
            Setcheck(false)
            console.log(check, 'sab sahi hone pr')
        }
        else{
            Setcheck(true)
        }
        
   },[username, age])
    const Namehandler=(e)=>
    {
        SetUsername(e.target.value)
    }

    const AgeHandler=(e)=>
    {
        SetAge(e.target.value)
    }
    const AddUserHandler=(event)=>
        {

            event.preventDefault()
            // const Username=(InputRef.current.value)
            // const Age=(AgeRef.current.value)
            
            props.onAddUser(username,age)
            

            SetUsername('')
            SetAge('')
           

        }

    
       
       
    return(

     

        <Card className={classes.input}>
            
        <form onSubmit={AddUserHandler}>  
        <label htmlFor="username">Username</label>
        <input id="username" value={username} onChange={Namehandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={AgeHandler}/>
        <Button type="submit"  disabled={check}>Add User</Button>

        </form>
        
        </Card>
        
    )
}

export default AddUser