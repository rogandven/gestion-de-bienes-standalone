import { useState } from "react";

function BodegaPicker({ bodegas, fetchMateriales, selectedBodega, setSelectedBodega }) {
  const handleChange = (e) => {
    setSelectedBodega(e.target.value);
    fetchMateriales(Number(e.target.value));
  }
  
  return (
    <>
      {Array.isArray(bodegas) && bodegas.length > 0 &&
        <select defaultValue={undefined} value={selectedBodega} onChange={handleChange}>
          <option disabled selected value={0}> -- Selecciona una Bodega -- </option>
                {Array.isArray(bodegas) && bodegas.map((bodega, index) => {
                return <option value={bodega?.bod_codigo || index} key={"bodega-" + index}>
                  {bodega?.bod_descripcion || "[BODEGA DESCONOCIDA]"}
                </option>
            })}
        </select>
      }
      <p>{`Ha seleccionado ${selectedBodega}`}</p>
    </>
  )
}

export default BodegaPicker;