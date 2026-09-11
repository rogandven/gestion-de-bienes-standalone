import { useState } from "react";

function CampusPicker({ 
  campuses, 
  fetchBodegas, 
  selectedCampus,
  setSelectedCampus,
  setSelectedBodega,
  resetMateriales, 
}) {
  const handleChange = (e) => {
    setSelectedCampus(e.target.value);
    fetchBodegas(Number(e.target.value));
    setSelectedBodega(0);
    resetMateriales();
  }

  return (
    <>
      {Array.isArray(campuses) && campuses.length > 0 && 
        <select defaultValue={undefined} value={selectedCampus} onChange={handleChange}>
            <option disabled selected value={0}> -- Selecciona un Campus -- </option>
            {Array.isArray(campuses) && campuses.map((campus, index) => {
                return <option value={campus?.cmp_codigo} key={"campus-" + campus?.cmp_codigo}>
                  {campus?.cmp_nombre || "[CAMPUS DESCONOCIDO]"}
                </option>
            })}
        </select>
      }
    </>
  )
}

export default CampusPicker;