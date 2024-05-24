import { useState, useCallback, useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("");

 //password generator 
 //useCallback --> jis jis pe dependancy hai apki aur possible run hoga , us method ko aap optimize krdo , for optimization,bs utna part change
 //hoga tree me jitna part new tree me change hua hai..... data cache me store hota jaye

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (numallowed) str += "1234567890"
    if (charallowed) str += "~!@#$%^&*{[+_-;:.,<>?/="
    for (let i = 1; i <= length ; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    console.log(pass)
    setPassword(pass)

  }, [length, numallowed, charallowed, setPassword]);//setpasswod here for optimization

  //useRef hook 

  const passwordRef = useRef(null)

  // function to copy the password to thw clip board 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect --> dependancies me kuch bhi ched chad ho re run krdo function ko ...
  useEffect(()=>{
    passwordGenerator();
  },[length,numallowed,charallowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-6 py-7  bg-gray-800">
        <h1 className="text-white text-center text-2xl relative bottom-2"> PASSWORD GENERATOR </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-800 text-white px-3 py-1 shrink-0' >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value)
            }} />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numallowed} id='numberInput' onChange={() => {
              setNumallowed((prev) => !prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charallowed} id='charInput' onChange={() => {
              setCharallowed((prev) => !prev)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
