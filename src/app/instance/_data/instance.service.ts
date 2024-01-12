import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  concat,
  delay,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import {
  EMPTY_FILTERS,
  FilterParams,
  RS_ERROR,
  RS_LOADING,
  RS_SUCCESS,
  RequestState,
} from '../../_data/service.model';
import { Instance } from './instance.model';
import { instanceListMock } from './instance.mock';
import { adaptInstanceList } from './instance.adapter';

@Injectable({
  providedIn: 'root',
})
export class InstanceService {
  private filterParams$ = new BehaviorSubject(EMPTY_FILTERS);
  private instanceList$: Observable<RequestState<Instance[]>>;
  private instanceNames$: Observable<string[]>;

  constructor() {
    this.instanceList$ = this.filterParams$.pipe(
      distinctUntilChanged(),
      switchMap((params) => {
        return concat(of(RS_LOADING()), this.fetchInstanceList(params));
      })
    );

    this.instanceNames$ = this.fetchInstanceList({}).pipe(
      map((response) => {
        const nameList = (response.data || []).map((item) => item.name);

        return Array.from(new Set(nameList));
      })
    );
  }

  setFilterParams(params: FilterParams): void {
    this.filterParams$.next(params);
  }

  getInstanceList() {
    return this.instanceList$;
  }

  getInstanceNames() {
    return this.instanceNames$;
  }

  private fetchInstanceList(
    params: FilterParams
  ): Observable<RequestState<Instance[]>> {
    return of(instanceListMock).pipe(
      delay(3000),
      map((response) => {
        return RS_SUCCESS(adaptInstanceList(response));
      }),
      catchError((err) => {
        return of(RS_ERROR(err.message));
      })
    );
  }
}
