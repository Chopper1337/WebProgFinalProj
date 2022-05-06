import { Component, Input, OnInit } from '@angular/core';
import { VtApiService } from 'src/app/services/vt-api.service';
import { IWeb } from '../interface/website';
import { stringify } from 'querystring';
import { WebsiteDbApiService } from '../services/website-db-api.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
  providers: [VtApiService]
})

export class WebsiteComponent implements OnInit {
  @Input() websiteData!:IWeb;
  constructor(private _websiteDBAPIService:WebsiteDbApiService) { }

  ngOnInit(): void {
  }

  deleteFromFavourites(id:string){
    this._websiteDBAPIService.deleteFromFavourites(id)
  }

}
