import React, { useState } from 'react'
import TabButton from './TabButton'

const Tab = ({onDayChange}) => {

  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const [selectedDay, setSelectedDay] = useState('Lunes')
  

  const handleClick = (dia) => {
    setSelectedDay(dia)
    onDayChange(dia)
  }

  return (
    <div className='container flex items-center justify-center bg-slate-200 mx-auto mb-2 rounded-md shadow-lg p-1'>
        <ul className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-zinc-700 font-semibold gap-1 '>
           {
            dias.map((dia, index) => (
              <TabButton key={index} dia={dia} onClick={() => handleClick(dia)} isSelected={selectedDay === dia}/>
            ))
           }
        </ul>
    </div>
  )
}

export default Tab