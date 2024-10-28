let initialState = {
    users: JSON.parse(localStorage.getItem("users")) || []
}
const crudReducer= ( state = initialState , action)=> {
    switch(action.type) {
        case 'add' :
            let oldData = [...state.users , action.payload]
            localStorage.setItem('users', JSON.stringify(oldData))
            return{
                ...state,
                users: oldData
            }
        case 'delete' :
            let deleteData = state.users.filter(val => val.id != action.payload)
            localStorage.setItem("users",JSON.stringify(deleteData))
            return{
                ...state,
                users: deleteData
            }    
        case 'edit' :
            let editData = state.users.map((val)=>{
                if(val.id == action.payload.id){
                    val.name =action.payload.name;
                    val.phone = action.payload.phone
                }
                return val
            })
            localStorage.setItem("users",JSON.stringify(editData))
            return{
                ...state,
                users:editData
            }
            default :
            return state
    } 
}
export default crudReducer