function PageSwitcher({paginationHelper, nextPage, previousPage}) {
    const DISABLED = paginationHelper?.pageAmount === 0;

    return (
        <>
            <button disabled={DISABLED} onClick={nextPage}>{"<-"}</button>
            <button disabled={DISABLED}>{`${!DISABLED ? ((paginationHelper.pageIndex || 0) + 1) : 0}/${paginationHelper.pageAmount}`}</button>
            <button disabled={DISABLED} onClick={previousPage}>{"->"}</button>
        </>
    )
}

export default PageSwitcher;