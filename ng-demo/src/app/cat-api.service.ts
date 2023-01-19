import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { voteDTO } from 'src/models/voteDTO';
import { Observable } from 'rxjs';
import { apikey, apiroot } from 'src/api-key';

interface CatObj {
  id : string;
  url : string;
}

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) { }

  foo : string = 'bar';

  vote(args : voteDTO) : Observable<CatObj> {
    // object destructuring
    const {id, amount} = args;
    //the above line does the same thing as the below line
    // const id = args.id, amount = args.amount;
    const payload = {"image_id": id, "value": amount}

    return this.http.post(
      `${apiroot}/votes`, 
      payload, 
      {
          headers: {
              'x-api-key': apikey
          }
        }) as Observable<CatObj>;
  }

  getCats(numCats : number) : Observable<any> {
    const url = `${apiroot}/images/search?limit=${numCats}&has_breeds=1`
    return this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    });
  }
}
