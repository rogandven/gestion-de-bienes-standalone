import { useState } from "react";
import { getMaterial } from "../service/material.service";

export const useGetMateriales = () => {
    const [materiales, setMateriales] = useState([]);

    const fetchMateriales = (bodegaId) => {
        if (bodegaId) {
            getMaterial(bodegaId).then((material) => {
                setMateriales(material);
            })
        } else setMateriales([]);
    }

    return [materiales, fetchMateriales];
}

export default useGetMateriales;
