import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { voteDTO } from 'src/models/voteDTO';
import { Observable } from 'rxjs';
import { apikey } from 'src/api-key';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) { }
  private apiroot : string = "https://api.thecatapi.com/v1"
  vote(args : voteDTO) : Observable<any> {
    // object destructuring
    const {id, amount} = args;
    //the above line does the same thing as the below line
    // const id = args.id, amount = args.amount;
    const payload = {"image_id": id, "value": amount}

    return this.http.post(
      `${this.apiroot}/votes`, 
      payload, 
      {
          headers: {
              'x-api-key': apikey
          }
        });
  }

  getCats(numCats : number) : Observable<any> {
    const url = `${this.apiroot}/images/search?limit=${numCats}&has_breeds=1`
    return this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    });
  }
}
