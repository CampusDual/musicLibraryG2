import { OntimizeEEService, Observable } from 'ontimize-web-ngx';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { CONFIG } from '../../../app.config';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService extends OntimizeEEService {
    getUser(id: number) {
        let userRequestBody = {
            "filter": { 
            "user_id": id
            },
            "columns": [
                "user_id",
                "user_name",
                "user_surname",
                "user_email",
                "user_creation_date",
                "user_birth_date"
            ]
        }

        const url = CONFIG.apiEndpoint + '/users/user/search';
        var options = {
            headers: this.buildHeaders()
        };
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url,JSON.stringify(userRequestBody),options).subscribe(function (resp) { 
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share());
    }
    getUserByEmail(email: string) {
        let userRequestBody = {
            "filter": { 
            "user_email": email
            },
            "columns": [
                "user_id",
                "user_name",
                "user_surname",
                "user_email",
                "user_creation_date",
                "user_birth_date"
            ]
        }

        const url = CONFIG.apiEndpoint + '/users/user/search';
        var options = {
            headers: this.buildHeaders()
        };
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url,JSON.stringify(userRequestBody),options).subscribe(function (resp) { 
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share());
    }
    updateUser(requestBody: any){
        const url = CONFIG.apiEndpoint + '/users/user';
        var options = {
            headers: this.buildHeaders()
        };
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.put(url,requestBody,options).subscribe(function (resp) { 
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        console.log("probando");
        return dataObservable.pipe(share());
    }
    
    buildHeaders() {
        const appData = JSON.parse(localStorage.getItem(CONFIG.uuid));
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + appData.session.id
        });
    }

}
