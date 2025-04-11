export interface MovementsVm {
    transaction: Date,
    realTransaction: Date,
    description: string,
    amount: number,
    balance: number,
    id: string
}

export interface AccountVm {
    id: string;
    iban: string;
    name: string;
    balance: string;
    lastTransaction: Date;
  }
  