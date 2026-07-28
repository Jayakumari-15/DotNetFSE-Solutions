import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 101,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 102,
      name: 'React',
      code: 'REA102',
      credits: 3
    },
    {
      id: 103,
      name: 'Node.js',
      code: 'NOD103',
      credits: 4
    }
  ];

  selectedCourseId = 0;

 ngOnInit(): void {

  console.log("Started");

  setTimeout(() => {
    console.log("Finished");
    this.isLoading = false;
  }, 1500);

}

  onEnroll(courseId: number) {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

}