import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Header } from 'ionic-angular';

@Injectable()
export class PostProvider {
    server: string = 'http://localhost/crud/'

constructor(public http:Http){

}

postData(body,file){
    let type ="application/json; charset-UTF-8";
    let headers = new Headers({'Content-Type': type});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(this.server + file, JSON.stringify(body), options)
    //.map(res=>res.json());
    .map((res:Response)=>res.text());
}


}
