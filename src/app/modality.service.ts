import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Modality {
  modality = [
    {
      id: 1,
      modality: 'Tes. DIRETO 2022',
      duedate: '01/03/2025',
      profitability: 'SELIC',
      minvalue: 900.74,
      integervalue: 15.268,
    },
    {
      id: 2,
      modality: 'Tesouro SELIC 2025',
      duedate: '01/03/2025',
      profitability: 'DIRETO',
      minvalue: 105.74,
      integervalue: 10.574,
    },
    {
      id: 3,
      modality: 'Renda Fixa Simples',
      duedate: '10/07/2023',
      profitability: 'Simples',
      minvalue: 500.41,
      integervalue: 13.984,
    },
    {
      id: 4,
      modality: 'Renda Fixa LP Pre',
      duedate: '10/10/2022',
      profitability: 'LP',
      minvalue: 99.74,
      integervalue: 11.478,
    },
  ];
  constructor() {}

  getModality() {
    return this.modality;
  }
  getById(id) {
    const item = this.modality.find((item) => item.id === id);
    return item;
  }
}
