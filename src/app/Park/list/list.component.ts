import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Park } from 'src/app/Model/Park';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  parks!: Park[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getParks()
    .subscribe(data => {
      this.parks = data;
    })
  }

}
