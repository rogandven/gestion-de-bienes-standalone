import { useState } from 'react';
import { getBodegas } from '../service/bodega.service';

export const useGetBodegas = () => {
    const [bodegas, setBodegas] = useState([]);

    const fetchBodegas = (campusId) => {
        if (campusId) {
            getBodegas(campusId).then((bodegas) => {
                setBodegas(bodegas);
            });
        } else setBodegas([]);
    }


    return [bodegas, fetchBodegas];
}

export default useGetBodegas;

