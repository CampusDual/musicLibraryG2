import { OntimizeEEService, Observable } from 'ontimize-web-ngx';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { CONFIG } from '../../../app.config';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService extends OntimizeEEService {
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

    newestArtists() {
        const url = CONFIG.apiEndpoint + '/artists/newestArtists'; 
        var options = {
            headers: this.buildHeaders()
        };
        var self = this;
        var dataObservable = new Observable(function (_innerObserver) {
            self.httpClient.get(url, options).subscribe(function (resp) {
                self.parseSuccessfulQueryResponse(resp,_innerObserver);
            }, function (error) {
                self.parseUnsuccessfulQueryResponse(error, _innerObserver);
            }, function () { return _innerObserver.complete(); })
        })
        return dataObservable.pipe(share());
    }

    newestPlaylists(){
            const url = CONFIG.apiEndpoint + '/playlists/newestPlaylists'; 
            var options = {
                headers: this.buildHeaders()
            };
            var self = this;
            var dataObservable = new Observable(function (_innerObserver) {
                self.httpClient.get(url, options).subscribe(function (resp) {
                    self.parseSuccessfulQueryResponse(resp,_innerObserver);
                }, function (error) {
                    self.parseUnsuccessfulQueryResponse(error, _innerObserver);
                }, function () { return _innerObserver.complete(); })
            })
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
