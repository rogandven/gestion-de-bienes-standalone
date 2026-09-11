import { useState } from "react";

function MaterialSearcher({ 
    materiales,
    setNewMateriales,
}) {


    const handleChange = (e) => {
        setNewMateriales(Array.isArray(materiales) ? materiales.filter((m) => {
            return String(m.nombre_material).includes(e?.target?.value || "") ||
            String(m.ume_descripcion).includes(e?.target?.value || "");
        }) : []);
    }

    return (
        <>
        {Array.isArray(materiales) && materiales.length > 0 && 
            <input type="text" id="material-search" onChange={handleChange} placeholder="Buscar..."></input>
        }
        </>
    )
}

export default MaterialSearcher;