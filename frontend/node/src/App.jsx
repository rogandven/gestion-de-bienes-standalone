import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";
import BodegaPicker from "./components/BodegaPicker.jsx";
import MaterialTable from "./components/MaterialTable.jsx";

import useGetCampuses from './hooks/useGetCampuses.jsx';
import useGetBodegas from "./hooks/useGetBodegas.jsx";
import useGetMateriales from "./hooks/useGetMateriales.jsx";
import { useState } from "react";


function App() {
  const campuses = useGetCampuses();
  const [bodegas, fetchBodegas] = useGetBodegas();
  const [materiales, fetchMateriales] = useGetMateriales();

  const [selectedCampus, setSelectedCampus] = useState(0);
  const [selectedBodega, setSelectedBodega] = useState(0);

  return (
    <>
      <CampusPicker 
        campuses={campuses} 
        fetchBodegas={fetchBodegas} 
        selectedCampus={selectedCampus}
        setSelectedCampus={setSelectedCampus}
        setSelectedBodega={setSelectedBodega}
        resetMateriales={ () => {fetchMateriales(null)} }
      />
      <BodegaPicker 
        bodegas={bodegas} 
        fetchMateriales={fetchMateriales}
        selectedBodega={selectedBodega}
        setSelectedBodega={setSelectedBodega}
      />
      <MaterialTable materiales={materiales} />
    </>
  )
}

export default App;
