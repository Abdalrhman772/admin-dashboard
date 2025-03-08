import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() columns: { field: string; header: string; type?: string }[] = [];
  @Input() data: T[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource<T>();
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((col) => col.field);
    this.initializeDataSource();
  }

  ngOnChanges(): void {
    this.updateDataSource();
  }

  ngAfterViewInit(): void {
    this.initializePaginatorAndSort();
  }

  private initializeDataSource(): void {
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
  }

  private updateDataSource(): void {
    if (this.dataSource) {
      this.dataSource.data = this.data;
      if (this.paginator) {
        this.paginator.length = this.data.length;
        this.paginator.firstPage();
      }
    }
  }

  private initializePaginatorAndSort(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.paginator) {
      this.paginator.length = this.data.length;
    }
  }

  navigateToDetails(id: number) {
    this.router.navigate(['orders', id]);
  }
}
