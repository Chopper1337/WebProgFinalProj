import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { VTAPIResponse } from 'src/app/vt-api-response';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VtApiService {

  private _siteURL="https://www.virustotal.com/api/v3/urls/"; // Append the base64 encoded URL to this
  private _ApiKey="0043c4b8d033dd717ac40bc4178a9887048e43cd8f7241ad538671ae7cd9c3ab"; // Header named "x-Apikey" + yes I am aware this is public :)
  constructor(private _http:HttpClient) { }
  
  // This is take the users inputted URL as a string, converts it to base64 and makes the API request to the 
  scanURL(URL:string): Observable<VTAPIResponse>
  {
    const customHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'x-Apikey': this._ApiKey}

    const requestOptions = { headers: new HttpHeaders(customHeaders)}
  
    // VT saves website reports under a B64 encoded version of the URL
    let base64URL = Buffer.from(URL).toString('base64')

    // I expect the maxiumum number of "=" to be two
    // they need to be removed before being passed to the API
    base64URL = base64URL.replace(new RegExp('='), "")
    base64URL = base64URL.replace(new RegExp('='), "")

    return this._http.get<VTAPIResponse>(this._siteURL + base64URL, requestOptions)
      .pipe(tap(data => console.log('VTAPIError: ' + JSON.stringify(data))))
  }
}
