import {getUser} from "./dom.js"


// getData()

const getData = async()=>{
    try {
        const{data}=await axios.get('https://640943f5d16b1f3ed6cdf00b.mockapi.io/Users')
        getUser(data)

    } catch (error) {
        
    }
}


const addUsers=async(newUser)=>{
    try {
        const {data} = await axios.post('https://640943f5d16b1f3ed6cdf00b.mockapi.io/Users',newUser)
    getData()
    } catch (error) {
        
    }
}


// delete functions
const deleteUser = async (id) => {
    try {
        const {data} = await axios.delete(`https://640943f5d16b1f3ed6cdf00b.mockapi.io/Users/${id}`)
        getData()
    } catch (error) {

    }
}
    

// edit functions
const editUser=async(id,user)=>{
    try {
        const {data}=await axios.put(`https://640943f5d16b1f3ed6cdf00b.mockapi.io/Users/${id}`,user)
    getData()
    } catch (error) {
        
    }
}

export {editUser,deleteUser,addUsers,getData}