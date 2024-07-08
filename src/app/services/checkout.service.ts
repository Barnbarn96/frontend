import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../common/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  private purchaseUrl = environment.backendApi + '/checkout/purchase';
  private paymentIntentUrl = environment.backendApi + '/checkout/payment-intent';
  // private purchaseUrl = 'https://ecommerce-backend-deploy.herokuapp.com/api/checkout/purchase';
  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl,purchase);
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any>{
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo); 
  }
}
