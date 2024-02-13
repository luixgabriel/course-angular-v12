import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns: String[] = ['name', 'category'];
  // courseService: CoursesService;

  constructor(private courseService: CoursesService) {
    // this.courseService = new CoursesService();
    this.courses$ = this.courseService.findAll();
  }

  ngOnInit(): void {
  }

}
