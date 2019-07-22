import {Injectable} from '@angular/core';
import {ResultModel} from './model/result.model';
import {ResultEventModel} from './model/result-event.model';
import {unusedValueExportToPlacateAjd} from '@angular/core/src/render3/interfaces/injector';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  listOfResult: Array<ResultModel> = [];
  constructor() {}

  date: Date;
  // contournement pour distingueur la création des dates entre deux instances pendant les tests
  private waitsimul() {
    for (let i = 0; i < 10000000; i++) {}
  }
  public addResult(newResult: ResultModel): boolean {
    if (
      this.listOfResult.filter(result => result.id === newResult.id).length ===
      0
    ) {
      this.date = new Date(
        performance.timing.navigationStart + performance.now()
      );
      const eventCreated: ResultEventModel = {
        id: 'created',
        idOwner: newResult.idOwner,
        createdAt: this.date,
      };
      newResult.eventResults.push(eventCreated);

      this.waitsimul();
      this.listOfResult.push(newResult);
      return true;
    } else {
      return false;
    }
  }

  public seenResult(idResult: number): boolean {
    if (
      this.listOfResult.filter(result => result.id === idResult).length !== 0
    ) {
      this.date = new Date(
        performance.timing.navigationStart + performance.now()
      );
      const eventSeen: ResultEventModel = {
        id: 'seen',
        idOwner: this.listOfResult.filter(result => result.id === idResult)[0]
          .idOwner,
        createdAt: this.date,
      };
      this.waitsimul();
      this.listOfResult.filter(
        result => result.id === idResult
      )[0].isSeen = true;
      this.listOfResult
        .filter(result => result.id === idResult)[0]
        .eventResults.push(eventSeen);
      return true;
    } else {
      return false;
    }
  }

  public unseenResult(idResult: number): boolean {
    if (
      this.listOfResult.filter(result => result.id === idResult).length !== 0
    ) {
      this.date = new Date(
        performance.timing.navigationStart + performance.now()
      );
      const eventUnseen: ResultEventModel = {
        id: 'unseen',
        idOwner: this.listOfResult.filter(i => i.id === idResult)[0].idOwner,
        createdAt: this.date,
      };
      this.waitsimul();
      this.listOfResult.filter(
        result => result.id === idResult
      )[0].isSeen = false;
      this.listOfResult
        .filter(result => result.id === idResult)[0]
        .eventResults.push(eventUnseen);
      return true;
    } else {
      return false;
    }
  }

  public getAllResult(): Array<ResultModel> {
    return this.listOfResult;
  }

  public getAllResultSeen(): Array<ResultModel> {
    return this.listOfResult.filter(result => result.isSeen === true);
  }

  public getAllResultUnSeen(): Array<ResultModel> {
    return null;
  }

  public numberOfEventSeen(): number {
    return null;
  }
}
