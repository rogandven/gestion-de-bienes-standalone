export default class PaginationHelper {
    private static mod(a: number, b: number) {
        let rem: number;
        if  ((rem = a % b) < 0) {
            rem = a + rem;
        }
        return rem;
    }

    private static correct(a: number) {
        if (Number.isNaN(a)) {
            return 0;
        }
        return Math.abs(Math.floor(a));
    }

    private static div(a: number, b: number) {
        if (b === 0) {
            return 0;
        }
        return a / b;
    }

    private _itemAmount: number = 0;
    private _itemsPerPage: number = 0;
    private _pageStart: number = 0;
    private _pageEnd: number = 0;
    private _pageIndex: number = 0;
    private _pageAmount: number = 0;

	public get itemAmount(): number  {
		return this._itemAmount;
	}
	private set itemAmount(value: number ) {
		this._itemAmount = PaginationHelper.correct(value);
	}

	public get itemsPerPage(): number  {
		return this._itemsPerPage;
	}
	private set itemsPerPage(value: number ) {
		this._itemsPerPage = PaginationHelper.correct(value);
	}

	public get pageStart(): number  {
		return this._pageStart;
	}
	private set pageStart(value: number ) {
		this._pageStart = PaginationHelper.correct(value);
	}

	public get pageEnd(): number  {
		return this._pageEnd;
	}
	private set pageEnd(value: number ) {
        if (value > this.itemAmount) {
            this._pageEnd = this.itemAmount;
            return;
        }
		this._pageEnd = PaginationHelper.correct(value);
	}

	public get pageIndex(): number  {
		return this._pageIndex;
	}
	private set pageIndex(value: number ) {
		this._pageIndex = PaginationHelper.mod(PaginationHelper.correct(value), this.pageAmount);
	}

	public get pageAmount(): number  {
		return this._pageAmount;
	}
	private set pageAmount(value: number ) {
		this._pageAmount = PaginationHelper.correct(value);
	}


    public constructor(items: unknown[], itemsPerPage: number, pageIndex: number) {
        this.itemAmount = items.length;
        this.pageIndex = pageIndex;
        this.itemsPerPage = itemsPerPage;
        this.pageStart = itemsPerPage * pageIndex;
        this.pageEnd = this.pageStart + itemsPerPage;
        this.pageAmount = PaginationHelper.div(this.itemAmount, this.itemsPerPage);
    }
}