import React from 'react'

const WodCard = ({ fuerza, wod, type, cap }) => {
  return (
    <div className='container bg-gray-700 border border-gray-500 rounded-md shadow-md p-4 mx-auto flex flex-col justify-center items-center text-center'>
      <h2 className='text-2xl font-semibold mb-2'>{fuerza !== '' ? 'Fuerza' : ''}</h2>
      <p className='whitespace-pre-line mb-2'>{fuerza}</p>
      <div className='mb-2 flex gap-2'>
        <h2 className='text-2xl font-semibold '>Wod</h2>
        <h2 className='text-2xl font-semibold '>{cap}</h2>
      </div>
      <h3 className='whitespace-pre-line font-semibold mb-2'>{type}</h3>
      <p className='whitespace-pre-line'>{wod} </p>
    </div>
  )
}

export default WodCard