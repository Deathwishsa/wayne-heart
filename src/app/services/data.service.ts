import { Injectable } from '@angular/core';
import { CLIENT_DATA, ClientData } from '../constants/client-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getClientData(): ClientData {
    return CLIENT_DATA;
  }
}