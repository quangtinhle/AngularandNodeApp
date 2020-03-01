import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            {{message.name}} is a {{message.sex}}
            <button mat-button>Click me!</button>

        </div>
    `
})

export class MessagesComponent  {
    messages = [{name:"Le Quang Tinh", sex:"male"}, {name:"Ho Thao Nguyen", sex :"female"}];
}