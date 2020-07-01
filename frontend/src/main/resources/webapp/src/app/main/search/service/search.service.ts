import { OntimizeEEService, Observable } from 'ontimize-web-ngx';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { CONFIG } from '../../../app.config';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService extends OntimizeEEService {

    searchItems(filter: any, columns: string) {
        const url = CONFIG.apiEndpoint + '/';
        var options = {
            headers: this.buildHeaders()
        };
        var body = JSON.stringify({
            filter: filter,
            columns: columns,
        });
        // Opción 1 - usando métodos de ontimize para parsear la respuesta
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.post(url, body, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        console.log(dataObservable);
        return dataObservable.pipe(share());

    }

    newestAlbums() {
        const url = CONFIG.apiEndpoint + '/albums/newestAlbums';
        var options = {
            headers: this.buildHeaders()
        };
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.get(url,options).subscribe(function (resp) { 
                self.parseSuccessfulQueryResponse(resp, _innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); });
        });
        return dataObservable.pipe(share());
    }

    buildHeaders () {
        const appData = JSON.parse(localStorage.getItem(CONFIG.uuid));
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + appData.session.id
        });
    }
}
