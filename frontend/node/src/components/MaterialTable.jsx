import { useState } from "react";

function MaterialTable({ materiales }) {
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
                    {materiales.map((material, index) =>
                        <tr key={`material-${index}`}>
                            <td>{material?.nombre_material || "-"}</td>
                            <td>{material?.ume_descripcion || "-"}</td>
                            <td>{"$" + (material?.sbo_valor || "0")}</td>
                            <td>{material?.sbo_stock_disponible || "0"}</td>
                        </tr>
                    )}
                </table>
            }
        </>
    )
}

export default MaterialTable;