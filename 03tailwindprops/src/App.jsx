import './App.css'
import Card from './components/card'

function App() {
  let myobj = {
    username:"ayush",
    age:23
  }
  return (
    <>
    {/* <h1 className="text-pretty bg-slate-900 rounded-3xl p-2">CHAI AUR TAILWIND</h1> */}
     <Card channel = " chai aur code " someobject = {myobj} />
     <Card some_array={[1,2,34,]} />
    </>
  )
}

export default App