import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../models/service';
import {ServiceService} from '../../../../service/service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent implements OnInit {
  service:Service[]=[];
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getAllservice()
  }

  getAllservice(){

    this.serviceService.getAllService().subscribe(service=>
      this.service=service);
    console.log("nese")
  }

}
