import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: 'This is a list of Member <div *ngFor="let message of messages">{{message.name}} is a {{message.sex}}</div>'
})

export class MessagesComponent  {
    messages = [{name:"Le Quang Tinh", sex:"male"}, {name:"Ho Thao Nguyen", sex :"female"}];
}