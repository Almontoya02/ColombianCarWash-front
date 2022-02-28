import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-principal',
  templateUrl: './btn-principal.component.html',
  styleUrls: ['./btn-principal.component.css']
})
export class BtnPrincipalComponent implements OnInit {
  @Input() name: string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSelectBtn(){
    this.buttonSelected?.emit()
  }

}
