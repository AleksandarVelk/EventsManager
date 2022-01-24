import { Component, OnInit } from '@angular/core';
import { EventModalComponent } from './event-modal/event-modal.component';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { EventService } from './event.service';
import { EventItems } from 'src/app/models/models.model';
import { ConfirmDialogService } from '../modal/confirm-dialog/confirm-dialog.service';
import { LazyLoadEvent } from 'src/app/models/lazyLoadEvent.model';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

public page: number = 0;
public pageSize: number = 4;
public collectionSize: number = 0;

eventsList:  Array<EventItems> = [];

pagination = new LazyLoadEvent();


menuArrayItems: Array<any> = [
  { name: 'Edit', func: 'edit' },
  { name: 'Delete', func: 'delete' }
];

  private eventObj: EventItems;
  private configModal: object; 


  constructor(
              private config: NgbModalConfig,
              private modalService: NgbModal,
              private eventsService: EventService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.configModal = {
      scrollable: true,
      centered: false,
      backdropClass: 'light-blue-backdrop',
      size: 'lg',
      windowClass: 'modalDL'
    };   

  }


  getEvents():void { 

   this.eventsService.getEvents().subscribe((res) => {
    this.eventsList = res;
      this.collectionSize = this.eventsList.length; //-this.pageSize izbrisi go od koga ke go smenat pagginacijata sega nivnoto pocnuva od first:0 a vo nasiov slucaj treba da pocne so 4 

    });
  }

  getDataPerStep(): void{
    this.pagination.loadtemplate.lazyLoadEvent.first = this.page*this.pageSize;
    this.pagination.loadtemplate.lazyLoadEvent.rows = this.pageSize;
    this.getEvents();   
   }
  
  returnMod(item: any): void {
    switch (item.mod) {
      case 'delete': {
        this.deleteEvent(item.obj);
        break;
      }
      case 'edit': {
        this.editEvent(item.obj);
        break;
      }
      default: {
        break;
      }
    }
  }


  private editEvent(event: any): void {
    const modalRef = this.modalService.open(
      EventModalComponent,
      this.configModal
    );
    modalRef.componentInstance.event = event;
    modalRef.componentInstance.mod = 'Update';
    modalRef.result.then(result => {
      
      if (result) {
        this.getEvents();
      }
  });

  }

  private deleteEvent(obj: any): void {
    this.eventObj = obj;
    this.confirmDialogService.confirmThis(
      'Are you sure you want to delete the selected event?',
      this.eventObj.name,
      'Delete',
      this.deleteSpecificEvent.bind(this),
      () => {}
    );
  }

  private deleteSpecificEvent(this: this): void {
    this.eventsService.deleteEvent(this.eventObj._id).subscribe((res) => {
      // if (res) {
        const index = this.eventsList.indexOf(this.eventObj, 0);
        if (index > -1) {
          this.eventsList.splice(index, 1);
          this.getEvents();
        }
      // }
    });
  }
  

  addNewChild(obj: any, mainBtn?: boolean): void {
    const modalRef = this.modalService.open(
      EventModalComponent,
      this.configModal
    );
    modalRef.componentInstance.mod = 'Create';
    //modalRef.componentInstance.decisionLog = obj;
    modalRef.result.then(result => {
      if (result) {
        this.getEvents();
      }
    });
  }
  



}
