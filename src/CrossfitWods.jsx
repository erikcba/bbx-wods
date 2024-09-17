import React from 'react'
import Tab from './components/ui/Tab'
import WodCard from './components/ui/WodCard'
import { useState } from 'react'



const CrossfitWods = () => {
  const weeklyWods = [
    {
      day: "Lunes",
      wod: {
        name: "",
        fuerza: "10-10-10-10-10\nFloating Dead Lift\nMax Stric Chin Ups / Jumping Pull Ups",
        type: "AMRAP En trios",
        wod: "30 Syncro Wall Ball Shot (12/9) (9/6)\n5 Syncro Burpees OTB (Los 3)\n30 Syncro Power Clean y Jerk (60/45) (45/30)\n5 Syncro Burpees OTB (Los 3)\n30 Syncro CH2Bar Pull Ups\n5 Syncro Burpees OTB (Los 3)\n30 Syncro Front Squat (60/45) (45/30)\n5 Syncro Burpees OTB (Los 3)",
        cap: "20'"
      }
    },
    {
      day: "Martes",
      wod: {
        name: "",
        type: "All WOD´s",
        fuerza: "",
        wod: "WOD A\nx tiempo\n2-4-6-8-10-12-12-10-8-6-4-2\nCH2Bar Pull Ups\nPush Ups\n\nTime CAP 12\n\nRest 5\n\nWOD B\nEMOM 12\nPar: 12 Power Snatch (45/30)\nImpar: 10 Burpees OTB",
        cap: "18'"
      }
    },
    {
      day: "Miércoles",
      wod: {
        name: "",
        type: "For time",
        fuerza: "10-10-10-10-10\nPush Press\n8 Vuelos Combinados\n8 Remo al Menton",
        wod: "5 Round x tiempo\n10 Press (50/35)\n\n4 Round x tiempo\n10 Push Press (60/45)\n10 Pull Ups\n\n3 Round x tiempo\n10 Push Jerk (70/55)\n8 Bar Muscle Up\n\nSin pausa entre wods",
        cap: "22'"
      }
    },
    {
      day: "Jueves",
      wod: {
        name: "",
        type: "x tiempo",
        fuerza: "10-10-10-10-10\nOH Squat\nMax Push Ups Unbroken",
        wod: "21-18-15-12-9-6-3\nSquat (50/30)\nBurpees OTB",
        cap: "17'"
      }
    },
    {
      day: "Viernes",
      wod: {
        name: "",
        type: "For time",
        fuerza: "10-10-10-10-10\nFloor Press\nMax Remo de pie supino\nMax Pull Ups Escapulares",
        wod: "Cash In: 50 Burpees to Plate\n5 rounds x tiempo\n21 Heavy American Swing (28/21)\n15 HSPU / HRPU\n9 Pistols",
        cap: "20'"
      }
    },
    {
      day: "Sábado",
      wod: {
        name: "",
        type: "For Time",
        fuerza: "10-10-10-10-10\nPush Jerk\nMax Remo en Anillas toma Supina",
        wod: "4 Round x tiempo\n60 DU\n5 Heavy Squat Clean (80/55)\n\n2 Round x tiempo\n21 Power Clean y Jerk (45/30)\n21 Box Jump Over\n\nTiempo Restante al CAP Buscar\n1 RM Squat Clean\n\nSin pausa entre wods",
        cap: "20'"
      }
    }
  ]


  const getWodForDay = (day) => {
    return weeklyWods.find(wod => wod.day === day)
  }
  const [selectedDay, setSelectedDay] = useState('Lunes')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 w-full ">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">WODs Semanales de CrossFit</h1>
        <p className="text-xl text-gray-300">Organiza tu semana</p>
      </header>

      <Tab onDayChange={setSelectedDay} />
      {selectedDay && (
        <WodCard
          fuerza={getWodForDay(selectedDay).wod.fuerza}
          cap={getWodForDay(selectedDay).wod.cap}
          type={getWodForDay(selectedDay).wod.type}
          wod={getWodForDay(selectedDay).wod.wod}
        />
      )}
    </div>
  )
}

export default CrossfitWods