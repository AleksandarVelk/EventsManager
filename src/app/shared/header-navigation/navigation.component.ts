import { Component, AfterViewInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';

import {TranslateService} from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { GeneralHelperServiceService } from 'src/app/services/general-helper-service.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  public showSearch = false;
  user:any;         
  selectLang:string;
  TransLang=[];
  constructor(private modalService: NgbModal,
    private authService: AuthService,
    public translate: TranslateService,
    public helperService: GeneralHelperServiceService){

    if (helperService.getLangStorageSession()) {    
      this.selectLang = helperService.getLangStorageSession(); 
      translate.use(helperService.getLangStorageSession());
    } else {
      helperService.setLangStorageSession('en');
      translate.setDefaultLang('en');
    }
    translate.addLangs(['en', 'mk']);


    if (this.authService.getLocalStorageSession()) {
      this.user = JSON.parse(this.authService.getNewUserLocalStorageSession());
    }

    }
    setTransLanguage(){
      this.translate.use(this.selectLang);
      this.helperService.setLangStorageSession(this.selectLang);
      }
    getTransLanguage(){
      this.TransLang=[...this.translate.getLangs()];
    }
    ngOnInit(){
      this.getTransLanguage();
    }
                
  logout() {
    this.authService.logoutUser();
  }
  ngAfterViewInit() {}
}
