
import { v4 as uuidv4 } from 'uuid';

const reducer = (state = ([]), action) => {

    if (action.type === 'addData') {

        let dataSet = {
            uid: uuidv4(),
            title: action.payload.title,
            allComplete:false,
            inputFields: action.payload.inputFields,
        }
        return state = [...state, dataSet]




    }
    else if (action.type === 'removeData') {

        let filterData = [];          //new Array without completed task will store here
        const copyState = [...state];

        copyState.forEach((values) => {
            if (values.uid === action.payload) {         //data will Filter on specific id
                values.inputFields.forEach((task, index, inputFields) => {
                    if (task.complete === false) {
                        return (
                            filterData = [...filterData, task]         //data transfering to new Array 
                        )
                    }
                })
            }
        })
        const newState = [...state];
        newState.forEach((values, index, newState) => {
            return (values.uid === action.payload ? values.inputFields = filterData : values);

        })

        return state = newState

    }
    
    else if (action.type === 'editSave') {


        state.map((values) => {
            values.inputFields.map((task) => {
                if (task.id === action.payload.id) {
                    return (task.taskText = action.payload.editValue)
                }
                return task

            })
            return values
        })

        return state

    }
    else if (action.type === 'switchComplete') {
        const newdata = [...state]
        newdata.map((todos) => {
            return (
                todos.inputFields.map((task) => {
                    if (task.id === action.payload.id) {
                        task.complete = !task.complete
                    }
                    return task
                })
            )
        })
        
        let isCheckAll = true;

        newdata.forEach((todos) => {
            if (todos.uid === action.payload.uid) {                
                todos.inputFields.map((task) => {
                    if (task.complete === false) {
                        isCheckAll = false
                    }
                    return ( isCheckAll ? todos.allComplete = true : todos.allComplete = false )                  
                })
            }
        })
        
        return state = newdata;
    }
    else if (action.type === 'CheckAll') {

        let isCheckAll = true;
        const newdata = [...state]
        newdata.forEach((todos) => {
            if (todos.uid === action.payload) {
                todos.inputFields.forEach((task) => {
                    if (task.complete === false) {
                        isCheckAll = false
                    }
                })
                return (
                    todos.inputFields.map((task) => {
                        if(isCheckAll === true){
                            todos.allComplete = false
                            return task.complete = false 
                        }
                        else
                        {   
                            todos.allComplete = true
                            return task.complete = true 
                            
                        }
                       // return (isCheckAll ? task.complete = false : task.complete = true)
                    })
                )
            }
        })
        
        return state = newdata;

    }
    else
        return state
}
export default reducer;