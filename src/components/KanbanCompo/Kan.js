import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

import DropList from "./DropList";
import DragIssue from "./DragIssue";
import { Modal } from "../Modal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import Nav from "../Nav";
import Issue from "../Issue";

const IssueStatus = {
  TODO: "ToDo",
  Selected: "Selected",
  IN_PROGRESS: "In_Progress",
  DONE: "Done",
};

const Kan = () => {
  const [items, setItems] = useState({
    "item-1": { id: "item-1", content: "Issue 1", status: "ToDo" },
    "item-2": { id: "item-2", content: "Issue 2", status: "In_Progress" },
    "item-3": { id: "item-3", content: "Issue 3", status: "Done" },
    "item-4": { id: "item-4", content: "Issue 4", status: "ToDo" },
  });

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const activeItem = items[active.id];
    if (activeItem.status !== over.id) {
      setItems((prevItems) => ({
        ...prevItems,
        [active.id]: { ...activeItem, status: over.id },
      }));
    }
  };
  const [showModal, setShowModal] = useState(false);
  
  const [showIssue, setShowIssue] = useState(false);

  const addIssue = (newIssue) => {
    const newId = `item-${Object.keys(items).length + 1}`;
    setItems({
      ...items,
      [newId]: { id: newId, content: newIssue.title, status: newIssue.status },
    });
    console.log({
      id: newId,
      content: newIssue.title,
      status: newIssue.status,
    });
  };
  const deleteIssue = (id) => {
    const updatedItems = { ...items };
    delete updatedItems[id];
    setItems(updatedItems);
    console.log("dele");
  };

  return (
    <Flex h="100vh" w="100vw">
      <Nav setShowModal={setShowModal} issuesData={items} />

      <Flex h="100vh" w="80vw" padding="2vh" flexDir="column">
        <Flex h="100vh" w="7vw" flexDir="column">
          <Flex h="10vh" w="70vw" flexDir="column">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" fontSize="14">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#" fontSize="14">
                  Spotlight
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" fontSize="14">
                  Kanban Board
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text fontSize="2xl">Kanaban Board</Text>
          </Flex>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {Object.values(IssueStatus).map((status) => {
                const filteredItems = Object.values(items)
                  .filter((item) => item.status === status)
                  .map((item) => item.id);

                return (
                  <DropList
                    key={status}
                    id={status}
                    title={status}
                    items={filteredItems}
                  >
                    {filteredItems.map((id) => (
                     
                        <DragIssue
                          key={id}
                          id={id}
                          deleteIssue={deleteIssue}
                          content={items[id].content}
                        />
                    ))}
                  </DropList>
                );
              })}
            </div>
          </DndContext>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Create Issue
          </button>
        
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            addIssue={addIssue}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Kan;
