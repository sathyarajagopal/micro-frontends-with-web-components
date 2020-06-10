import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-customelement',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // <- this allows CSS to bleed to this component from parent app
})
export class AppComponent implements OnInit {

  @Input() name: string;
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
