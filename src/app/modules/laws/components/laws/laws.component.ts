import { Component, OnInit } from '@angular/core';
import { Law } from '../../models/law.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss']
})
export class LawsComponent implements OnInit {
  law$: Observable<Law[]>;
  constructor(private store: Store<fromStore.DocumentsState>) {}

  ngOnInit() {
    this.law$ = this.store.select(fromStore.getAllPizzas);
    // this.store.select<any>('documents').subscribe(state => {
    //   console.log(state);
    // });
  }
}
