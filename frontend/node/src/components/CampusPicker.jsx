function CampusPicker({ campuses }) {
  // console.log("CampusPicker campuses: ", campuses);

  return (
    <>
        <select>
            {Array.isArray(campuses) && campuses.map((campus, index) => {
                return <option value={campus?.cmp_codigo || index} key={"campus-" + index}>
                  {campus?.cmp_nombre || "[CAMPUS DESCONOCIDO]"}
                </option>
            })}
        </select>

    </>
  )
}

export default CampusPicker;