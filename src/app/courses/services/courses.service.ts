import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {delay, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.API).pipe(
      //delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
