import React from 'react';

const home = ({ password,setPassword,length,setLength,uppercase,setUppercase,lowercase,setlowercase,numbers,setNumbers,symbols,setSymbols,strength,setStrength,generatePassword,handleCopy}) => {
  return (
    <div class="home">
        <div class="info">
            <h1>SafePassGenerator</h1>
            <p>Generate Ultra-Secure, Customized Passwords Effortlessly with Our Powerful Password Generator Tool</p>
        </div>
        <div class="opt">
            <div class="options">
                <label id="lngth">
                Length: 
                <input type="number" class="form-control" id="len" placeholder="Enter the value of length" value={length} onChange={(e)=> setLength(e.target.value)} />
                </label>
                <div class="opt1">
                    <label class="option"> 
                        <input type="checkbox" class="form-check-input" checked={uppercase} onChange={(e)=>setUppercase(!uppercase)} />
                        Upper Case
                    </label>
                    <label class="option">
                        <input type="checkbox" class="form-check-input" checked={lowercase} onChange={(e)=>setlowercase(!lowercase)} />
                        Lower Case
                    </label>
                    <label class="option">
                        <input type="checkbox" class="form-check-input" checked={numbers} onChange={(e)=>setNumbers(!numbers)} />
                        Numbers
                    </label>
                    <label class="option">
                        <input type="checkbox" class="form-check-input" checked={symbols} onChange={(e)=>setSymbols(!symbols)} />
                        Symbols
                    </label>
                </div>
            </div>

            <div class="header">
                <input type="text" placeholder="Random Password" id="read" value={password} class={(length!==0) && (uppercase!==false || lowercase!==false || numbers!==false || symbols!==false) && (password!=="" && password.length>=6)? "form-control":"non"} readOnly />
                <div class="gnrt">
                    <button class={(length!==0) && (uppercase!==false || lowercase!==false || numbers!==false || symbols!==false) ? "btn btn-outline-primary":"non"} onClick={generatePassword}>Generate Password</button>
                    {(password!=="" && password.length>=6) ? (<button class="btn btn-outline-primary" onClick={handleCopy}>Copy</button>):( <button class="non">None</button>) }
                </div>
                
            </div>

            <div class="foot">
                {password==="" ?
                (<h2>Enter the length and select the options</h2>) 
                : (<div class="strength">
                {(password==="0") ? <button class="non">ok</button> : <h2>Password Strength: {strength}</h2>}
                </div>)
            }
            </div>
        </div>
    </div>
  )
}

export default home