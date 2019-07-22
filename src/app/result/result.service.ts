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

  public addResult(newResult: ResultModel): boolean {
    if (
      this.listOfResult.filter(result => result.id === newResult.id).length ===
      0
    ) {
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
      this.listOfResult.filter(
        result => result.id === idResult
      )[0].isSeen = true;

      return true;
    } else {
      return false;
    }
  }

  public unseenResult(idResult: number) {
    this.listOfResult.filter(
      result => result.id === idResult
    )[0].isSeen = false;
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
