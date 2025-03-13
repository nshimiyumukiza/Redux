
import { useEffect, useState } from "react"
import { useGetUserQuery } from "../../components/rtk/apiClise/api"

const useGetUser = () =>{
    const [Users,setUsers] = useState(null)

    const {data}=useGetUserQuery()

    

    useEffect(()=>{
        if(data){
            setUsers(data)
        }
    },[data])

    return {Users}

}
export default useGetUser