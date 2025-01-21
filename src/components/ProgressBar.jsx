import React from 'react'

const ProgressBar = ({ allGoal, initialValue, error }) => {
    return (
        <div className='relative pb-5'>
            <div className='bg-[#48A3001A] my-5 rounded-2xl w-full min-h-8'>
                <div style={{ width: `${(allGoal / initialValue.length) * 100}%` }} className={`flex flex-nowrap items-center bg-[#48A300] ${allGoal ? 'pl-3' : ''} rounded-2xl h-8 text-white text-xs text-nowrap transition-all overflow-hidden ease-in-out`}>
                    <span> {allGoal}/{initialValue.length} Completed</span>
                </div>
            </div>
            {error && <p className='top-11 absolute text-[#FF5151]'>Please set all the {initialValue.length} goals!</p>}
        </div>
    )
}

export default ProgressBar