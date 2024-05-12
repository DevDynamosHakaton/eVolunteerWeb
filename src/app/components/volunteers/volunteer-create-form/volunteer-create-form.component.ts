import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { flatMap } from 'rxjs';
import {
  UserDetails,
  UserQualification,
  UserRole,
  UserSex,
  UserStatus,
} from 'src/app/domain/data/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-volunteer-create-form',
  templateUrl: './volunteer-create-form.component.html',
  styleUrls: ['./volunteer-create-form.component.scss'],
})
export class VolunteerCreateFormComponent {
  @Output() createEvent: EventEmitter<UserDetails> = new EventEmitter();
  isOpen = false;

  newVolunteer: UserDetails = {
    id: '',
    avatarUrl: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    mobileNumber: '',
    nationality: '',
    city: '',
    birthDate: new Date(),
    createdAt: new Date(),
    status: UserStatus.INACTIVE,
    role: UserRole.VOLUNTEER,
    qualification: UserQualification.CIVIL,
    sex: UserSex.FEMALE,
  };

  optionQualification = [
    { label: 'Рятувальник', value: UserQualification.SAVIOR },
    { label: 'Правоохоронець', value: UserQualification.LAW_OFFICER },
    { label: 'Медик', value: UserQualification.MEDIC },
    { label: 'Військовослужбовець', value: UserQualification.MILITARY },
    { label: 'Цивільний', value: UserQualification.CIVIL },
  ];

  optionSex = [
    { label: 'Жінка', value: UserSex.FEMALE },
    { label: 'Чоловік', value: UserSex.MALE },
    { label: 'Інше', value: UserSex.OTHER },
  ];

  constructor(private userService: UserDetailsService) {}

  password = '';

  openView() {
    this.isOpen = true;
  }

  closeView() {
    this.isOpen = false;
  }

  reset() {
    this.newVolunteer = {
      id: '',
      avatarUrl: '',
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      mobileNumber: '',
      nationality: '',
      city: '',
      birthDate: new Date(),
      createdAt: new Date(),
      status: UserStatus.ACTIVE,
      role: UserRole.VOLUNTEER,
      qualification: UserQualification.CIVIL,
      sex: UserSex.FEMALE,
    };
  }

  submit() {
    // this.userService.uploadFile(this.imageFile!).subscribe({
    //   next: (url) => {
    //     console.log(url);
    //     // this.newVolunteer.avatarUrl = url;

    //     // this.userService.createUser(this.newVolunteer).subscribe({
    //     //   next: (data) => {
    //     //     this.closeView();
    //     //     this.createEvent.emit(data);
    //     //     this.reset();
    //     //   },
    //     //   error: (error) => console.log(error),
    //     // });
    //   },
    // });

    this.userService.createUser(this.newVolunteer).subscribe({
      next: data => {
        this.closeView();
        this.createEvent.emit(data);
        this.reset();
      },
      error: error => console.log(error)
    });
  }

  imageUrl?: string;
  imageFile?: File;

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };

      reader.readAsDataURL(this.imageFile);
    }
  }
}
