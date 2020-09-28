import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user_data:any;
  id:any;
  fullname:any;
  email:any;
  sex:any;
  dob:any;
  description:any;
  height:any;
  relationship_status:any;
  city:any;
  state:any;
  country:any;
  occupation:any;
  profile:any;
  zodiac:any;
  religion:any;
  caste:any;
  mother_tongue:any;
  blood_group:any;
  family_status:any;
  no_of_family_members:any;
  physical_status:any;
  complexion:any;
  eating_habits:any;
  drinking_habits:any;
  smoking_habits:any;
  highest_education:any;
  annual_income:any;
  hobbies:any;
  interests:any;
  profile_for:any;
  dp:any;

  gender_master:any;
  blood_group_master:any;
  zodiac_master:any;
  eating_habits_master:any;
  relationship_status_master:any;

  error: string;
  success_message: string;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private actionSheetController:ActionSheetController,

    private camera:Camera,
    private file:File,


  ) { }

  ngOnInit() 
  {
    // console.log(localStorage.getItem('user_email'));

    var email = localStorage.getItem('user_email');

    // console.log(email);

    if(email === null)
    {
      // console.log('in if');
      this.router.navigate(['/home']);
    }
    else
    {
      // console.log('in else');
    
        this.userService.get_info().subscribe((data) => {
          // console.log(data);
          
          this.gender_master = data.sex;
          this.blood_group_master = data.blood_group;
          this.zodiac_master = data.zodiac;
          this.eating_habits_master = data.eating_habits;
          this.relationship_status_master = data.relationship_status;
          // console.log(this.gender_master);    
        });


        this.userService.get_data(email).subscribe((data) => {

          
          this.user_data = data.data;
          this.id = data.data.id;
          this.fullname = data.data.fullname;
          this.email = data.data.email;
          this.sex = data.data.sex;
          this.dob = data.data.dob;
          this.description = data.data.description;
          this.height = data.data.height;
          this.relationship_status = data.data.relationship_status;
          this.city = data.data.city;
          this.state = data.data.state;
          this.country = data.data.country;
          this.occupation = data.data.occupation;
          this.profile = data.data.profile;
          this.zodiac = data.data.zodiac;
          this.religion = data.data.religion;
          this.caste = data.data.caste;
          this.mother_tongue = data.data.mother_tongue;
          this.blood_group = data.data.blood_group;
          this.family_status = data.data.family_status;
          this.no_of_family_members = data.data.no_of_family_members;
          this.physical_status = data.data.physical_status;
          this.complexion = data.data.complexion;
          this.eating_habits = data.data.eating_habits;
          this.drinking_habits = data.data.drinking_habits;
          this.smoking_habits = data.data.smoking_habits;
          this.highest_education = data.data.highest_education;
          this.annual_income = data.data.annual_income;
          this.hobbies = data.data.hobbies;
          this.interests = data.data.interests;
          this.profile_for = data.data.profile_for;
          this.dp = data.data.dp;
          
          // console.log(this.id);
        });


      }


  }

  update_profile(event)
  {
    var fullname = ((document.getElementById("fullname") as HTMLInputElement).value);
    var sex = ((document.getElementById("sex") as HTMLInputElement).value);
    var dob = ((document.getElementById("dob") as HTMLInputElement).value);
    var description = ((document.getElementById("description") as HTMLInputElement).value);
    var height = ((document.getElementById("height") as HTMLInputElement).value);
    var relationship_status = ((document.getElementById("relationship_status") as HTMLInputElement).value);
    var city = ((document.getElementById("city") as HTMLInputElement).value);
    var state = ((document.getElementById("state") as HTMLInputElement).value);
    var country = ((document.getElementById("country") as HTMLInputElement).value);
    var occupation = ((document.getElementById("occupation") as HTMLInputElement).value);
    var profile = ((document.getElementById("profile") as HTMLInputElement).value);
    var zodiac = ((document.getElementById("zodiac") as HTMLInputElement).value);
    var religion = ((document.getElementById("religion") as HTMLInputElement).value);
    var caste = ((document.getElementById("caste") as HTMLInputElement).value);
    var mother_tongue = ((document.getElementById("mother_tongue") as HTMLInputElement).value);
    var blood_group = ((document.getElementById("blood_group") as HTMLInputElement).value);
    var family_status = ((document.getElementById("family_status") as HTMLInputElement).value);
    var no_of_family_members = ((document.getElementById("no_of_family_members") as HTMLInputElement).value);
    var physical_status = ((document.getElementById("physical_status") as HTMLInputElement).value);
    var complexion = ((document.getElementById("complexion") as HTMLInputElement).value);
    var eating_habits = ((document.getElementById("eating_habits") as HTMLInputElement).value);
    var drinking_habits = ((document.getElementById("drinking_habits") as HTMLInputElement).value);
    var smoking_habits = ((document.getElementById("smoking_habits") as HTMLInputElement).value);
    var highest_education = ((document.getElementById("highest_education") as HTMLInputElement).value);
    var annual_income = ((document.getElementById("annual_income") as HTMLInputElement).value);
    var hobbies = ((document.getElementById("hobbies") as HTMLInputElement).value);
    var interests = ((document.getElementById("interests") as HTMLInputElement).value);
    var profile_for = ((document.getElementById("profile_for") as HTMLInputElement).value);

    // console.log(sex);


    const formData = new FormData();

    formData.append('id', this.id);
    formData.append('fullname', fullname);
    formData.append('sex', sex);
    formData.append('dob', dob);
    formData.append('description', description);
    formData.append('height', height);
    formData.append('relationship_status', relationship_status);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('occupation', occupation);
    formData.append('profile', profile);
    formData.append('zodiac', zodiac);
    formData.append('religion', religion);
    formData.append('caste', caste);
    formData.append('mother_tongue', mother_tongue);
    formData.append('blood_group', blood_group);
    formData.append('family_status', family_status);
    formData.append('no_of_family_members', no_of_family_members);
    formData.append('physical_status', physical_status);
    formData.append('complexion', complexion);
    formData.append('eating_habits', eating_habits);
    formData.append('drinking_habits', drinking_habits);
    formData.append('smoking_habits', smoking_habits);
    formData.append('highest_education', highest_education);
    formData.append('annual_income', annual_income);
    formData.append('hobbies', hobbies);
    formData.append('interests', interests);
    formData.append('profile_for', profile_for);

    this.userService.setup_profile(formData).subscribe((data) => {
      //   // this.isLoad = 1;      
        // localStorage.clear();
        console.log(data);
        if (data.status === '400') 
        {
          console.log('400');
          this.error = 'Invalid credentials';
        } 
        else if(data.status === '200')
        {
          console.log('200');
          console.log(data.data);

          this.success_message = 'Profile updated successfully.';
          
          this.router.navigate(['/profile']);
          location.reload();
        }
        
      });

  }

  uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // console.log(file);

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }

    if(file.size > 8000000)
    {
      console.error('size exceed');
      return;
    }
    
    const formData = new FormData();

    formData.append('dp', file);
    formData.append('user_id', this.id);

    this.userService.uplod_dp(formData).subscribe((data) => {
      
      console.log(data);

    });

  }

  async uploadFileButton()
  {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      // {
      //   text: 'Use Camera',
      //   handler: () => {
      //     this.pickImage(this.camera.PictureSourceType.CAMERA);
      //   }
      // },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     //alert(imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
       let base64Image = 'data:image/jpeg;base64,' + imageData;
 
      //  this.updateform.profile_img = base64Image;
      //  this.profileimg = base64Image;

      alert(base64Image);

      const formData = new FormData();

      formData.append('dp', base64Image);
      formData.append('user_id', this.id);
  
      this.userService.uplod_dp(formData).subscribe((data) => {
        
        alert(data);
        // console.log(data);
  
      });
 
       //alert('base64:- '+base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
