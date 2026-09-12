function PageSwitcher({paginationHelper, nextPage, previousPage}) {
    const DISABLED = paginationHelper?.pageAmount === 0;

    return (
        <>
            <button disabled={DISABLED} onClick={previousPage}>{"<-"}</button>
            <button disabled={DISABLED}>{paginationHelper?.pageIndex || 0}</button>
            <button disabled={DISABLED} onClick={nextPage}>{"->"}</button>
        </>
    )
}

export default PageSwitcher;