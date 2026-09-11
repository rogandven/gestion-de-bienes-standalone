import { useState } from "react";

function MaterialTable({ materiales, query }) {
    const filterFunction = ((material, query) => {
        console.log("material: ", material?.nombre_material);
        console.log("query: ", query);
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

    return (
        <>
            {Array.isArray(materiales) && materiales.length > 0 &&
                <table>
                    <tr key="materiales-headers">
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                    {materiales.filter((material) => {return filterFunction(material, query)}).map((material, index) =>
                        {
                            return (
                                <tr key={`material-${index}`}>
                                    <td>{material?.nombre_material || "-"}</td>
                                    <td>{material?.ume_descripcion || "-"}</td>
                                    <td>{"$" + (material?.sbo_valor || "0")}</td>
                                    <td>{material?.sbo_stock_disponible || "0"}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }
        </>
    )
}

export default MaterialTable;