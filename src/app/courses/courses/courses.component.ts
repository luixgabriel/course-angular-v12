import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns: String[] = ['name', 'category'];
  // courseService: CoursesService;

  constructor(
    private courseService: CoursesService,
    //public dialog: MatDialog
    ) {
    // this.courseService = new CoursesService();
    this.courses$ = this.courseService.findAll().
    pipe(
      catchError(err => {
        // this.onError('Erro ao carregar os cursos!')
        return of([])
      })
    )
  }

  ngOnInit(): void {
    this.courses$.subscribe({
      next: courses => {
        console.log('Cursos:', courses); // Aqui você recebe os cursos e pode fazer o log
      },
      error: err => {
        console.error('Ocorreu um erro ao carregar os cursos:', err);
      }
    });
  }

  // onError(errorMsg: string){
  //   this.dialog.open(ErrorDialogComponent, {
  //     data: errorMsg
  //   })
  // }

}
