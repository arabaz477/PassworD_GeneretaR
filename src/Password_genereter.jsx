import React, { useState,useCallback,useEffect,useRef} from 'react'
import './Password_style.css'

function Password_genereter() {
  const [lenght,setLenght]=useState(8)
  const [number,setNumber]=useState(false);
  const[char,setChar]=useState(false);
  const[password,setPassword]=useState("")

  const passRef=useRef()

  const genereterPassword=useCallback(()=>{
let pass =""
let str=
"DFGHJKLMNBVCXZQWERTYUIOPasdfghjklpoiytrewqzxcvbnm"
if (number) str += "0123456789"
if (char) str +="1@#$%^&*()<>?/|}{+=-"

for(let i=1; i<=lenght; i++){
  let char=Math.floor(Math.random() * str.length+1)
  pass +=str.charAt(char)
}
setPassword(pass)
  },
  [lenght,number,char,setPassword]);

  const copyPassword=useCallback(()=>{passRef.current?.select();
  window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{genereterPassword()
  },
  [lenght,number,char,genereterPassword])

  return (
    <div>
  
      <div className='container'>
        <h1>Password_Generatar</h1>
    <input type="text"
    value={password} 
    readOnly
    ref={passRef}
    /><button onClick={copyPassword}>Copy</button>
    <div className="filter">
      <input type="range"
       min={6}
       max={100}
       value={lenght}
       onChange={(e)=>{ setLenght(e.target.value)}}/>
       <label>lenght:{lenght}</label>

        <input type="checkbox" 
        defaultChecked={number} onChange={()=>{setNumber((prev)=>!prev)}}
        />
        <label>Numbers</label>
      
        <input type="checkbox" defaultChecked={char} onChange={()=>{setChar((prev)=>!prev)}} />
        <label>characters</label>
   
    </div>
      </div>
    </div>
  )
}

export default Password_genereter