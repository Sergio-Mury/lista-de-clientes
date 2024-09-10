import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit{
  clients: any[] = [];
 
  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }
}
