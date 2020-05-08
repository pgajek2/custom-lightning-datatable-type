import { LightningElement } from 'lwc';

export default class MyDataTable extends LightningElement {
    
    columns = [
        { label: 'Record Name', fieldName: 'name', type: 'text'},
        { label: 'Custom Type A', fieldName: 'id', type: 'customTypeA', typeAttributes: {
                recordName: { fieldName: 'name' },
                createdDate: { fieldName: 'createdDate' }
            }
        },
        { label: 'Custom Type B', fieldName: 'id', type: 'customTypeB', typeAttributes: {
            recordName: { fieldName: 'name' },
            createdDate: { fieldName: 'createdDate' }
        }
        }
    ];

    data = [
        { id: 1, name: 'Example 1', createdDate: '08-05-2020 '},
        { id: 2, name: 'Example 2', createdDate: '08-05-2020 '},
        { id: 3, name: 'Example 3', createdDate: '08-05-2020 '},
        { id: 4, name: 'Example 4', createdDate: '08-05-2020 '},
        { id: 5, name: 'Example 5', createdDate: '08-05-2020 '},
        { id: 6, name: 'Example 6', createdDate: '08-05-2020 '},
        { id: 7, name: 'Example 7', createdDate: '08-05-2020 '},
        { id: 8, name: 'Example 8', createdDate: '08-05-2020 '}
    ];
    
    handleCustomTypeA(event) {
        const { recordId, recordName } = event.detail;
        console.log('CUSTOM TYPE A' + recordId);
    }

    handleCustomTypeB(event) {
        const { recordId, recordName } = event.detail;
        console.log('CUSTOM TYPE B' + recordId);
    }
}