import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/shared/feedback.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackSuccess:any;

  constructor(
    private feedbackService: FeedbackService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,

  ) { }


  ngOnInit() {
  }


  feedback()
  {
    var fullname = ((document.getElementById("fullname") as HTMLInputElement).value);
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var message = ((document.getElementById("message") as HTMLInputElement).value);
    

    // console.log(fullname);
    // console.log(email);
    // console.log(message);

    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('message', message);

    this.feedbackService.feedback(formData).subscribe((data) => {
    // //   // this.isLoad = 1;      

      // console.log(data);
      if (data.status === '200') 
      {
        this.feedbackSuccess = data.message;
        
        location.reload();
        
        this.feedbackSuccess = data.message;

      } 
      
    });
  }
}
