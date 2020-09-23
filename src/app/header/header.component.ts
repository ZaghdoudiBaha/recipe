import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() dislayComp = new EventEmitter<{displayedPage : string}>();
  constructor() {}

  ngOnInit(): void {
  }
  onDisplay(text){
    this.dislayComp.emit({displayedPage : text})
  }

}
