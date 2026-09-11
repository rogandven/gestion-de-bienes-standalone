import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";
import BodegaPicker from "./components/BodegaPicker.jsx";
import MaterialTable from "./components/MaterialTable.jsx";
import MaterialSearcher from "./components/MaterialSearcher.jsx";

import useGetCampuses from './hooks/useGetCampuses.jsx';
import useGetBodegas from "./hooks/useGetBodegas.jsx";
import useGetMateriales from "./hooks/useGetMateriales.jsx";
import { useState } from "react";
import { DEFAULT_CAMPUS_ID } from "./constants/campus.constants.js";


function App() {
  const campuses = useGetCampuses();
  const [bodegas, fetchBodegas] = useGetBodegas();
  const [materiales, fetchMateriales, resetMateriales] = useGetMateriales();

  const [selectedCampus, setSelectedCampus] = useState(DEFAULT_CAMPUS_ID);
  const [selectedBodega, setSelectedBodega] = useState(DEFAULT_CAMPUS_ID);

  const [query, setQuery] = useState("");

  return (
    <>
      <CampusPicker 
        campuses={campuses}
        selectedCampus={selectedCampus}
        setSelectedCampus={setSelectedCampus}
        fetchBodegas={fetchBodegas}
        setSelectedBodega={setSelectedBodega}
        resetMateriales={resetMateriales}
      />
      <BodegaPicker
        bodegas={bodegas}
        selectedBodega={selectedBodega}
        setSelectedBodega={setSelectedBodega}
        selectedCampus={selectedCampus}
        fetchMateriales={fetchMateriales}
      />
      <MaterialSearcher query={query} setQuery={setQuery} />
      <MaterialTable materiales={materiales} query={query} />
    </>
  )
}

export default App;
