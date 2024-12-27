import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='mt-10 h-[55%] overflow-x-auto  gap-5 flex flex-nowrap items-center justify-start py-5 w-full '>
      {data.tasks.map((elem, id)=>{

          if(elem.active){
            return <AcceptTask key={id} data={elem} id={id} />
          }
          if(elem.newTask){
            return <NewTask key={id} data={elem} id={id} />
          }
          if(elem.completed){
            return <CompleteTask key={id} data={elem} id={id} />
          }
          if(elem.failed){
            return <FailedTask key={id} data={elem} id={id} />
          }

      })}
    </div>
  )
}

export default TaskList
