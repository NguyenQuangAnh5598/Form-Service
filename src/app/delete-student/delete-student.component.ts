import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  id = 0;
  sub: Subscription;

  constructor(private studentService: StudentService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        // @ts-ignore
        this.deleteStudentById(this.id);
      }
    );
  }

  ngOnInit(): void {
  }

  deleteStudentById(id: number): void {
    this.studentService.removeStudentById(id);
    this.router.navigate(['']);
  }
}
