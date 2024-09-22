import React from "react";
import { useDroppable } from "@dnd-kit/core"; // This would be a draggable issue item
import DragIssue from "./DragIssue";

const DropList = ({ id, title, items, children }) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  console.log(children);
  return (
    <div
      ref={setNodeRef}
      style={{
        margin: "8px",
        padding: "16px",
        border: "1px solid lightgrey",
        borderRadius: "4px",
        minWidth: "18vw",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f4f4f4", // Add background color for visibility
      }}
    >
      <h3>{title}</h3>
      {children.length ? children : <p>No items here</p>}{" "}
      {/* Fallback content */}
    </div>
  );
};
export default DropList;
