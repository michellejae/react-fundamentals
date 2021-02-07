// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';


function UsernameForm({onSubmitUsername}) {

   const [username, setUsername] = React.useState('')

  // extra credit 1
  //const userNameInputRef = React.useRef()

    function handleSubmit(e){
      e.preventDefault()
      //**// NEED TO CALL CONSOLE.DIR CAUSE IT WILL BRING UP MY ELEMENT WITH CONSOLE.LOG
      //console.dir(e.target)
      onSubmitUsername(username)

      // extra credit 1
      //onSubmitUsername(userNameInputRef.current.value);

    }

    


    function handleChange(e) {
      setUsername(e.target.value.toLowerCase())

    }
  

  //**// htmlFor is the for attribute in regular HTML forms. can use id on input instead
  // of name cause NOT SURE



  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
        id="usernameInput" 
        type="text"
        onChange={handleChange} 
        value={username} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App


