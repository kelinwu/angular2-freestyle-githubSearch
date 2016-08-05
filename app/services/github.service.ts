import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username = 'kelinwu';
    private client_id = '8b3dd034fbd63166c343';
    private client_secret = '1752ae61e7476fab8be22db25b4df9066fe8c08e';

    constructor(private _http: Http) {
        console.log('github service start...');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username:any){
        this.username = username;
    }

}