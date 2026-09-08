import axios from "../config/axios.config.js";

export const getBodegas = async (campusId: number) => {
    const bodegas = await axios.get(`/bodega/get.php?campusId=${campusId}`);
    return bodegas?.data?.data || [];
}