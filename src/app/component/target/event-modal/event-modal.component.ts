import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FormGroup, FormControl,Validators, AbstractControl, FormBuilder} from '@angular/forms';

import {Subscription} from 'rxjs';
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateStruct,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../event.service';
import { TranslateService } from '@ngx-translate/core';
import { EventItems } from 'src/app/models/models.model';

@Component({
  selector: 'event-event-log-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class EventModalComponent implements OnInit, OnDestroy {
  @Input() public mod: string;
  @Input() public event: EventItems;  
  model: NgbDateStruct;
  dateString: string;
  addEditForm: FormGroup;
  submited: boolean = false;
  specEventResponSubscr: Subscription;


  constructor(
     public activeModal: NgbActiveModal,
     public eventService: EventService,
     private ngbDateParserFormatter: NgbDateParserFormatter,
     public translate: TranslateService,
     private _formBuilder: FormBuilder
  ) {

    
    
  }





  
  ngOnInit(): void {

     this.addEditForm =this._formBuilder.group(
       {
        name: new FormControl(null, [Validators.required]),//, [Validators.required]
        description: new FormControl(null,[Validators.required]),//, [Validators.required]
        startDate: new FormControl(new Date(), [Validators.required]),//, [Validators.required]
       }
     );




    this.loadInfo();
  }



  onSelectDate(date: NgbDateStruct): void {

      this.model = date;
      this.dateString = this.ngbDateParserFormatter.format(date);
 
  }

  ngOnDestroy(): void {
    if (this.specEventResponSubscr) 
    this.specEventResponSubscr.unsubscribe();
  }

  loadInfo(): void {

    if (this.mod === 'Update') {
      this.specEventResponSubscr = this.eventService
        .getSpecificEvent(this.event._id)
        .subscribe(event => {
          this.addEditForm.patchValue({
            name: event.name,
            description: event.description,
            startDate: new Date(event.startDate)     

          });
        });
    }
    
  }




 

  close(): void {
    this.activeModal.close();
  }


  onSubmit(): void {
    this.submited = true;
    if (this.addEditForm.valid) { 
      if (this.mod === 'Create') {     
        this.eventService
          .createEvent(this.addEditForm.value)
          .subscribe((response) => {
            this.activeModal.close(response);
          });        
      } else if(this.mod === 'Update'){
        this.eventService
          .updateEvent(this.addEditForm.value, this.event._id)
          .subscribe((response) => {
            this.activeModal.close(true);
        });  
      }
    }
  }

  translateKeyword(): string {
    let returnKeyword: string;
    if (this.mod === 'Create') {       
         this.translate.get('createEvent.create').subscribe((text:string) => {returnKeyword = text});        
    } else {
       this.translate.get('createEvent.update').subscribe((text:string) => {returnKeyword = text});
    }
    return returnKeyword;
  }

}


