import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() public parentData;
  @Output() public childData = new EventEmitter();

  dataFlow(){
    this.childData.emit("Welcom Yogesh");
  }
}
