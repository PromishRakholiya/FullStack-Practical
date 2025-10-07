import React, { useState, useEffect, memo } from 'react';
import './App.css';

const TaskItem = ({
  task,
  editingTaskId,
  editingText,
  handleEditTask,
  handleDeleteTask,
  handleChangeStatus,
  handleSaveEdit,
  handleCancelEdit,
  setEditingText
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-purple-20 p-4 rounded-lg shadow-sm text-purple-900 text-lg sm:text-base gap-3">
      {editingTaskId === task.id ? (
        <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 w-full">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            className="flex-1 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
          />
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={() => handleSaveEdit(task.id)}
              className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="flex-1 text-left break-words pr-2">{task.text}</span>
          <div className="flex items-center gap-2 flex-wrap justify-end">

            <button
              onClick={() => handleEditTask(task.id, task.text)}
              className="p-2 text-purple-700 hover:text-purple-900 transition-transform hover:scale-110"
              title="Edit Task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-7.586 7.586a1 1 0 00-1.414 1.414L10.586 19H17v-6.414l-7.586-7.586z" />
              </svg>
            </button>

            <button
              onClick={() => handleDeleteTask(task.id)}
              className="p-2 text-red-500 hover:text-red-700 transition-transform hover:scale-110"
              title="Delete Task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
              </svg>
            </button>

            <select
              value={task.status}
              onChange={(e) => handleChangeStatus(task.id, e.target.value)}
              className="p-2 border border-purple-300 rounded-md bg-white text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
