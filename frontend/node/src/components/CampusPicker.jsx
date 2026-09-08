function CampusPicker(campuses) {
  return (
    <>
        <select>
            {campuses.map((campus, index) => {
                return <option value={campus?.cmp_codigo || index} key={"campus-" + index}>
                  {campus?.cmp_nombre || "[CAMPUS DESCONOCIDO]"}
                </option>
            })}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>

    </>
  )
}

export default CampusPicker;