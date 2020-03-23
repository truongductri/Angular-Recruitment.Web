import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TalentPoolService } from './../../services/talent-pool.service';


@Component({
  selector: 'app-talent-pools-detail',
  templateUrl: './talent-pools-detail.component.html',
  styles: []
})
export class TalentPoolsDetailComponent implements OnInit {

  constructor(public service: TalentPoolService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(f?: NgForm) {
    if (f != null)
      f.form.reset();
    this.service.upsertTalentPool = {
      Code: '',
      Name: ''
    }
  }  

  onSubmit(f: NgForm) {
    if (f.form.value != null){
      this.service.upsertTalentPool = f.form.value;
    }
    this.insertRecord(f);
  }
  
  insertRecord(f: NgForm) {
    this.service.createTalentPool().subscribe(
      res =>  {
        this.resetForm(f);
        this.service.refreshList();
      },
      err => { 
        console.log(err);
      }
    )
  }


 
}



