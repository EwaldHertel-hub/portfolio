import React from 'react'

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="
                absolute 
                bottom-[-0.5rem] 
                left-20 
                transform 
                -translate-x-1/2 
                mb-2 
                hidden 
                group-hover:block 
                bg-white 
                text-black
                border 
                border-gray-800 
                
                text-xs 
                rounded 
                py-2 
                px-4 
                z-50 
                transition-opacity 
                duration-500 
                opacity-0 
                group-hover:opacity-100">
        {text}
      </div>
    </div>
  )
}

export default Tooltip