import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student = {
    id: 0,
    name: '',
    age: 0
  };
  id = 0;
  sub: Subscription;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
      }
    );
  }

  ngOnInit(): void {
  }
updateStudentById(): void {
    this.studentService.updateStudentById(this.id, this.student);
    alert('Update complete');
}
}
