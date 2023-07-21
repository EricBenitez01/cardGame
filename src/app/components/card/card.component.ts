import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  face: boolean = false;
  jsonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSONData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

  getJSONData(): Observable<any> {
    return this.http.get<any>('../../../assets/data.json');
  }

  public toggle(): void {
    /* if(this.face == false) {
      this.face = true
    } else {
      this.face = false
    } */
    this.face = !this.face

  }
}
