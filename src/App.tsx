import { useEffect, useState } from 'react'
import {MoveToLeft,MoveToRight} from './utils/horisontalMove'
import {MoveToDown,MoveToUp} from './utils/verticalMove'
import { Item } from './types'
function App() {
  const [map, setMap] = useState(JSON.stringify([
    [{value: 0},{value: 2},{value: 0},{value: 0}],
    [{value: 0},{value: 2},{value: 0},{value: 0}],
    [{value: 0},{value: 2},{value: 4},{value: 0}],
    [{value: 0},{value: 2},{value: 0},{value: 0}],
  ]))
  const [first, second, third, fourth]: Item[][] = JSON.parse(map)
  const play = (e: KeyboardEvent) =>{
    switch (e.code) {
      case "ArrowUp":
        setMap((prev)=>MoveToUp(prev))
        break
      case "ArrowDown":
        setMap((prev)=>MoveToDown(prev))
        break
      case "ArrowLeft":
        setMap((prev)=>MoveToLeft(prev))
        break
      case "ArrowRight":
        setMap((prev)=>MoveToRight(prev))
        break
    }
  }
  useEffect(()=>{
    window.addEventListener("keydown", play)
    return ()=>window.removeEventListener("keydown", play)
  }, [map])
  return (
    <div className='min-h-full flex flex-col justify-center items-center gap-2'>
        <div className='flex gap-2'>
             {first.map((item, index)=>
                <div className='size-20 bg-lime-400 relative text-4xl' key={index+1}>
                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{(item.value>0) && item.value}</span>
                </div>
             )}
        </div>
        <div className='flex gap-2'>
            {second.map((item, index)=>
                <div className='size-20 bg-lime-400 relative text-4xl' key={index+2}>
                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{(item.value>0) && item.value}</span>
                </div>
            )}
        </div>
        <div className='flex gap-2'>
            {third.map((item, index)=>
                <div className='size-20 bg-lime-400 relative text-4xl' key={index+3}>
                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{(item.value>0) && item.value}</span>
                </div>
            )}
        </div>
        <div className='flex gap-2'>
            {fourth.map((item, index)=>
                <div className='size-20 bg-lime-400 relative text-4xl' key={index+4}>
                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{(item.value>0) && item.value}</span>
                  </div>
            )}
        </div>
    </div>
  )
}

export default App
