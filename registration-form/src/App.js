import "./App.css"
import React, {useState} from "react";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChageName = (e) => {
    const newName = e.target.value;
    setValues({...values, name: newName});
  }

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setValues({...values, password: newPassword});
  }

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setValues({...values, email: newEmail});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.name && values.password && values.email){
      setIsValid(true);
    }
    setIsSubmitted(true);
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        {isSubmitted && isValid ? <p>Thank you for submitting!</p> : null}

        <input 
          type="text"
          name="name" 
          placeholder="Name" 
          value={values.name}
          onChange={handleChageName}
          />
          {isSubmitted && !values.name ? <span>Please add a name</span> : null }
        
        <input 
          type="password"
          name="password"
          placeholder="Password" 
          value={values.password}
          onChange={handleChangePassword}
          
          />
          {isSubmitted && !values.password ? <span>Please add a password</span> : null }
    
        <input 
        type="text"
        name="email" 
        placeholder="Email" 
        value={values.email}
        onChange={handleChangeEmail}

        />
        {isSubmitted && !values.email ? <span>Please add an email</span> : null }
      
        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;
