export interface Event {
  id: string,
  name: string
  description: string,
  lat: number,
  lng: number,
  address: string,
  type: EventType,
  status: EventStatus,
  createdAt: string,
  volunteers: string[]
  volunteersAskAmount: number
}

export enum EventType {
  SEARCH = "Зникнення особи",
  FIRE = "Пожежа",
  TRANSPORT = "ДТП",
  EXPLOSION = "Вибух",
  RUINE = "Завали",
}

export enum EventStatus {
  NOT_STARTED,
  IN_PROGRESS,
  COMPLETED,
}
