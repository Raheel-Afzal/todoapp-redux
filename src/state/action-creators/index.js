export const addField = ()=>{
    return(dispatch)=>{
        dispatch({
            type: 'addField',
           
        })
    }
}
export const removeField = (id,event)=>{
    

    return(dispatch)=>{
        dispatch({
            type: 'removeField',
            payload: id
           
        })
    }
}

export const handleChangeInput=(id, event)=>{
    
    return(dispatch)=>{
        dispatch({
            type: 'handleChangeInput',
            payload: {
                id:id,
                event:event
            }
        })
    }
    
}

export const addData  = (title,inputFields)=>{
    
     return (dispatch)=>{
        dispatch({
            type: 'addData',
            payload:{
                title:title,
                inputFields:inputFields
            
            }
        })
     }
}

export const resetInputFields = ()=>{
    return(dispatch)=>{
        dispatch({
            type:'resetInputFields'
        })
    }
}

export const removeData = (uid)=>{
    return(dispatch)=>{
        dispatch({
            type:'removeData',
            payload:uid
        })
    }
}
export const switchComplete = (id,uid)=>{
    
    return(dispatch)=>{
        dispatch({
            type: 'switchComplete',
            payload:{
                id: id,
                uid: uid
            }
        })
    }
}
export const editSave = (id,editValue)=>{
    
    return(dispatch)=>{
        dispatch({
            type: 'editSave',
            payload:{
                id:id,
                editValue:editValue
                
            }
        })
    }
}
export const CheckAll = (uid)=>{
    
    return(dispatch)=>{
        dispatch({
            type: 'CheckAll',
            payload: uid 
                      
        })
    }
}


