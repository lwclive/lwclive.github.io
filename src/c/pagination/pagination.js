import { LightningElement , api} from 'lwc';

const demopagination = [
    {id:1, value:1, class:"pagination-btn active"},
    {id:2, value:2, class:"pagination-btn"}
];
export default class Table2 extends LightningElement {
    @api pageCount;
    @api currentPage;
    allPages = demopagination;
    generatedPagination = false; 

    // get copyPageCount() {
    //     if(this.pageCount || this.currentPage)
    //     {
    //         // console.log('pageCount: ', this.pageCount);
    //         this.renderData();
    //     }

    //     // this.copyPageCount();
    // }

    // constructor(event) {
    //     super();
    //     // this.pagination();
    //     // this.renderData();
    // }

    connectedCallback() {
        // this.renderData();
        // this.copyPageCount();
    }

    renderedCallback() {
        this.renderData();
    }

    renderData() {
        if (this.pageCount != null) {
            console.log('pageCount: ', this.pageCount);
        }

        if (this.currentPage != null) {
            console.log('currentPage: ', this.currentPage);
        } 

        if ((this.generatedPagination == false) && (this.pageCount >0)) {
            // this.generatePagination();
            this.allPages = getArray(this.pageCount, this.currentPage );
            this.generatedPagination = true;
        }
        
    }

    generatePagination() {
        this.allPages = getArray(this.pageCount, this.currentPage );
        console.log('Show page count: ', this.pageCount);
        console.log('Show page data: ', this.allPages);
    }

}

export function getArray(n, start = 1) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        if (i+1 == start) 
            newArray.push(  {id:i, value:i+1, class:"pagination-btn active"} );
        else
            newArray.push(  {id:i, value:i+1, class:"pagination-btn"} );
    }
    return newArray;
}

export function getArray2(n, start = 1) {
    return Array.from({length: n}, (v, k) => k + 1).map(v => ({id: v-1, value: v, class: v == start ? "pagination-btn active" : "pagination-btn"}))
}