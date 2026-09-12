export const filterMateriales = (materiales, query) => {
    const filterFunction = ((material, query) => {
        return (
            (String(material?.nombre_material)
                .toUpperCase().includes(
                    String(query || "").trim().toUpperCase()
            )) ||
            (String(material?.ume_descripcion)
                .toUpperCase().includes(
                    String(query || "").trim().toUpperCase()
            ))
        );
    });
    if (!Array.isArray(materiales) || materiales.length <= 0) {
        return [];
    }
    
    return materiales.filter((material) => {return filterFunction(material, query)});
}