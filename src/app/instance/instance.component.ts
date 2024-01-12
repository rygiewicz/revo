import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Instance } from './_data/instance.model';
import { InstanceService } from './_data/instance.service';
import { map } from 'rxjs';

type ColumnName = keyof Instance;

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './instance.component.html',
  styleUrl: './instance.component.scss',
})
export class InstanceComponent {
  displayedColumns: ColumnName[] = ['id', 'status', 'name', 'region'];
  instanceListData$ = this.instanceService
    .getInstanceList()
    .pipe(map((value) => value.data || []));

  constructor(private instanceService: InstanceService) {}
}
