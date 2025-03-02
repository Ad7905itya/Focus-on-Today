import React from 'react'
import {
    clearAllTasks,
    increaseTasks,
} from '../store/Tasklists'
import { PiPlusCircleBold } from 'react-icons/pi'

const Add_RemoveTaskBar = ({ initialValue, Dispatch }) => {
    return (
        <>
            <div className='flex justify-center items-center gap-4 pt-6'>
                <span
                    onClick={() => Dispatch(increaseTasks())}
                    title={initialValue.length == 20 ? 'No more Task' : 'Add taskBar'}
                    className={initialValue.length == 20 ? 'text-[#49a3001a] cursor-not-allowed' : 'text-[#49a300a1] hover:text-[#49a300] cursor-pointer'}>
                    <PiPlusCircleBold size={46} />
                </span>
            </div>
            <p className='px-5 font-bold text-gray-500 text-right'>
                <span title='Clear All Task Content'
                    onClick={() => {
                        Dispatch(clearAllTasks());
                    }}
                    className='underline hover:no-underline cursor-pointer'>Clear All</span></p >
        </>
    )
}

export default Add_RemoveTaskBar