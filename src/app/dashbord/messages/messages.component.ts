import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  msgs: Message[];
  message: string = 'jsuj';

  constructor(private readonly msg: DashboardService){}

  ngOnInit(): void{
    this.msg.readMessage().subscribe((vl) => this.msgs = vl);
  }

  getMsgInfo(data){
    this.message = data.message;
  }
}
