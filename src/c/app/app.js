import { LightningElement , track} from 'lwc';
const data = [
    {id:1, month: 'Jan', savings: 100},
    {id:2, month: 'Feb', savings: 200},
    {id:3, month: 'Mar', savings: 300},
    {id:4, month: 'Apr', savings: 400},
    {id:5, month: 'May', savings: 500},
    {id:6, month: 'Jun', savings: 600},
    {id:7, month: 'Jul', savings: 700},
    {id:8, month: 'Aug', savings: 800},
    {id:9, month: 'Sep', savings: 900},
    {id:10, month: 'Oct', savings: 1000},
    {id:11, month: 'Nov', savings: 1100},
    {id:12, month: 'Dec', savings: 1200},
    {id:13, month: 'Jan', savings: 1300},
    {id:14, month: 'Feb', savings: 1400},
    {id:15, month: 'Mar', savings: 1500},
    {id:16, month: 'Apr', savings: 1600},
    {id:17, month: 'May', savings: 1700},
    {id:18, month: 'Jun', savings: 1800},
    {id:19, month: 'Jul', savings: 1900},
    {id:20, month: 'Aug', savings: 2000},
    {id:21, month: 'Sep', savings: 2100},
];

export default class App extends LightningElement {
    tableData = data;
}
