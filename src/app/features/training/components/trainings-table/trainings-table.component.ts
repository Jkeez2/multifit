import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import {Training} from "../../models/training";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-trainings-table',
  templateUrl: './trainings-table.component.html',
  styleUrls: ['./trainings-table.component.css']
})
export class TrainingsTableComponent {
  protected readonly faEye = faEye;
  @Input() trainings?: Training[];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<Training>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.trainings);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
