import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Instance } from './_data/instance.model';
import { InstanceService } from './_data/instance.service';
import { map } from 'rxjs';
import { FiltersComponent } from './filters/filters.component';
import { AsyncPipe } from '@angular/common';

type ColumnName = keyof Instance;

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [MatTableModule, FiltersComponent, AsyncPipe],
  templateUrl: './instance.component.html',
  styleUrl: './instance.component.scss',
})
export class InstanceComponent {
  displayedColumns: ColumnName[] = ['id', 'status', 'name', 'region'];
  instanceListData$ = this.instanceService
    .getInstanceList()
    .pipe(map((value) => value.data || []));
  instanceNames$ = this.instanceService.getInstanceNames();

  constructor(private instanceService: InstanceService) {}
}
