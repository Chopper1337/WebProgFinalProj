import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IWeb, Website } from '../interface/website';

@Injectable({
  providedIn: 'root'
})
export class WebsiteDbApiService {

  websitesDataCollection:AngularFirestoreCollection<IWeb>;
  websitesData!: Observable<IWeb[]>;
  allWebsitesData!:IWeb[];
  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
   this.websitesDataCollection=_afs.collection<IWeb>("websites_data");
  }
  
  getWebsitesData():Observable<IWeb[]>{
    this.websitesData = this.websitesDataCollection.valueChanges({idField:'id'});
    this.websitesData.subscribe(
      data => console.log("getWebsitesData: " + JSON.stringify(data))
    )
    return this.websitesData;
  }
  
  addWebsiteData(website:IWeb): void {
    this.websitesDataCollection.add(JSON.parse(JSON.stringify(website)));
  }
  
  private handleError(err:HttpErrorResponse) {
    console.log('WebsiteApiService: ' + err.message);
    return new Error(err.message);
  }
}
