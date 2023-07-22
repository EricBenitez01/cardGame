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
  rotate: string = '';

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

  isRotated: boolean = false;

  rotateCard() {
    this.isRotated = !this.isRotated;
  }
  public toggle(): void {
    
    setTimeout(() => {
      this.face = !this.face
    }
    ,350)
    
  }
}
