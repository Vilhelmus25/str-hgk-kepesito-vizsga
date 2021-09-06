import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  student$: Observable<Student> = this.activatedRoute.params.pipe(
    switchMap(params => this.studentService.getById(params.id))
  );

  constructor(
    private studentService: StudentHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveStudent(student: Student): void {
    this.studentService.update(student, student._id).subscribe(
      stu => this.router.navigate(['/', 'student-list']),
      err => console.error(err)
    );
  }

}
