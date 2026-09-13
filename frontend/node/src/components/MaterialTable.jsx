import { useState } from "react";

function MaterialTable({ materiales, paginationHelper }) {
    if (!Array.isArray(materiales) || materiales.length <= 0) {
        return <div/>;
    }

    const JSXArray = [];
    
    for (let i = paginationHelper.pageStart; i < paginationHelper.pageEnd; i++) {
        // console.log(`i = ${i}`);
        JSXArray.push(
            <tr key={`material-${i}`}>
                <td>{materiales[i]?.nombre_material || "-"}</td>
                <td>{materiales[i]?.ume_descripcion || "-"}</td>
                <td>{"$" + (materiales[i]?.sbo_valor || "0")}</td>
                <td>{materiales[i]?.sbo_stock_disponible || "0"}</td>
            </tr>
        );
    }

    return (
        <>
            {materiales &&
                <table>
                    <tr key="materiales-headers">
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                    {JSXArray.map((e) => e)}
                </table>
            }
        </>
    )
}

export default MaterialTable;