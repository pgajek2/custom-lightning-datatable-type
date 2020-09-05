import { LightningElement, api } from 'lwc';

export default class CustomTypeB extends LightningElement {
    
    @api recordId;

    fireCustomTypeB() {
        const event = new CustomEvent('customtypeb', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                recordId: this.recordId
            },
        });
        this.dispatchEvent(event);
    }
}