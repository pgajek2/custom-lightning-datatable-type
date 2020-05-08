import { LightningElement, api } from 'lwc';

export default class CustomTypeA extends LightningElement {

    @api recordId;
    @api recordName;
    @api createdDate;

    fireCustomTypeA() {
        const event = new CustomEvent('customtypea', {
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