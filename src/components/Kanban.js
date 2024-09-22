
import { Drop } from "./KanbanCompo/Drop";
import { Drag } from "./KanbanCompo/Drag";

import React, { useState } from 'react';
import {
  DndContext,
 
} from '@dnd-kit/core';

// Initial data for columns and tasks
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the trash' },
    'task-2': { id: 'task-2', content: 'Watch a movie' },
    'task-3': { id: 'task-3', content: 'Complete homework' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const Kanban = () => {
  const [data, setData] = useState(initialData);
 const [isDropped, setIsDropped] = useState(false);

 const [isDropped1, setIsDropped1] = useState(false);
  const draggableMarkup = <Drag id="draggable">Drag me</Drag>;
 const draggableMarkup1 = <Drag id="draggable1">Drag meddd</Drag>;
 return (
   <div>
     <DndContext onDragEnd={handleDragEnd}>
       {!isDropped ? draggableMarkup : null}
       <Drop id="drop-zone">{isDropped ? draggableMarkup : "Drop here"}</Drop>
     </DndContext>
     <DndContext onDragEnd={handleDragEnd1}>
       {!isDropped1 ? draggableMarkup1 : null}
       <Drop id="drop-zone1">{isDropped1 ? draggableMarkup1 : "Drop here"}</Drop>
     </DndContext>
   </div>
 );

 function handleDragEnd(event) {
   if (event.over && event.over.id === "drop-zone") {
     setIsDropped(true);
   }
 }
  function handleDragEnd1(event) {
    if (event.over && event.over.id === "drop-zone1") {
      setIsDropped1(true);
    }
  }
};

export default Kanban;
