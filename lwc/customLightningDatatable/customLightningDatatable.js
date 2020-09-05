import LightningDatatable from 'lightning/datatable';
import customTypeA from './customTypeA';
import customTypeB from './customTypeB';

export default class CustomLightningDatatable extends LightningDatatable {
    static customTypes = {
        customTypeA: {
            template: customTypeA,
            typeAttributes: ['recordId', 'customValueA']
        },
        customTypeB: {
            template: customTypeB,
            typeAttributes: ['recordId']
        }
    }
}