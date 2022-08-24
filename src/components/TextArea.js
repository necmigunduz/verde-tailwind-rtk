import React from 'react'

const TextArea = ({ label, inputProps, onChange, value, onKeyDown }) => {
    return (
      <div className='flex flex-col'>
          <label className='mb-2 text-base text-gray-800 font-bold'>{label}</label>
          <textarea 
              className='bg-gray-200 px-6 border-8 outline-none rounded-3xl'
              {...inputProps}
              onChange={onChange}
              value={value}
              onKeyDown={onKeyDown}
          >
        
          </textarea>
      </div>
    )
  }

export default TextArea