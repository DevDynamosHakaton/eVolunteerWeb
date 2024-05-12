export interface UserDetails {
  id: string,
  avatarUrl: string,
  firstName: string,
  lastName: string,
  middleName: string,
  email: string,
  mobileNumber: string,
  nationality: string,
  city: string,
  birthDate: Date,
  createdAt: Date,
  status: UserStatus,
  role: UserRole,
  qualification: UserQualification,
  sex: UserSex,
}

export enum UserSex {
  MALE = "Чоловік",
  FEMALE = "Жінка",
  OTHER = "Інше",
}

export enum UserQualification {
  SAVIOR = "Рятівник",
  LAW_OFFICER = "Правоохоронець",
  MEDIC = "Медик",
  CIVIL = "Цивільний",
  MILITARY = "Військовий"
}

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  INVOLVED,
}

export enum UserRole {
  ADMIN = 'Адміністратор',
  VOLUNTEER = 'Волонтер'
}
