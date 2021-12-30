import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  getAllStudent(): Student[] {
  return this.studentService.getAllStudent();
  }

  ngOnInit(): void {
  }

}
