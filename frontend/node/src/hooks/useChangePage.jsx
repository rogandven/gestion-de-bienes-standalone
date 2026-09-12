import { useState } from "react"

export const useChangePage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    return [currentPage, nextPage, previousPage];
}

export default useChangePage;