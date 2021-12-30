import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Array<Student> = [
    {
      id: 1,
      name: 'Anh',
      age: 23
    },
    {
      id: 2,
      name: 'Tuấn',
      age: 25
    }
  ];
  constructor() {}

  getAllStudent(): Student[] {
    return this.studentList;
  }
  createNewStudent(student: Student): void{
    this.studentList.push(student);
  }
  updateStudentById(id: number, student: Student): void {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        this.studentList[i] = student;
      }
    }
  }
  removeStudentById(id: number): void {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        this.studentList.splice(i, 1);
      }
    }
  }
}

