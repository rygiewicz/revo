import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Instance } from './data/instance.model';

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
}
