import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

//module used for routing to maintain the refresh state
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

// rmmapp components & services
import { AppComponent } from './rmmapp.component';
import { routing } from './rmmapp.route';




//sub modules
import { EventHttpService } from './services/EventHttpService'
import { ApiService } from './services/api.service'

// import { DashboardModule } from './rmmapp.dashboard.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CabDetailsService } from './dashboard/cabDetails.service';
import { BookingDetailsComponent } from './dashboard/bookingDetail.component';

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule

    ],

    exports: [

    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        BookingDetailsComponent
    ],
    entryComponents: [
        //  PopupComponent
    ],

    providers: [
        ApiService,
        CabDetailsService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: Http,
            useFactory: (backend: XHRBackend, options: RequestOptions) => {
                return new EventHttpService(backend, options);
            },
            deps: [XHRBackend, RequestOptions]
        }

    ],

    bootstrap: [AppComponent]

})

export class AppModule { }