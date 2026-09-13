import { useState } from "react";

function MaterialSearcher({ 
    query,
    setQuery,
    enableSearch,
}) {
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <input type="text" id="material-search" disabled={!enableSearch} value={query} onChange={handleChange} placeholder="Buscar..."></input>
        </>
    )
}

export default MaterialSearcher;