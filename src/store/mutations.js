const SUBMIT_USER=(state,payload)=>{
    state.username = payload.username,
    state.id = payload.id
}

const SET_CHATS=(state, payload) =>{
    state.chats = payload
}

const SET_CURRENT_CHAT= (state,payload)=>{
    state.selectedChat = payload
}

const ADD_CHAT= (state,payload)=>{
    state.chats.push(payload)
}

const REMOVE_CHAT =(state,payload)=>{
    let index  = state.chats.findIndex(element=>element._id == payload)
    state.chats.splice(index,1)
}

export default{
    SUBMIT_USER,
    SET_CHATS,
    SET_CURRENT_CHAT,
    ADD_CHAT,
    REMOVE_CHAT
}