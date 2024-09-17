import React from 'react'

const TabButton = ({ dia, onClick, isSelected }) => {
    return (
        <button className={`px-4 py-1 rounded font-sans text-sm ${isSelected ? 'bg-slate-100 text-zinc-800 shadow-md' : ' text-zinc-600'}`} onClick={onClick}>
            {dia}
        </button>
    )
}

export default TabButton