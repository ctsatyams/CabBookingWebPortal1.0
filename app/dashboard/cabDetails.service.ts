import { Injectable, OnInit, Inject } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CabDetailsService {
    cabId: number = null;
    cabTime: string;
    route:string;
    /**
    * this is used for extract Data in json formate for GET Methode of rest service  call
    * if rest return sucess true we forword response to component class
    * other wise if any error then we forword error message to component class
    */
    HostName: string = 'http://cabdataapi.azurewebsites.net';
    private extractData(res: Response) {

        let body = res.json();

        return body.recordsets || {};

    }

    /**this is used for Handle error ,if any error occur during rest service call this method will handle*/
    private handleError(error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    /**contructor use for injecting http dependancy to component class*/
    constructor( @Inject(Http) public http: Http) { }

    /**
     * this method is used for fetching OrganizationList
     */
    getCabTimeList(data: any): Observable<any[]> {
        let url: string = this.HostName + "/booking";
        let params = new URLSearchParams();

        for (let key in data) {
            params.set(key, data[key]);
        }
        let options = new RequestOptions({
            search: params
        });

        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    getAllCabList(data: any): Observable<any[]> {

        let url: string = this.HostName + "/getAllBooking";
        let params = new URLSearchParams();

        for (let key in data) {

            params.set(key, data[key]);
        }
        let options = new RequestOptions({
            search: params
        });
        //let body = JSON.stringify(param);
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    getDetailById(data: any): Observable<any[]> {
        console.log(data);
        let url: string = this.HostName + "/getDetailById";
        let params = new URLSearchParams();

        for (let key in data) {

            params.set(key, data[key]);
        }
        let options = new RequestOptions({
            search: params
        });

        //let body = JSON.stringify(param);
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    getCabBookingList(): Observable<any[]> {
        let url: string = this.HostName + "/bookingList";

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    addDriver(data): Observable<any[]> {

        let url: string = this.HostName + "/addDriver";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let Option = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        console.log(body);
        return this.http.post(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CabBooking(data): Observable<any[]> {

        let url: string = this.HostName + "/booking";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let Option = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        console.log(body);
        return this.http.post(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    cancelCabBooking(data): Observable<any[]> {
        console.log(data);

        let url: string = this.HostName + "/booking";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let Option = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        debugger;
        console.log(body);
        return this.http.put(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };

}