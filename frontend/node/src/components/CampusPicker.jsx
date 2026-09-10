import { useState } from "react";

function CampusPicker({ campuses, fetchBodegas }) {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    fetchBodegas(Number(e.target.value));
  }

  return (
    <>
        <select defaultValue={0} value={selectedValue} onChange={handleChange}>
            {Array.isArray(campuses) && campuses.map((campus, index) => {
                return <option value={campus?.cmp_codigo} key={"campus-" + campus?.cmp_codigo}>
                  {campus?.cmp_nombre || "[CAMPUS DESCONOCIDO]"}
                </option>
            })}
        </select>
        <p>{`¡Has seleccionado ${selectedValue}!`}</p>
    </>
  )
}

export default CampusPicker;