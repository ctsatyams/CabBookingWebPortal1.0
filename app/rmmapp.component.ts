import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { AuthService } from './dashboard/services/auth.service'

@Component({
    selector: 'rmmapp',
    templateUrl: 'app/view/app.component.html'
})

export class AppComponent {
    private title: string = "Rules Management Module";
    private productLogo: string = "assets/images/H-Scale_logo.jpg";
    private classLogo: string;
    private urlWithoutMenuNFooter: string[] = [];

    constructor( @Inject(Router) private router: Router,
        
        @Inject(ActivatedRoute) private route: Router) {

    }

    ngOnInit() {

    }

    showMenuBarNFooter(url: string): boolean {
        if (url == "" || url == "/") {
            return true;
        } else {
            let filter = this.urlWithoutMenuNFooter.filter((menuUrl: string) => url.indexOf(menuUrl) != -1);
            return !(filter && filter.length > 0);
        }
    }

    checkModuleActive(url: string, checkFor: string): boolean {
        if (url == "" || url == "/") {
            return false;
        } else {
            if (url.split('/')[1] === checkFor) {
                return true;
            } else {
                return false;
            }
        }
    }

    checkTitle(url: string) {
        if (url.indexOf('data-quality') > 0) {
            this.title = "Data Quality Module";
        } else {
            this.title = "Natural language processing";
        }
        return true;
    }


    checkLogo(url: string) {

        this.productLogo = "assets/images/CitiusTech_logo.png";
        this.classLogo = "bi_logo";

        return true;
    }


}

