import { useState } from "react"
import { useRegistrationMutation } from "../../components/rtk/apiClise/api"

const useSignUp = () =>{
    const [signUp] = useRegistrationMutation()
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [error,setError]= useState(null)

    const handleChange = (e) =>{
       const {name,value} = e.target 
       setFormData({
         ...formData,
         [name]:value
       })
    }

    const HandleSignup = async (e) =>{
        e.preventDefault()

        const response = await signUp(formData).unwrap()
         console.log(response.data)
         if(response.status === 403){
            setError(response.data?.data?.message || "Forbidden request")
         }
        alert(response.message)
    }


    return {handleChange,HandleSignup,formData,error}

}

export default useSignUp