import React, { useState } from "react";
import "../App/App.css";

function WordTable({ words }) {
  const [editingRow, setEditingRow] = useState(null); // Tracks which row is being edited
  const [formData, setFormData] = useState({});       // Stores current input values

  // Called when "Edit" button is clicked
  const handleEdit = (index) => {
    setEditingRow(index);               // set the editing row index
    setFormData({ ...words[index] });   // copy current word data into formData
  };

  // Called when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Called when "Cancel" button is clicked
  const handleCancel = () => {
    setEditingRow(null);  // exit edit mode
    setFormData({});      // clear form data
  };



  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Estonian Word</th>
          <th>Translation</th>
          <th>Example Sentence</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

            {/* If current row is being edited, show input fields */}
            {editingRow === index ? (
              <>
                <td>
                  <input
                    name="word"
                    value={formData.word}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    name="translation"
                    value={formData.translation}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    name="example"
                    value={formData.example}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <button className="save-btn">✔ Save</button>
                  <button className="cancel-btn" onClick={handleCancel}>✖ Cancel</button>
                </td>
              </>
            ) : (
              // If not being edited, show plain text
              <>
                <td>{word.word}</td>
                <td>{word.translation}</td>
                <td>{word.example}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>✏ Edit</button>
                  <button className="delete-btn">🗑 Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordTable;
