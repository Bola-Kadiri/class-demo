import Navbar from "./navbar/Navbar"
import CreateStudent from "./page/create-student/CreateStudent"
import ListStudent from "./page/list-student/ListStudent"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App =()=>{

  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/create' element={<CreateStudent/>}/>
        <Route path='list' element={<ListStudent/>}/>
      </Routes>
       
      </BrowserRouter>
        
    </div>
  )
}


export default App