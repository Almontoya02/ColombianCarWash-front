import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-lavados',
  templateUrl: './card-lavados.component.html',
  styleUrls: ['./card-lavados.component.css']
})
export class CardLavadosComponent implements OnInit {

  @Input() clientName:string | undefined
  @Input() vehicleType:string | undefined
  @Input() washType:string | undefined
  @Input() washPrice:number | undefined
  @Input() date:string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
