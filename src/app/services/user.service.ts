import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient){}
  
  doCheckout(data: any) {
    const url = 'https://my-app-2675f-default-rtdb.firebaseio.com/b5-data.json';
    return this.httpClient.post(url, data);
  }
}

