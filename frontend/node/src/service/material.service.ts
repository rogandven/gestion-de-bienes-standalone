import axios from "../config/axios.config.js";

export const getMaterial = async (bodegaId: number) => {
    const material = await axios.get(`/material/get.php?bodegaId=${bodegaId}`);
    return material?.data?.data || [];
}
