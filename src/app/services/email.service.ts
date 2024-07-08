import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailInfo } from '../common/email-info';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = environment.backendApi + '/sendMail';

  constructor(private httpClient: HttpClient) { }

  sendMail(details: EmailInfo):Promise<any>{
    return this.httpClient.post(this.emailUrl, details, {responseType: 'text'}).toPromise();
  }
}
