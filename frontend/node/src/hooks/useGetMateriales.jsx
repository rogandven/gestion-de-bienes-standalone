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

    const resetMateriales = () => {
        setMateriales([]);
    }

    return [materiales, fetchMateriales, resetMateriales];
}

export default useGetMateriales;
