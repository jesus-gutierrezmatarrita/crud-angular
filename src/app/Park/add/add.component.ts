import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Park } from 'src/app/Model/Park';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  park:Park = new Park();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.service.createPark(this.park)
    .subscribe(data => {
      alert("Se agregó correctamente");
      this.router.navigate(["list"]);
    })
  }

}
