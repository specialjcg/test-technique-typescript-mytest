import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResultService} from '../result/result.service';
import {ResultModel} from '../result/model/result.model';
import {ResultEventModel} from '../result/model/result-event.model';

@Component({
  selector: 'app-vueevent',
  templateUrl: './vueevent.component.html',
  styleUrls: ['./vueevent.component.less'],
})
export class VueeventComponent implements OnInit {
  eventSelectioned: ResultEventModel[] = [
    {
      id: '', // created | received | seen
      idOwner: null,
      createdAt: null,
    },
  ];
  
  constructor(
    private route: ActivatedRoute,
    public resultService: ResultService
  ) {
    this.route.paramMap.subscribe(paramMap => {
      this.getResult();
    });
  }

  ngOnInit() {

       this.getResult();
  }
  getResult(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.resultService.getAllResult().length !== 0) {
      this.eventSelectioned = this.resultService
        .getAllResult()
        .filter(result => result.id === id)[0].eventResults;
    }
  }
}
