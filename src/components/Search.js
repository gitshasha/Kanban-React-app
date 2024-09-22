import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import DragIssue from "./KanbanCompo/DragIssue";

// Sample data for issues


function Search({ issuesData, showSearch, setshowSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [issues] = useState(issuesData);

  // Filter issues based on search query
  const filteredItems = Object.values(issuesData).filter(
    (item) =>
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    showSearch && (
      <Flex
        position="absolute"
        top="0vh"
        left="0vh"
        h="100vh"
        w="100vw"
        bg="rgba(189, 193, 199, 0.6)"
        alignItems="center"
        justify="center"
      >
        <Flex
          className="p-4"
          h="40vh"
          w="40vw"
          zIndex="4"
          bg="#f5f4f7"
          flexDir="column"
          borderRadius="1vh"
        >
          {/* Search Input */}
          <Input
            h="6vh"
            w="20vw"
            bg="white"
            type="text"
            placeholder="Search issues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Display Filtered Issues */}
          <Flex className="mt-4" h="25vh" overflowY="scroll" flexDir="column">
            {filteredItems.length > 0 ? (
              filteredItems.map((issue) => (
                // <div key={issue.id} className="border-b p-2 mb-2">
                //   <h3 className="font-bold">{issue.status}</h3>
                //   <p>{issue.content}</p>
                // </div>
                <DragIssue
                  key={issue.id}
                  id={issue.id}
                  content={issue.content}
                />
              ))
            ) : (
              <p>No issues found</p>
            )}
          </Flex>
          <Button
            onClick={() => {
              setshowSearch(false);
              setSearchQuery("");
            }}
          >
            close
          </Button>
        </Flex>
      </Flex>
    )
  );
}

export default Search;
