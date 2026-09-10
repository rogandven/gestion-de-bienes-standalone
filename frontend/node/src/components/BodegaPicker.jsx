function BodegaPicker({ bodegas, onChange }) {
  return (
    <>
        <select defaultValue={undefined} value={undefined}>
            {Array.isArray(bodegas) && bodegas.map((bodega, index) => {
                return <option value={bodega?.cmp_codigo || index} key={"bodega-" + index}>
                  {bodega?.bod_nombre || "[BODEGA DESCONOCIDA]"}
                </option>
            })}
        </select>
    </>
  )
}

export default BodegaPicker;