import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'sorting-list',
	templateUrl: './sorting-list.component.html',
	styleUrls: ['./sorting-list.component.css']
})
export class SortingListComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	@Input() cid: string;
	//@Input() dataList: string;

	@ViewChild('sl', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

  public sortingList(){
    var list, 
    i, 
    switchStatus, 
    element, 
    shouldSwitch, 
    direction, 
    switchcount = 0;

    list = document.getElementById(this.id);
    switchStatus = true;

    direction = "asc"; 

    while (switchStatus) {

      switchStatus = false;
      element = list.getElementsByTagName("LI");

      for (i = 0; i < (element.length - 1); i++) {

        shouldSwitch = false;

        if (direction == "asc") {

          if (element[i].innerHTML.toLowerCase() > element[i + 1].innerHTML.toLowerCase()) {

            shouldSwitch = true;
            break;

          }

        } else if (direction == "desc") {

          if (element[i].innerHTML.toLowerCase() < element[i + 1].innerHTML.toLowerCase()) {

            shouldSwitch= true;
            break;

            }

          }

        }

      if (shouldSwitch) {

        element[i].parentNode.insertBefore(element[i + 1], element[i]);
        switchStatus = true;
        switchcount ++;

      } else {

        if (switchcount == 0 && direction == "asc") {

          direction = "desc";
          switchStatus = true;

        }

      }

    }

  }

}
