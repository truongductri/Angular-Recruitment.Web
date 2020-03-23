import { TalentPool } from '../models/talent-pool.model';
import { UpsertTalentPool } from '../models/upsert-talent-pool.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TalentPoolService {
  talentPool: TalentPool;
  upsertTalentPool: UpsertTalentPool;
  readonly rootUrl = 'https://localhost:44356';
  listTalentPools : TalentPool[];

  constructor(private http: HttpClient) { }

  createTalentPool(){
    return this.http.post(this.rootUrl + '/talent-pools', this.upsertTalentPool);
  }
  editTalentPool(talentPoolId){
    return this.http.put(this.rootUrl + '/talent-pools/' + talentPoolId , this.upsertTalentPool);
  }
  deleteTalentPool(talentPoolId){
    return this.http.delete(this.rootUrl + '/talent-pools/' + talentPoolId);
  }

  refreshList(){
    this.http.get(this.rootUrl + 'talent-pools')
      .toPromise()
      .then(res => this.listTalentPools)
  }

  

}
