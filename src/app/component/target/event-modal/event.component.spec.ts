import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfirmDialogService } from '../../modal/confirm-dialog/confirm-dialog.service';
import { SharedModule } from '../../shared/shared.module';
import { EventComponent } from '../event.component';
import { EventModalComponent } from './event-modal.component';


fdescribe('EventModalComponent', () => {
  let component: EventModalComponent;
  let fixture: ComponentFixture<EventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        SharedModule,
        TranslateModule.forRoot({
                    loader: {
                      provide: TranslateLoader,
                      useClass: TranslateFakeLoader
                    }
                  }),
          NgbModule,
          FormsModule,
          ReactiveFormsModule 
        ],
      providers: [ConfirmDialogService,TranslateService, NgbActiveModal,
        NgbModal],
      declarations: [ EventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
