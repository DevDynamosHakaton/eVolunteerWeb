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
  birthDate: string,
  createdAt: Date,
  status: UserStatus,
  role: UserRole,
  qualification: UserQualification,
  sex: UserSex,
}

export enum UserSex {
  MALE,FEMALE,OTHER
}

export enum UserQualification {
  SAVIOR,
  LAW_OFFICER,
  MEDIC,
  CIVIL
}

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  INVOLVED
}

export enum UserRole {
  ADMIN,
  VOLUNTEER
}
