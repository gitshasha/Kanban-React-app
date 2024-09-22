import { useState } from "react";

export const Modal = ({ showModal, setShowModal, addIssue }) => {
  const [formData, setFormData] = useState({
    title: "",
    status: "ToDo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addIssue(formData);
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Create New Issue</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Status</label>
              <select
                className="w-full p-2 border rounded-md"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="ToDo">To Do</option>
                <option value="In_Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 mr-2 bg-gray-300 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
