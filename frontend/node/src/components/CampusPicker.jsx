import { useState } from "react";
import { DEFAULT_CAMPUS_ID } from "../constants/campus.constants";
import { DEBUG_PRINTS } from "../constants/config.constants";
import { DEFAULT_BODEGA_ID } from "../constants/bodega.constants";

function CampusPicker({ 
  campuses,
  selectedCampus,
  setSelectedCampus,
  fetchBodegas,
  setSelectedBodega,
  resetMateriales,
}) {
  const handleChange = (e) => {
    setSelectedCampus(e.target.value);
    fetchBodegas(e.target.value);
    setSelectedBodega(DEFAULT_BODEGA_ID);
    resetMateriales();
  }

  return (
    <>
      {
        <select defaultValue={DEFAULT_CAMPUS_ID} value={selectedCampus} onChange={handleChange}>
            <option disabled selected value={DEFAULT_CAMPUS_ID}> -- Selecciona un Campus -- </option>
            {campuses.map((campus, index) => {
                return <option value={campus?.cmp_codigo} key={"campus-" + campus?.cmp_codigo}>
                  {campus?.cmp_nombre || "[CAMPUS DESCONOCIDO]"}
                </option>
            })}
        </select>
      }
      <p>{DEBUG_PRINTS && `CAMPUS_PICKER: ${selectedCampus} seleccionado`}</p>
    </>
  )
}

export default CampusPicker;