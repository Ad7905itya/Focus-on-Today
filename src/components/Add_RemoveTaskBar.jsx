import React, { useCallback } from 'react'
import {
    clearAllTasks,
    decreaseTasks,
    increaseTasks,
} from '../store/Tasklists'
import { PiPlusCircleBold } from 'react-icons/pi'
import { TbTrashFilled } from 'react-icons/tb'

const Add_RemoveTaskBar = ({ initialValue, Dispatch }) => {

    const onClearHandler = useCallback(() => {
        Dispatch(clearAllTasks());
    }, [Dispatch])
    return (
        <>
            <div className='flex justify-center items-center gap-4 pt-6'>
                <span
                    onClick={() => Dispatch(increaseTasks())}
                    title={initialValue.length == 10 ? 'No more Task' : 'Add taskBar'}
                    className={initialValue.length == 10 ? 'text-[#49a3001a] cursor-not-allowed' : 'text-[#49a300a1] hover:text-[#49a300] cursor-pointer'}>
                    <PiPlusCircleBold size={46} />
                </span>
                {initialValue.length > 3 && <span
                    onClick={() => Dispatch(decreaseTasks())}
                    title='remove TaskBar'
                    className='text-red-400 cursor-pointer'>
                    <TbTrashFilled size={32} />
                </span>}
            </div>
            <p onClick={onClearHandler} title='Clear All Task Content' className='text-right px-5 font-bold text-gray-500 underline hover:no-underline cursor-pointer'>Clear All</p>
        </>
    )
}

export default Add_RemoveTaskBar