import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../shared/services/common-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private commonService: CommonServiceService) {}
  token: string | undefined | null;
  data: any[] = [];
  
  displayedColumns = ["id", "name", "year", "color"]
  
  ngOnInit(): void {
    this.token = localStorage.getItem('loggedIn');
    const header = new HttpHeaders( {
      'Authorization': 'Bearer '+ this.token,    
    'Content-type':'application/json'});
    this.commonService.getUserData(header).subscribe(res => {
      const response = res as any;
      if(response) {
        this.data = response.data;
      }
    });
  }

}
