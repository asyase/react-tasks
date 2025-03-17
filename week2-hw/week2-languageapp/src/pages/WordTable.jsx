import React, { useState } from "react";
import "../App/App.css";

function WordTable({ words }) {
    let editingRow = 1; // always editing 2 row
  
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
  
              {/* Conditional rendering: if line == 1, show input */}
              <td>{editingRow === index ? <input defaultValue={word.word} /> : word.word}</td>
              <td>{editingRow === index ? <input defaultValue={word.translation} /> : word.translation}</td>
              <td>{editingRow === index ? <input defaultValue={word.example} /> : word.example}</td>
  
              <td>
                {editingRow === index ? (
                  <>
                    <button className="save-btn">✔ Save</button>
                    <button className="cancel-btn">✖ Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn">✏ Edit</button>
                    <button className="delete-btn">🗑 Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
export default WordTable;
