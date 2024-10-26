import React, { useState } from "react";
import "../css/navbar.css";

const Navbar = ({ propsData, onClassSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (index, classId) => {
    setSelectedItem(index); // Track the selected item
    onClassSelect(classId); // Pass classId to parent
  };

  return (
    <div className="container">
      <div className="navbar-container">
        {propsData.map((item, index) => (
          <div
            className={`item ${selectedItem === index ? "selected" : ""}`}
            key={index}
            onClick={() => handleSelect(index, item.classId)} // Pass classId on selection
          >
            <div>Class: {item.className}</div>
            <div>Total subjects: {item.totalSubjects}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
