//import React, { useRef } from 'react'
import React, { useState } from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const TaskCard = () => {

    // const buttonRef = useRef();
    // const buttonAnimation = (e) => {

    //     const button = buttonRef.current;
    //     button.addEventListener('click', e => {
    //         if (!button.classList.contains('delete')) {
    //             button.classList.add('delete');
    //             setTimeout(() => button.classList.remove('delete'), 3200);

    //         }
    //         e.preventDefault();
    //     })
    // };

    const data = useSelector(state => state.handleDataReducer) // tittle + inputField 
    const dispatch = useDispatch();
    const { removeData, switchComplete, editSave, CheckAll } = bindActionCreators(actionCreators, dispatch)
    const [onEdit, setOnEdit] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState('');
    const [editValue, setEditValue] = useState('');


    const handleOnEdit = (id, taskText) => {
        setOnEdit(true)
        setSelectedIndex(id)
        setEditValue(taskText);
    }
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const saveEditHandler = (e, id) => {
        e.preventDefault();
        setOnEdit(false);
        editSave(id, editValue);
    }


    const countTodo = (getItem) => {
        let count = 0
        getItem.inputFields.map((values) => {
            if (values.complete === false) {
                count = count + 1;
            }
            return values



        })
        return count;


    }
    const [isCheck,setIsCheck] = useState(false);
    

    const handleOnCheckBox =(e,uid)=>{
        e.preventDefault();
        data.forEach((todos)=>{
            if(todos.uid === uid && todos.allComplete){
                
               return(setIsCheck(true))
            }
            else{
                return(setIsCheck(false))
            }
        })
        
    }

    
    
    return (
        <>
            <div className="container" style={{ maxWidth: ('774px') }}>

                {
                    data.map((item) => {

                        return (

                            <div key={item.uid} className="container jss1" style={{ maxWidth: ('474px') }}>
                                <div className='row' style={{ display: ('flex') }}>
                                    <div className='col'>
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div>
                                        {
                                            item.inputFields.map((task, index) => {

                                                if (onEdit && task.id === selectedIndex) {

                                                    return (

                                                        <ul key={index}>
                                                            <li>
                                                                <input value={capitalize(editValue)} onChange={(e) => setEditValue(e.target.value)} type="text" name="editValue" id="editValue" />
                                                                <button onClick={(e) => saveEditHandler(e, task.id)} disabled={task.complete} className="button-88-save" type="button"><i className="fa-regular fa-floppy-disk"></i></button>
                                                            </li>
                                                        </ul>
                                                    )
                                                } else {
                                                    return (
                                                        <ul key={index}>
                                                            <li>
                                                                <label htmlFor={task.id} className={task.complete ? "active" : ""} >
                                                                    <input type={'checkbox'} checked={task.complete} onChange={() => switchComplete(task.id,item.uid)} id={task.id} /> {task.taskText}
                                                                </label>
                                                                <button onClick={(e) => { e.preventDefault(); handleOnEdit(task.id, task.taskText) }} disabled={task.complete} className="button-88" type="button"><i className="fa-regular fa-pen-to-square"></i></button>
                                                            </li>
                                                        </ul>
                                                    )
                                                }

                                            })
                                        }
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label htmlFor={item.uid}>
                                            
                                                <input type='checkbox' checked={isCheck} onChange={(e)=>handleOnCheckBox(e,item.uid)} name='all' id={item.uid}
                                                    onClick={(e) => { e.preventDefault();  CheckAll(item.uid) }} />
                                                All
                                            </label>
                                        </div>
                                        <div className='col'>
                                           
                                            <p>You have {countTodo(item)} to do</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <button id='delete' className="button-del" onClick={(e) => { e.preventDefault(); removeData(item.uid) }}>
                                            <div className="trash">
                                                <div className="top">
                                                    <div className="paper"></div>
                                                </div>
                                                <div className="box"></div>
                                                <div className="check">
                                                    <svg viewBox="0 0 8 6">
                                                        <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TaskCard


