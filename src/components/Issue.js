import React from "react";

export default function Issue({ showIssue, setShowIssue ,id}) {
 
  return (
    showIssue && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">{id}</h2>
          <button
            type="button"
            className="px-4 py-2 mr-2 bg-gray-300 rounded-md"
            onClick={() => setShowIssue(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}
