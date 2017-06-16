import { Component, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CabDetailsService } from './cabDetails.service';
import { Router } from '@angular/router';
@Component({
    selector: 'BookingDetails',
    templateUrl: 'app/dashboard/view/bookingDetails.html'
})

export class BookingDetailsComponent {
     
    
    public cabList: any
    name: string;
    mobileNo: string;
    CTId: string;

    constructor(private router: Router, private changeRef: ChangeDetectorRef, private appRef: ApplicationRef, private cabDetailsService: CabDetailsService) {
        this.fetch();
    }

    fetch(): void {
        let param: any = {
            id: this.cabDetailsService.cabId
        }
        this.cabDetailsService.getDetailById(param).subscribe(
            cabTimeList => { this.cabList = cabTimeList[0], console.log(this.cabList[0]) },
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