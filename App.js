import React, {use, useState} from 'react';
import './App.css';
import Home from './home.js';
import NavBar from './navBar.js';
import Footer from './footer.js';

function App() {

  const [password,setPassword]=useState("");
  const [length,setLength]=useState(0);
  const [uppercase,setUppercase]=useState(false);
  const [lowercase,setlowercase]=useState(false);
  const [numbers,setNumbers]=useState(false);
  const [symbols,setSymbols]=useState(false);
  const [strength,setStrength]=useState("");


  const generatePassword=()=>{
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers1 = '0123456789';
    const symbols1 = '!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    if(uppercase) password+=upperCaseLetters;
    if(lowercase) password+=lowerCaseLetters;
    if(numbers) password+=numbers1;
    if(symbols) password+=symbols1;

    let finalPassword="";
    for(let i=0;i<length;i++){
      finalPassword+=password[Math.floor(Math.random()*password.length)];
    }
    let count=0;
    for(let i=0;i<finalPassword.length;i++){
      if(upperCaseLetters.includes(finalPassword[i]) || symbols1.includes(finalPassword[i]) || numbers1.includes(finalPassword[i])){
        count++;
      }
    }
    if(finalPassword.length<6){
      setStrength("Minimum length is 6!")
    }
    else if(finalPassword.length>=6 && finalPassword.length<=8){
      setStrength("Weak");
    }
    else if(finalPassword.length>8 && finalPassword.length<=10){
      setStrength("Medium");
    }
    else{
      setStrength("Strong");
    }
    if(finalPassword.length>=6) setPassword(finalPassword);
    else {
      setPassword("0");
      alert("Minimum length is 6!");
    }
  };

  const handleCopy = () => {
  navigator.clipboard.writeText(password).then(() => {
    alert('Password copied to clipboard!');
  });
};

  return (
    <div className="App">
      <NavBar />
      <Home 
        password={password}
        setPassword={setPassword}
        length={length}
        setLength={setLength}
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setlowercase={setlowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
        strength={strength}
        setStrength={setStrength}
        generatePassword={generatePassword}
        handleCopy={handleCopy}
        />

        <Footer />
    </div>
  );
}

export default App;
