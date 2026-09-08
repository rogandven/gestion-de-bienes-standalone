import { useState } from 'react';
import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";

function App() {
  const [campuses, setCampuses] = useState([]);
  getCampus().then((campus) => {
    setCampuses(campus);
  });
  return (
    <CampusPicker campuses={campuses} />
  )
}

export default App;
