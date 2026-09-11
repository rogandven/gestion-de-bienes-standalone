import axios from "../config/axios.config.js";
import { DEFAULT_CAMPUS_ARRAY } from "../constants/campus.constants.js";

export const getCampus = async () => {
    const campus = await axios.get("/campus/get.php");
    return campus?.data?.data || DEFAULT_CAMPUS_ARRAY;
}