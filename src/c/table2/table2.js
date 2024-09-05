import { LightningElement , api} from 'lwc';

export default class Table2 extends LightningElement {
    @api tableData;
    pageCount = 0;
    allPages=[];
    perpage = 8;
    currentpage = 1;
    activecheck = false;

    renderedCallback() {
        this.renderData();
    }

    renderData() {
        if (this.tableData === "") {
            
        } else {
            // console.log('tableData: ', this.tableData);
            this.pagination();
        }
    }

    pagination() {
        this.calculatePageCount();
        // this.generatePagination();
        // this.showTable(this.currentpage);   
    }

     // calculate page count after data is loaded
    calculatePageCount(){
        this.pageCount =  Math.ceil(this.tableData.length/this.perpage);
    }

    // generate pagination
    generatePagination(){
        this.allPages = getArray(this.pageCount, this.currentPage );
    }

    // show table based on page number
    showTable(pageNo){

        const table = this.template.querySelector(".datatable");
        const trElements = table.querySelectorAll("tr");
        const perpage = this.perpage;
        this.currentpage = pageNo;
        for(let i = 0; i < trElements.length; i++){
            if(i < (pageNo * perpage) && i >= ((pageNo - 1) * perpage)){
                trElements[i].style.display = "table-row";
            }else{
                trElements[i].style.display = "none";
            }
        }
    }

    // handle page change
    handlePageChange(event){
        this.showTable(event.target.getAttribute('data-value'));
        this.allpages = getArray(this.pagecount, this.currentpage );
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