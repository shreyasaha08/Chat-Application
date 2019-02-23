import { Component, OnChanges, Input, EventEmitter, Output, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'first-char',
  templateUrl: './first-char.component.html',
  styleUrls: ['./first-char.component.css']
})
export class FirstCharComponent implements OnInit,OnChanges {
  @Input() userName: string;
  @Input() userBg: string;
  @Input() userColor: string;

  public firstChar: string;

  @Output() userNameAppear: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnInit(): void {

      this.firstChar = this.userName[0];

  } // end ngOnInit
  ngOnChanges(changes: SimpleChanges){
    let name=changes.name;
    this.userName=name.currentValue;
    this.firstChar=this.userName[0];
  }
}
