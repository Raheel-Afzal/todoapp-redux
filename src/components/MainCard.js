import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

export default function MainCard() {
    const [title, setTittle] = useState('');

    const dispatch = useDispatch();
    const { addField, removeField, handleChangeInput,addData,resetInputFields } = bindActionCreators(actionCreators, dispatch)
    const inputFields = useSelector(state => state.addFieldReducer)





    return (
        <>
            <div className="container" style={{ maxWidth: ('774px') }}>
                <div className="sticky-top header" >
                    <h1 className='tittle'>toDo App</h1>
                </div>
                <div className="container jss1" style={{ maxWidth: ('474px') }}>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        addData(title,inputFields)
                        setTittle("")
                        resetInputFields();
                        
                        
                    }}>
                        <div className='row' style={{ display: ('flex') }}>
                            <div className='col'>
                                <input value={title} onChange={(event) => setTittle(event.target.value)} type="text" className=" my-2 p-2 tittle-input form-input" placeholder='Enter Title' required/>
                            </div>
                        </div>

                        {
                            inputFields.map((fields,index) => {
                                return (
                                  
                                        <div key={fields.id} className='row' style={{ display: ('flex') }}>
                                            <div className='col-8'>
                                                <input type="text" value={fields.taskText} onChange={(event) => handleChangeInput(fields.id, event)} className="form-control my-2 p-2 " placeholder='Enter toDo' name='taskText' required />
                                            </div>
                                            
                                            <div className='col-4 ' style={{ display: ('flex') }}>
                                                {(Object.keys(inputFields).length-1) === index &&(<button onClick={addField} type='button' className="btn btn-primary px-3 py-2 my-2 mx-1" ><i className="fa-solid fa-plus"></i></button>)}
                                                {(Object.keys(inputFields).length) !== 1 &&(<button onClick={() => removeField(fields.id)} type='button' className="btn btn-primary px-3 py-2 my-2 mx-1" ><i className="fa-solid fa-minus"></i></button>)}
                                            </div>
                                        </div>
                                    
                                )
                            })
                        }
                        <button type='submit' className="add-btn">Add to List</button>
                    </form>
                   
                </div>
            </div>
        </>
    )
}
