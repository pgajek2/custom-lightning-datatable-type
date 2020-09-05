import { LightningElement, track } from 'lwc';

export default class MyDataTable extends LightningElement {
    
    columns = [
        { label: 'Record Name', fieldName: 'name', type: 'text'},
        { label: 'Custom Type A', fieldName: 'id', type: 'customTypeA', typeAttributes: {
                customValueA: { fieldName: 'customA' },
                createdDate: { fieldName: 'createdDate' }
            }
        },
        { label: 'Custom Type B', fieldName: 'id', type: 'customTypeB', typeAttributes: {
                customValueB: { fieldName: 'customB' },
                createdDate: { fieldName: 'createdDate' }
            }
        }
    ];

    @track data = [
        { id: 1, name: 'Example 1', customA: 1, customB: 11, createdDate: '08-05-2020 '},
        { id: 2, name: 'Example 2', customA: 2, customB: 12, createdDate: '08-05-2020 '},
        { id: 3, name: 'Example 3', customA: 3, customB: 13, createdDate: '08-05-2020 '},
        { id: 4, name: 'Example 4', customA: 4, customB: 14, createdDate: '08-05-2020 '},
        { id: 5, name: 'Example 5', customA: 5, customB: 15, createdDate: '08-05-2020 '},
        { id: 6, name: 'Example 6', customA: 6, customB: 16, createdDate: '08-05-2020 '},
        { id: 7, name: 'Example 7', customA: 7, customB: 17, createdDate: '08-05-2020 '},
        { id: 8, name: 'Example 8', customA: 8, customB: 18, createdDate: '08-05-2020 '}
    ];
    
    handleCustomTypeA(event) {
        const { recordId, newCustomValueA } = event.detail;
        console.log('CUSTOM TYPE A - ' + recordId + ' - ' + newCustomValueA);
        this.data.find(item => item.id == recordId).customA = newCustomValueA;
        this.data = [...this.data];
    }

    handleCustomTypeB(event) {
        const { recordId, customValueB } = event.detail;
        console.log('CUSTOM TYPE B - ' + recordId);
    }
}