import { useState } from "react";

function MaterialSearcher({ 
    query,
    setQuery,
}) {
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <input type="text" id="material-search" value={query} onChange={handleChange} placeholder="Buscar..."></input>
        </>
    )
}

export default MaterialSearcher;