import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Drop(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {

    color: isOver ? "green" : undefined,
    
  };
  console.log(props.children)

  return (
    <div ref={setNodeRef} style={style} >
      {props.children}
    </div>
  );
}
