import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] =  [
    {
      _id: '12',
      name: 'Angular',
      category: 'Front-End'
    },
    {
      _id: '24',
      name: 'Next',
      category: 'Front-End'
    }
  ];
  displayedColumns: String[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
