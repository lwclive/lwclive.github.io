import { LightningElement , track} from 'lwc';

export default class Test extends LightningElement {

    renderedCallback(){
        this.jsTest();
    }

    jsTest(){
        let assetClassTableData = 
            [
                { 
                    planId: 'all_plans', planName: 'All Plans', assetClasses: 
                    [ 
                        { class: 'Stocks', assetValue: 1000, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Bonds', assetValue: 2000, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Balanced', assetValue: 3000, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Cash', assetValue: 4000, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Other', assetValue: 6000, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' }
                    ] 
                },
                {
                    planId: '2', planName: 'Acme Marketing', totalAssetValue: '1600', assetClasses:
                    [
                        { class: 'Stocks', assetValue: 100, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: '' },
                        { class: 'Bonds', assetValue: 200, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Balanced', assetValue: 300, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Cash', assetValue: 400, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' },
                        { class: 'Other', assetValue: 600, assetValueChangePercentage: 0.5, changeReference: 'Month', color : 'red', iconName: 'iconUpArrow' }
                    ]
                }, 
                {
                    planId: '3', planName: 'ISP Marketing'
                }
            ];
        
            // let uniqueClasses = [...new Set(assetClassTableData?.map(item => item.assetClasses?.map(i => i.class)).flat())];
            // assetClassTableData?.console.log(assetClassTableData);
            // console.log(assetClassTableData);
    }
}