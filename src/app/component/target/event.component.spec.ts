import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventComponent } from './event.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ConfirmDialogService } from '../modal/confirm-dialog/confirm-dialog.service';
import { SharedModule } from '../shared/shared.module';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';


fdescribe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

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
                  })
        ],
      providers: [ConfirmDialogService,TranslateService],
      declarations: [ EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
