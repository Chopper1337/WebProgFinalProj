import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VtApiService {

  private _siteURL="https://www.virustotal.com/vtapi/v2/url/scan";
  private _ApiKey="0043c4b8d033dd717ac40bc4178a9887048e43cd8f7241ad538671ae7cd9c3ab"; // yes I am aware this is public :)
  constructor(private _http:HttpClient) { }
  
  scanURL(string:URL){
    /*
    console.log(Buffer.from("Hello World").toString('base64'));
    // SGVsbG8gV29ybGQ=
    console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('binary'))
    // Hello World
*/


  }
}
