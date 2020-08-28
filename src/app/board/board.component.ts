import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  inprogress = [
    'Go shopping'
  ];

  getNewElement(){
    let test = document.createElement('div')
    test.innerHTML = `<div class="example-container"><h2>To do <span><button mat-icon-button><mat-icon>more_vert</mat-icon></button></span></h2><div cdkDropList #todoList="cdkDropList" [cdkDropListData]="todo"[cdkDropListConnectedTo]="[doneList, inprogressList]"class="example-list"(cdkDropListDropped)="drop($event)"><div class="example-box" *ngFor="let item of todo" cdkDrag>{{item}}</div></div></div>`
    document.body.append(test)
  }





  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

