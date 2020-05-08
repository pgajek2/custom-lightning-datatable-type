import { LightningElement, api } from 'lwc';

export default class CustomTypeB extends LightningElement {
    
    @api recordId;
    @api recordName;
    @api createdDate;

    fireCustomTypeB() {
        const event = new CustomEvent('customtypeb', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                recordId: this.recordId,
                recordName: this.recordName
            },
        });
        this.dispatchEvent(event);
    }
}