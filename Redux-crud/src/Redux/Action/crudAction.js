export const AddUsers = (data) => {

    return{
        type : "add" ,
        payload : data

    }
}
export const DeleteUsers = (id) => {

    return{
        type : "delete",
        payload : id
    }
}

export const EditUser = (data) => {
    return {
        type : "edit",
        payload : data
    }
}