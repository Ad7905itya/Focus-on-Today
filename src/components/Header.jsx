import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center gap-5'>
            <h2 className='font-bold text-3xl'>Today</h2>
            <div
                style={{ backgroundImage: 'url("../Sun1.svg")' }}
                className='flex justify-center items-center bg-cover bg-no-repeat bg-center w-16 h-16 animate-spin-slow'>
                <img src="../vector.svg" className='animate-wiggle' alt="" />
            </div>
        </div>
    )
}

export default Header