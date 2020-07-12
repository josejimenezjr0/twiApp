import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
factionData:any;
id:any;
factionId:any;
faction:any;
factionPromise: Promise<boolean>;


  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.factionId = this.route.snapshot.paramMap.get("id");
    console.log('factionId: ', this.factionId);
    this.getOneFaction(this.factionId);
  }

  async getOneFaction(id) {
    console.log('id: ', id);
    const data = this.httpService.getFaction(id).toPromise()
    console.log("Data: " + JSON.stringify(data));
    this.factionData = data
    console.log('factionData - after promise: ', this.factionData);
    this.factionPromise = Promise.resolve(true);
    // let observable = this.httpService.getFaction(id);
    // console.log('after obserable declared');
    // observable.subscribe((data)=> {
    //   console.log('in subscribe');
    //   this.factionData = data;
    //   console.log("-------show component---------")
    //   console.log(this.factionData)
    // })
  }
}
