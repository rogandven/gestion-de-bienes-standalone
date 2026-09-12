import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";
import BodegaPicker from "./components/BodegaPicker.jsx";
import MaterialTable from "./components/MaterialTable.jsx";
import MaterialSearcher from "./components/MaterialSearcher.jsx";

import useGetCampuses from './hooks/useGetCampuses.jsx';
import useGetBodegas from "./hooks/useGetBodegas.jsx";
import useGetMateriales from "./hooks/useGetMateriales.jsx";
import useChangePage from "./hooks/useChangePage.jsx";
import { useState } from "react";
import { DEFAULT_CAMPUS_ID } from "./constants/campus.constants.js";

import { filterMateriales } from "./utils/material.utils.js";

import PaginationHelper from "./classes/PaginationHelper.js";


function App() {
  const campuses = useGetCampuses();
  const [bodegas, fetchBodegas] = useGetBodegas();
  const [materiales, fetchMateriales, resetMateriales] = useGetMateriales();
  const [currentPage, nextPage, previousPage] = useChangePage();
  const [selectedCampus, setSelectedCampus] = useState(DEFAULT_CAMPUS_ID);
  const [selectedBodega, setSelectedBodega] = useState(DEFAULT_CAMPUS_ID);
  const [query, setQuery] = useState("");

  const newMateriales = filterMateriales(materiales, query);
  const paginationHelper = new PaginationHelper(newMateriales, 10, currentPage);
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
      <MaterialTable materiales={newMateriales} query={query} paginationHelper={paginationHelper} />
    </>
  )
}

export default App;
