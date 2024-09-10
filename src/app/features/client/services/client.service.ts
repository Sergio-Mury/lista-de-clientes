import { Injectable } from '@angular/core';

interface Client{
  nome: string;
  email: string;
  telefone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [];

  constructor() { }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  getClients(): Client[]{
    return this.clients;
  }
}
