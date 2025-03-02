import React, { useCallback, useEffect, useState } from 'react'
import FocusInput from './FocusInput';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataLocalStorage, taskCompleted, updateTask } from '../store/Tasklists';
import { useAllGoal } from '../hooks/AllGoal';
import { Statements } from '../Data/Statements';
import { para } from '../hooks/useStatements';
import ProgressBar from './ProgressBar';
import Add_RemoveTaskBar from './Add_RemoveTaskBar';
import Header from './Header';

const FocusContainer = () => {
    const initialValue = useSelector((state) => state.taskLists);
    const Dispatch = useDispatch();
    const allGoal = useAllGoal();

    useEffect(() => {
        Dispatch(saveDataLocalStorage())
    }, [initialValue, Dispatch])

    const ChangeHandler = useCallback((e) => {
        Dispatch(updateTask({
            inputId: e.target.id,
            inputValue: e.target.value
        }));
    }, [Dispatch]);

    const onclick = useCallback((e) => {
        Dispatch(taskCompleted({ inputId: e.target.id }))
    }, [initialValue, Dispatch]);

    return (
        <section className='bg-[#FBFBFB] shadow-2xl m-8 p-6 px-11 rounded-2xl w-full max-w-[660px]'>
            <Header />

            <ProgressBar
                allGoal={allGoal}
                para={para(Statements)}
                initialValue={initialValue} />

            <div className='flex flex-col gap-5 pt-8'>
                {initialValue.map((item, index) => (
                    <FocusInput
                        id={index}
                        value={item.name}
                        onclick={onclick}
                        Dispatch={Dispatch}
                        completed={initialValue[index].completedTask}
                        ChangeHandler={ChangeHandler}
                        key={index} />
                ))}
            </div>

            <Add_RemoveTaskBar
                initialValue={initialValue}
                Dispatch={Dispatch} />

            <div className='flex justify-center items-center mt-4'>
                <p className='font-bold text-lg'>“Move one step ahead, today!”</p>
            </div>

            <footer className='flex justify-center items-center mt-8'>
                <p className='py-5 text-[#858585] text-sm'>Made with ❤️ by Aditya Singh</p>
            </footer>
        </section>
    )
}

export default FocusContainer 