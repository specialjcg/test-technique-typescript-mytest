import {Component, OnInit} from '@angular/core';
import {ResultModel} from '../result/model/result.model';
import {ResultService} from '../result/result.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-frontresult',
  templateUrl: './frontresult.component.html',
  styleUrls: ['./frontresult.component.less'],
})
export class FrontresultComponent implements OnInit {
  listOfResult: Array<ResultModel> = [];
  displaycard = false;
  saveIsseen = false;
  selectedResultModel: ResultModel = {
    id: null,
    idOwner: null,
    idRecipients: [],
    isSeen: false,
    eventResults: [],
    contentOfResult: '',
  };
  constructor(public resultService: ResultService) {}

  ngOnInit() {
    this.displaycard = false;
  }

  addresult() {
    let index = 1;
    if (
      this.resultService.getAllResult().length !== 0 &&
      this.selectedResultModel.idOwner!==null
    ) {
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
  checkSeen(result: ResultModel) {
    if (!result.isSeen) {
      this.resultService.seenResult(result.id);
    } else {
      this.resultService.unseenResult(result.id);
    }
    this.listOfResult = this.resultService.getAllResult();
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
  afficherEvent() {
    this.resultService.displaycard = !this.resultService.displaycard;
  }
  afficherRecipient(resultRecipien: ResultModel) {
   this.selectedResultModel.idRecipients = resultRecipien.idRecipients;
    }
}
