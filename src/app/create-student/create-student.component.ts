import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = {
    id: 0,
    name: '',
    age: 0
  };

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }
  createNewStudent(): void{
    this.studentService.createNewStudent(this.student);
  }
}
