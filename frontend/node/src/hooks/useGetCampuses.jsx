import { useState } from 'react';
import { getCampus } from '../service/campus.service';

export const useGetCampuses = () => {
    const [campuses, setCampuses] = useState([]);
    getCampus().then((campus) => {
        setCampuses(campus);
    });
    return campuses;
}

export default useGetCampuses;

