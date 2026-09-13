import { useState } from "react"

export const useChangePage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const resetPage = () => {
        setCurrentPage(0);
    }

    return [currentPage, nextPage, previousPage, resetPage];
}

export default useChangePage;