import { createAction,createReducer } from "@reduxjs/toolkit";
// import {v4 as id} from 'uuid'
// const Id=id()
// let lastId=Id.slice(0,10)
// console.log(Id)
// console.log(Id)
// console.log(Id)
let Id=101
//Action creators below


export const addUser=createAction("addUser")
export const deleteUser=createAction("deleteUser")
export const updateUser =createAction("updateUser")

//Reducers
const bugReducer=createReducer([],{
    addUser:(users,action)=>{
        users.push({
            id:Id++,
            name:action.payload.name,
            email:action.payload.email,
            contact:action.payload.contact
        })
    },
    deleteUser:(users,action)=>{
        const index= users.findIndex(user=>user.id===action.payload.id)
        console.log(index,"deleted index")
        users.splice(index,1)
    },
    updateUser:(users,action)=>{
        const index=users.findIndex(user=>user.id===action.payload.id)
        console.log(index,"indx")
        users[index].name=action.payload.name
        users[index].email=action.payload.email
        users[index].contact=action.payload.contact

    }
})
export default bugReducer