import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Tiles from "../components/Tiles";
import { classes } from "../data/classesData";
import { subjectData } from "../data/subjectData";
import "../css/classes.css";

const Classes = () => {
  const [selectedClassId, setSelectedClassId] = useState(null); // State to track selected class

  // Function to handle class selection
  const handleClassSelect = (classId) => {
    setSelectedClassId(classId);
  };

  // Filter the subject data based on the selected classId
  const filteredSubjectData = selectedClassId
    ? subjectData.filter((subject) => subject.classId === selectedClassId)
    : []; // Show all if no class is selected

  return (
    <div className="container">
      <div className="navbar-container">
        <Navbar propsData={classes} onClassSelect={handleClassSelect} />{" "}
        {/* Pass the selection handler */}
      </div>
      <div className="tiles-container">
        <Tiles propsData={filteredSubjectData} />{" "}
        {/* Pass filtered data to Tiles */}
      </div>
    </div>
  );
};
export default Classes;
