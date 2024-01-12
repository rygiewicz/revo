import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './instance.component.html',
  styleUrl: './instance.component.scss',
})
export class InstanceComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
