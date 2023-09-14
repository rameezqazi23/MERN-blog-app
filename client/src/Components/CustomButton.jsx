import React from 'react'

const CustomButton = ({title}) => {
    return (
        <button className='bg-[#2f2f2f] text-gray-400 px-6 py-[6px] rounded-xl text-[16px] font-semibold leading-[26px]'>
            {title}
        </button>
    )
}

export default CustomButton
