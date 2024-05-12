import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { flatMap } from 'rxjs';
import { UserDetails, UserQualification, UserRole, UserSex, UserStatus } from 'src/app/domain/data/user';
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
    { label: 'Рятувальник', value: UserQualification.SAVIOR, },
    { label: 'Правоохоронець', value: UserQualification.LAW_OFFICER, },
    { label: 'Медик', value: UserQualification.MEDIC, },
    { label: 'Військовослужбовець', value: UserQualification.MILITARY, },
    { label: 'Цивільний', value: UserQualification.CIVIL },
  ]

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
      status: 0,
      role: UserRole.VOLUNTEER,
      qualification: UserQualification.CIVIL,
      sex: UserSex.FEMALE,
    };
  }

  submit() {
    this.userService.createUser(this.newVolunteer).subscribe({
      next: data => {
        this.closeView();
        this.createEvent.emit(data);
      },
      error: error => console.log(error)
    });
  }
}
