import { Component, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CabDetailsService } from './cabDetails.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/view/dashboard.html'
})

export class DashboardComponent {
    bookingForm: FormGroup;
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
        this.fetch();
        this.validationForm();
    }
    validationForm() {

        this.bookingForm = new FormGroup({
            mobileNo: new FormControl('', Validators.compose([Validators.required])),
            name: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*")])),
            ctid: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9]*")])),
        });

    }

    fetch(): void {
        let param: any = {
            Action: 'GETAll'
        }

        this.cabDetailsService.getAllCabList(param).subscribe(
            cabTimeList => { this.cabList = cabTimeList[0], console.log(this.cabList) },
            error => { console.error(error) });
    }

    public storeCabId(cabId: number, cabTime: string,FromStation:string,ToStation:string): void {
        this.cabDetailsService.cabId = cabId;
        this.cabDetailsService.cabTime = cabTime;
        this.cabDetailsService.route = (FromStation +" - "+ToStation);
        console.log(this.cabDetailsService.route);
    }

    public getDetail(cabId: any, cabTime: any,FromStation:string,ToStation:string): void {
        this.cabDetailsService.cabId = cabId;
        this.cabDetailsService.cabTime = cabTime;
        this.router.navigate(['/bookingDetail']);
             this.cabDetailsService.route = (FromStation +" - "+ToStation);
        console.log(this.cabDetailsService.route);
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