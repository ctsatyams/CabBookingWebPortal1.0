import { Component, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CabDetailsService } from './cabDetails.service';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/view/dashboard.html'
})

export class DashboardComponent {

    public cabList: any
    name: string;
    mobileNo: string;
    CTId: string;
    clock = Observable
        .interval(1000)
        .map(() => new Date());

    private title: string = "Dashboard";

    //private _lipsum: any;
    public message: any;//"detected!";

    constructor(private router: Router, private changeRef: ChangeDetectorRef, private appRef: ApplicationRef, private cabDetailsService: CabDetailsService) {
        // let LoremIpsum: any;
        // this._lipsum = new LoremIpsum();


        setTimeout(function () {
            this.message = null;
            console.log(this.message);
        }.bind(this), 1000);
        this.fetch();
    }

    fetch(): void {
        let param: any = {
            Action: 'GETAll'
        }

        this.cabDetailsService.getAllCabList(param).subscribe(
            cabTimeList => { this.cabList = cabTimeList[0], console.log(this.cabList[0]) },
            error => { console.error(error) });
    }

    public storeCabId(cabId: any): void {
        this.cabDetailsService.cabId = cabId;
    }
    public getDetail(cabId: any): void {
        this.cabDetailsService.cabId = cabId;
        this.router.navigate(['/bookingDetail']);
        //this.router.navigateByUrl('/dashboard');
    }


    bookCab() {
        let cabData: any = {};

        cabData.id = this.cabDetailsService.cabId;
        cabData.name = this.name;
        cabData.mobileNo = this.mobileNo;
        cabData.ctid = this.CTId;
        cabData.actionAfterRequest = 'GETAll'
        console.log(cabData);
        this.cabDetailsService.CabBooking(cabData).subscribe(
            message => { this.message = message, this.fetch() },
            error => { console.error(error) },
        )


    }

}