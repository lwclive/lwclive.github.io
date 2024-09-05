import { LightningElement ,api, track} from 'lwc';

export default class Table extends LightningElement {

    @api tableData;
    pageCount = 0;
    allPages=[];
    perpage = 8;
    currentPage = 1;
    generatedPagination = false; 


    renderedCallback() {
        // this.showTable(this.currentpage); 
        this.renderData();
    }

    renderData() {
        if (this.tableData === "") {
            
        } else {
            // console.log('tableData: ', this.tableData);
            this.calculatePageCount();  
        }

        if (this.pageCount != null) {
            console.log('pageCount: ', this.pageCount);
        }

        if (this.currentPage != null) {
            console.log('currentPage: ', this.currentPage);
            this.showTable(this.currentPage);
        } 

        if ((this.generatedPagination == false) && (this.pageCount >0)) {
            // this.generatePagination();
            this.allPages = getArray(this.pageCount, this.currentPage );
            this.generatedPagination = true;
        }

             
        
    }


     // calculate page count after data is loaded
    calculatePageCount(){
        this.pageCount =  Math.ceil(this.tableData.length/this.perpage);
    }

    // // generate pagination
    // generatePagination(){
    //     this.allPages = getArray(this.pageCount, this.currentPage );
    // }

    // show table based on page number
    showTable(pageNo){

        const table = this.template.querySelector(".datatable");
        const trElements = table.querySelectorAll("tr");
        const perpage = this.perpage;
        this.currentPage = pageNo;
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
        this.allPages = getArray(this.pageCount, this.currentPage );
        this.generatedPagination = false; 
    }

    // generate pagination array
    generatePagination() {
        this.allPages = getArray(this.pageCount, this.currentPage );
        this.showTable(this.currentPage); 
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

