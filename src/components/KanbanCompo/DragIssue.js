import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import Issue from "../Issue";
import { Button, Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

const DragIssue = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  
  const [showIssue, setShowIssue] = useState(false);


  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    
    borderRadius: "1vh",
    cursor: "grab",
    
    
  };

  return (
    <Flex
      ref={setNodeRef}
      h="6vh"
      borderRadius="1vh"
      mb="1vh"
      w="100%"
      borderWidth="1px"
      padding="5px"
      alignItems="center"
      bg="white"
    >
      <Flex
        {...listeners}
        {...attributes}
        style={style}
        h="100%"
        w="90%"
        alignItems="center"
        borderRadius="1vh"
        bg="white"
      >
        <Text fontSize="14" fontWeight="500">
          {content}
        </Text>
      </Flex>
      <Text
        fontSize="small"
        fontWeight="500"
        onClick={() => {
          setShowIssue(true);
        }}
        cursor="default"
        _hover={{ color: "lightgrey" }}
        transition="0.1s"
      >
        Open
      </Text>
      <Issue id={id} setShowIssue={setShowIssue} showIssue={showIssue} />
    </Flex>
  );
};

export default DragIssue;
