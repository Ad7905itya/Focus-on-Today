import React from 'react'
import { CgClose } from 'react-icons/cg'
import { DecreaseTaskIndividual } from '../store/Tasklists'

const FocusInput = ({
    completed,
    id,
    value,
    ChangeHandler,
    Dispatch,
    onclick }) => {
    return (
        <div className='flex items-center bg-white border-[#0000001A] border-2 rounded-2xl h-16 overflow-hidden'>
            <div
                id={id}
                className={`${completed ? '' : 'border-[#61481C4D] border-2'} bg-cover bg-center rounded-full w-8 h-8 flex-shrink-0 ml-5 cursor-pointer`}
                style={{ backgroundImage: `url(${completed ? "../check.svg" : ''})` }}
                onClick={onclick}></div>
            <input
                className={`flex-grow pl-3 w-full h-full font-medium outline-none ${completed ? 'line-through text-[#48A300]' : ''}`}
                type="text"
                name="task"
                id={id}
                value={value}
                onChange={ChangeHandler}
                placeholder='Add new goal...' />

            <span
                onClick={() => Dispatch(DecreaseTaskIndividual({ inputId: id }))}
                className='relative flex-shrink-0 mr-5 cursor-pointer'>
                <CgClose size={24} />
            </span>
        </div>
    )
}

export default FocusInput