import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Todo } from '../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms'


/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit{
  todo = [];
  tasks: Todo[];
  taskTitle: string;
  taskID: number;
  taskDescription: string;
  beforeEditCache: string;

  ngOnInit() {
    this.anyRemainingModel = true;
    this.filter = "all";
    this.beforeEditCache = '';
    this.taskID = 2;
    this.taskTitle = '';
    this.tasks = [
      {
        'id': 1,
        'title': 'Make a todo list!',
        description: "Need to make a todo list!"
        'completed': false,
        'edit': false
      }
    ]
  }
  addTask(): void {
    if(this.taskTitle.trim().length === 0){return;}

    this.tasks.push({
      id: this.taskID,
      title: this.taskTitle,
      taskDescription: this.taskDescription,
      completed: false,
      edit:false
    })
    this.taskTitle = '';
    this.taskID++;
  }

  deleteTask(id:number): void {
    this.tasks = this.tasks.filter(task => task.id !== id )
  }
  editTask(task: Todo): void{
    this.beforeEditCache = task.title;
    task.edit = true;
  }
  doneEdit(task: Todo): void {
    if(this.taskTitle.trim().length === 0){task.title = this.beforeEditCache;}
    task.edit = false;
  }
  cancleEdit(task: Todo): void {
    task.title = this.beforeEditCache;
    task.edit = false;
  }


  // ///////////////////////////////////////////////////////
  


  
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
}




// export class BoardComponent implements OnInit {

//   // //////////////TASKS//////////////////
//     /* epmty arr for the task div*/
//      public items = []; 
//      /* A two-way binding pushes task onto div */
//      public newTask;    
   
//      /* checks that input not empty */
//      public addToList() { 
//          if (this.newTask.trim().length === 0 ) { 
//          } 
//          else { 
//              this.items.push(this.newTask); 
//              this.newTask = ''; 
//          } 
//      }    
//      /* This function takes to input the 
//         task, that has to be deleted*/
//      public deleteTask(listID,taskID) { 
//          this.items.splice(taskID, 1); 
//       }; 
// ///////////////////List/////////////////
    /* An empty array that is responsible 
     to add a division */
    //  public lists = []; 

    //  /* A two-way binding performed which 
    //     pushes text on division */
    //  public newList; 
   
   
    //  /* When input is empty, it will 
    //     not create a new division */
    //  public addNewList() { 
    //      if (this.lists.newList == '') { 
    //      } 
    //      else { 
    //          this.lists.push(this.newList); 
    //          this.newList = ''; 
    //      } 
    //  }    
    //  /* This function takes to input the 
    //     List, that has to be deleted*/
    //  public deleteList(index) { 
    //      this.lists.splice(index, 1); 
    //   }; 


  // done = [];

  // inprogress = [];

//   getNewElement(){
//     let test = document.createElement('div')
//     test.innerHTML = `<div class="example-container"><h2>To do <span><button mat-icon-button><mat-icon>more_vert</mat-icon></button></span></h2><div cdkDropList #todoList="cdkDropList" [cdkDropListData]="todo"[cdkDropListConnectedTo]="[doneList, inprogressList]"class="example-list"(cdkDropListDropped)="drop($event)"><div class="example-box" *ngFor="let item of todo" cdkDrag>{{item}}</div></div></div>`
//     document.body.append(test)
//   }

//   drop(event: CdkDragDrop<string[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(event.previousContainer.data,
//                         event.container.data,
//                         event.previousIndex,
//                         event.currentIndex);
//     }
//   }
//   constructor() { }

//   ngOnInit(): {
//     // this.Lists= [];
//   }

// }

// ////////////////////////////////////////////////////////////


