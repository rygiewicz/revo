import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EMPTY_FILTERS, FilterParams } from '../../_data/service.model';

@Injectable({
  providedIn: 'root',
})
export class InstanceService {
  private filterParams$ = new BehaviorSubject(EMPTY_FILTERS);

  constructor() {}

  setFilterParams(params: FilterParams): void {}
}
