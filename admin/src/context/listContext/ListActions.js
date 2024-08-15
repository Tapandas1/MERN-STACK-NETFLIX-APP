export const getListsStart=()=>({
    type:"GET_LISTS_START",
})

export const getListsSuccess=(lists)=>({
    type:"GET_LISTS_SUCCESS",
    payload:lists,
})

export const getListsFailure=()=>({
    type:"GET_LISTS_FAILURE",
})

export const createListStart=()=>({
    type:"CREATE_LISTS_START",
})

export const createListsSuccess=(lists)=>({
    type:"CREATE_LISTS_SUCCESS",
    payload:lists,
})

export const createListsFailure=()=>({
    type:"CREATE_LISTS_FAILURE",
})

export const updateListsStart=()=>({
    type:"UPDATE_LISTS_START",
})

export const updateListsSuccess=(lists)=>({
    type:"UPDATE_LISTS_SUCCESS",
    payload:lists,
})

export const updateListsFailure=()=>({
    type:"UPDATE_LISTS_FAILURE",
})

export const deleteListsStart=()=>({
    type:"DELETE_LISTS_START",
})

export const deleteListsSuccess=(id)=>({
    type:"DELETE_LISTS_SUCCESS",
    payload:id,
})

export const deleteListsFailure=()=>({
    type:"DELETE_LISTS_FAILURE",
})