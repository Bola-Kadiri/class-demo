import { useCreateStudentMutation } from "../../feature/studentSlice"
import { useState } from "react"

const CreateStudent = () => {

  const [addStudent] = useCreateStudentMutation()

  const [studentData, setStudentData] = useState({first_name: "", last_name: "", gender: ""})


  const handleCreate =async(e)=>{
    e.preventDefault()
    if(studentData.first_name && studentData.last_name && studentData.gender){
      await addStudent(studentData)
    }

    setStudentData({first_name: "", last_name: "", gender: ""})

  }


  return (
    <div>
       <h1>THIS IS CREATE STUDENT COMPONENT</h1>

       <form onSubmit={handleCreate}>
        <div className="first-name">
            <input type="text" 
                   value={studentData.first_name}  
                   onChange={(e)=>setStudentData({...studentData, first_name: e.target.value})}
            />
        </div>
        <div className="last-name">
            <input type="text" 
                   value={studentData.last_name}
                   onChange={(e)=>setStudentData({...studentData, last_name: e.target.value})}
             />
        </div>
        <div className="gender">
            <input type="text" 
                   value={studentData.gender}
                   onChange={(e)=>setStudentData({...studentData, gender: e.target.value})}
            />
        </div>
        <button>Create Student</button>
       </form>
    </div>
  )
}

export default CreateStudent

