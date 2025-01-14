import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length , setlength] = useState(8)
  const [numallowed , setnumallowed] = useState(false)
  const [charallowed , setcharallowed] = useState(false)
  const [password , setpassword] = useState("")
  const passwordref = useRef(null)

  const paswordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let char = "!@#$%^&*_+"
    if(numallowed) str += num
    if(charallowed) str += char
    for(let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length)
      pass += str.charAt(random)
    }
    setpassword(pass)
  },[length,numallowed,charallowed,setpassword])

  const copypassword = useCallback( () => {
      passwordref.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect( () => {
    paswordgenerator()
  },[length,numallowed,charallowed,paswordgenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-white bg-gray-800'>
        <h1 className='text-4xl text-center m-4'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 mb-4 rounded-md text-black"
          placeholder='password'
          ref={passwordref}
          readOnly />
          <button className="outline-none bg-slate-700 text-white px-2 py-1 shrink-0" onClick={copypassword}>
            copy
          </button>
        </div>  
        <div className="flex text-sm gap-x-2"> 
          <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} className="cursor-pointer" value={length} onChange={(e) => {setlength(e.target.value)}}/>
          <label>length:{length}</label>  
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numallowed} id='numberInput' onChange={() => {
              setnumallowed( (prev) => !prev)
            }} />
            <label >numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charallowed} id='charInput' onChange={() => {
              setcharallowed( (prev) => !prev)
            }} />
            <label >character</label>
          </div>
        </div>
      </div>      

    </>
  )
}

export default App
