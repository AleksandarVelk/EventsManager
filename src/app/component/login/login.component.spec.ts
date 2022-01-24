/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';


fdescribe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        SharedModule,
        NgbModule,
      ],
      providers: [NgbActiveModal, AuthService, NgbModal],
      declarations: [LoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    // authService = TestBed.get(AuthService);

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('needsLogin returns true when the user has not been authenticated', () => {
  //     spyOn(authService, 'isAuthenticated').and.returnValue(true);
  //     expect(component.userAuth()).toBeTruthy();
  //     expect(authService.isAuthenticated).toHaveBeenCalled();
  // });

  // it('needsLogin returns false when the user has been authenticated', () => {
  //     spyOn(authService, 'isAuthenticated').and.returnValue(true);
  //     expect(component.needsLogin()).toBeFalsy();
  //     expect(authService.isAuthenticated).toHaveBeenCalled();
  // });
});