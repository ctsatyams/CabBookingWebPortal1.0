import { Component, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CabDetailsService } from './cabDetails.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'BookingDetails',
    templateUrl: 'app/dashboard/view/bookingDetails.html'
})

export class BookingDetailsComponent {


    public cabList: any;
    message: any;
    name: string;
    mobileNo: string;
    CTId: string;
    date: any;
    cabTime: string;
    vehicleNo: string;
    route:string;
driver:any;
    driverForm: FormGroup;


    constructor(private router: Router, private changeRef: ChangeDetectorRef, private appRef: ApplicationRef, private cabDetailsService: CabDetailsService) {
        this.fetch();

        this.date = new Date();
        this.cabTime = this.cabDetailsService.cabTime;
        this.route = this.cabDetailsService.route;
        this.validationForm();
    }

    validationForm() {

        this.driverForm = new FormGroup({
            mobileNo: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$")])),
            name: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*")])),
            vehicleNo: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9-]*")]))
        });
    }
    addDriverDetail() {
        let data: any = {};

        data.id = this.cabDetailsService.cabId;
        data.driverName = this.name;
        data.mobileNo = this.mobileNo;
        data.vehicleNo = this.vehicleNo;
        console.log(data);

        this.cabDetailsService.addDriver(data).subscribe(
            message => { this.message = message, this.fetch() },
            error => { console.error(error) },
        )


    }
    fetch(): void {
        let param: any = {
            id: this.cabDetailsService.cabId
        }
        this.cabDetailsService.getDetailById(param).subscribe(
            cabTimeList => { this.cabList = cabTimeList[0],this.driver=cabTimeList[1][0],  this.name=this.driver.DriverName,
                this.vehicleNo=this.driver.VehicleNo,this.mobileNo=this.driver.Mobile ,console.log(cabTimeList) },
            error => { console.error(error) });
    }

    public storeCabId(cabId: any): void {
        this.cabDetailsService.cabId = cabId;
    }
    public print(): void {

        Observable
            .interval(1000);
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
  
          </style>

        </head>

    <body onload="window.print();window.close();">


    ${printContents}</body>
      </html>`
        );
        popupWin.document.close();
    }
    cancelBooking(cabid: number) {
        console.log(cabid);
        this.cabDetailsService.cancelCabBooking({ Tid: cabid }).subscribe(
            cabBookedList => { this.router.navigateByUrl('/dashboard'); },
            error => { console.error(error) }, () => {

            });
    }
}