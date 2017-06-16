
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
declare var $: any;

@Injectable()
export class EventHttpService extends Http {
    public pendingRequests: number = 0;
    public showLoading: boolean = false;

       opts = {
                lines: 11 // The number of lines to draw
                , length: 9 // The length of each line
                , width: 2 // The line thickness
                , radius: 13 // The radius of the inner circle
                , scale: 1 // Scales overall size of the spinner
                , corners: 0.2 // Corner roundness (0..1)
                , color: '#000' // #rgb or #rrggbb or array of colors
                , opacity: 0.1 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '50%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            }

    constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        console.log("In the intercept routine..");
        this.pendingRequests++;
        return observable
            .catch((err: Response, caught: Observable<Response>) => {
                if (err.status === 401) {
                    return Observable.throw("401 Unauthorized");
                }
                return Observable.throw(caught);
            })
            .do((res: Response) => {
                console.log("Response: " + res);
                this.turnOnModal();
            }, (err: any) => {
                this.turnOffModal();
                console.log("Caught error: " + err);
            })
            .finally(() => {
                console.log("Finally.. delaying, though.")
                var timer = Observable.timer(1000);
                timer.subscribe(t => {
                    this.turnOffModal();
                });
            });
    }

    private turnOnModal() {
        if (!this.showLoading) {
            this.showLoading = true;
          
            $('body').spin("modal", this.opts);
            console.log("Turned on modal");
        }
        this.showLoading = true;
    }

    private turnOffModal() {
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
            if (this.showLoading) {
                $('body').spin("modal", this.opts);
            }
            this.showLoading = false;
        }
        console.log("Turned off modal");
    }
}