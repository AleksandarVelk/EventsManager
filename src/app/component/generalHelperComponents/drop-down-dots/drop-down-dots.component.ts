import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'event-drop-down-dots',
  templateUrl: './drop-down-dots.component.html',
  styleUrls: ['./drop-down-dots.component.scss']
})
export class DropDownDotsComponent implements OnInit {
  @Input() getItem: any;
  @Input() menuItems: Array<any>;
  @Input() typeItem: Array<any>;
  @Output() selectedVal = new EventEmitter<any>();
  combineArray = [];
  imageUrl: string;

  constructor(
  ) {}

  ngOnInit() {
    if (this.typeItem) {
      this.combineArray = [...this.menuItems , ...this.typeItem];
    } else {
      this.combineArray = this.menuItems;
    }
  }


  returnModeObj(event: Event, mode, object, name) {
    event.stopPropagation();
    this.selectedVal.emit({mod: mode, obj: object, title: name});
  }
}
