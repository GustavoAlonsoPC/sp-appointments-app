import { HomeDataSource } from "src/app/core/models/home-data-source.model";

export const HOME_DATA: HomeDataSource[] = [
  {
    id: 1,
    name: 'Aff1',
    mail: 'aff1@mail.com',
    age: 24,
    nestedData: [
      {
        id: 1,
        dateAppointment: '16/05/2023',
        hourAppointment: '12:00',
        testName: 'test1'
      }
    ]
  },
  {
    id: 2,
    name: 'Aff2',
    mail: 'aff2@mail.com',
    age: 45,
    nestedData: [
      {
        id: 2,
        dateAppointment: '23/05/2023',
        hourAppointment: '12:00',
        testName: 'test2'
      }
    ]
  },
  {
    id: 3,
    name: 'Aff3',
    mail: 'aff3@mail.com',
    age: 98,
    nestedData: [
      {
        id: 3,
        dateAppointment: '27/07/2023',
        hourAppointment: '12:00',
        testName: 'test3'
      }
    ]
  }
];