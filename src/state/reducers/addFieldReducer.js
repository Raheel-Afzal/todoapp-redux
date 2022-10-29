import { v4 as uuidv4 } from 'uuid';

const initialState = [{ id: uuidv4(), taskText: '' ,complete:false}]
const reducer = (state = initialState, action) => {
    if (action.type === 'addField'){                          //ADD FIELD
        return [...state,{ id: uuidv4(), taskText: '',complete:false }]
    }
    else if(action.type === 'removeField'){                          //Remove Field
        const values = [...state];
        values.splice(
            values.findIndex((value)=> value.id === action.payload),1
        )
        return state=values
    }
    else if(action.type === 'handleChangeInput'){                          //HandleChangeInput
        
        
        const newState = state.map((i) => {

            if (action.payload.id === i.id) {
                i.taskText = action.payload.event.target.value;
            }
            return i;
        })
        
        return state = newState;
        
    }
    else if(action.type === 'resetInputFields'){
        
        return state=[{ id: uuidv4(), taskText: '',complete:false }];
    }
    else{
        return state;
    }

}
export default reducer;