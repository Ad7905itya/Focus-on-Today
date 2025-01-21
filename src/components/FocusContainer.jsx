import React, { useCallback, useEffect, useState } from 'react'
import FocusInput from './FocusInput';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataLocalStorage, taskCompleted, updateTask } from '../store/Tasklists';
import { useAllGoal } from '../hooks/AllGoal';
import { Statements } from '../Data/Statements';
import { para } from '../hooks/useStatements';
import ProgressBar from './ProgressBar';
import Add_RemoveTaskBar from './Add_RemoveTaskBar';

const FocusContainer = () => {
    const initialValue = useSelector((state) => state.taskLists);
    const [error, setError] = useState(false);
    const Dispatch = useDispatch();
    const allGoal = useAllGoal();

    useEffect(() => {
        Dispatch(saveDataLocalStorage())
    }, [])

    const ChangeHandler = useCallback((e) => {
        Dispatch(updateTask({
            inputId: e.target.id,
            inputValue: e.target.value
        }));
        Dispatch(saveDataLocalStorage());
    }, [Dispatch]);

    const onclick = useCallback((e) => {
        const allInputs = Object.values(initialValue).every((goal) => goal.name);
        if (allInputs) {
            Dispatch(taskCompleted({ inputId: e.target.id }))
        }

        if (!allInputs) {
            setError(true)
        } else {
            setError(false)
        }

        Dispatch(saveDataLocalStorage());
    }, [initialValue, Dispatch]);


    const onInputHandler = (e) => {
        if (initialValue[e.target.id].name !== '') {
            setError(false)
        } else {
            setError(false)
        }
    }

    return (
        <section className='bg-[#FBFBFB] shadow-2xl m-8 px-11 p-6 rounded-2xl w-full max-w-[660px]'>
            <div className='flex items-center gap-5'>
                <h2 className='font-bold text-3xl'>Today</h2>
                <div style={{ backgroundImage: 'url("../Sun1.svg")' }} className='flex justify-center items-center bg-cover bg-no-repeat bg-center w-16 h-16 animate-spin-slow'>
                    <img src="../vector.svg" className='animate-wiggle' alt="" />
                </div>
            </div>

            <p className='pt-10 text-[#858585]'>{para(Statements)}</p>
            <ProgressBar allGoal={allGoal} initialValue={initialValue} error={error} />

            <div className='flex flex-col gap-5 pt-8'>
                {initialValue.map((item, index) => (
                    <FocusInput
                        id={index}
                        value={item.name}
                        onclick={onclick}
                        completed={initialValue[index].completedTask}
                        ChangeHandler={ChangeHandler}
                        onInputHandler={onInputHandler}
                        key={index} />
                ))}
            </div>

            <Add_RemoveTaskBar initialValue={initialValue} />

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