import {Component, OnInit} from '@angular/core';
import {ResultModel} from '../result/model/result.model';
import {ResultService} from '../result/result.service';
@Component({
  selector: 'app-frontresult',
  templateUrl: './frontresult.component.html',
  styleUrls: ['./frontresult.component.less'],
})
export class FrontresultComponent implements OnInit {
  listOfResult: Array<ResultModel> = [];

  selectedResultModel: ResultModel = {
    id: null,
    idOwner: null,
    idRecipients: [],
    isSeen: false,
    eventResults: [],
    contentOfResult: '',
  };
  constructor(public resultService: ResultService) {}

  ngOnInit() {}

  addresult() {
    let index = 1;
    if (this.resultService.getAllResult().length !== 0) {
      index =
        Math.max(
          ...this.resultService.getAllResult().map(result => result.id),
          0
        ) + 1;
    }
    this.selectedResultModel.id = index;
    if (this.resultService.addResult(this.selectedResultModel)) {
      this.selectedResultModel = {
        id: null,
        idOwner: null,
        idRecipients: [],
        isSeen: false,
        eventResults: [],
        contentOfResult: '',
      };
      this.listOfResult = this.resultService.getAllResult();
    }
  }
  addRecipient() {
    this.selectedResultModel.idRecipients.push(0);
  }
  removeRecipient(index: number) {
    this.selectedResultModel.idRecipients.splice(index, 1);
  }
  checkSeen(idResult: number, check: boolean) {
    if (check) {
      this.resultService.seenResult(idResult);
    } else {
      this.resultService.unseenResult(idResult);
    }
  }
  allResult() {
    this.listOfResult = this.resultService.getAllResult();
  }
  allSeenResult() {
    this.listOfResult = this.resultService.getAllResultSeen();
  }
  allunSeenResult() {
    this.listOfResult = this.resultService.getAllResultUnSeen();
  }
}
