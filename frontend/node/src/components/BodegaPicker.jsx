import { useState } from "react";
import { DEFAULT_BODEGA_ID } from "../constants/bodega.constants";
import { DEBUG_PRINTS } from "../constants/config.constants";

function BodegaPicker({ bodegas, selectedBodega, setSelectedBodega, selectedCampus, fetchMateriales }) {
  const handleChange = (e) => {
    setSelectedBodega(e.target.value);
    fetchMateriales(e.target.value);
  }
  
  return (
    <>
      {
        <select defaultValue={DEFAULT_BODEGA_ID} value={selectedBodega} onChange={handleChange}>
          <option disabled selected value={DEFAULT_BODEGA_ID}> -- Selecciona una Bodega -- </option>
                {Array.isArray(bodegas) && bodegas.map((bodega, index) => {
                return <option value={bodega?.bod_codigo || index} key={"bodega-" + index}>
                  {bodega?.bod_descripcion || "[BODEGA DESCONOCIDA]"}
                </option>
            })}
        </select>
      }
      <p>{DEBUG_PRINTS && `BODEGA_PICKER: ${selectedBodega} seleccionado`}</p>
    </>
  )
}

export default BodegaPicker;