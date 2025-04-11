import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementsVm[] =>
  movementList.map((movement) => ({
    transaction: new Date (movement.transaction),
    realTransaction: new Date (movement.realTransaction),
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    id: movement.id
  }));

  export const mapAccountFromApiToVm = (
    account: apiModel.Account
  ): viewModel.AccountVm =>
    account = {
      id: account.id,
      iban: account.iban,
      name: account.name,
      balance: account.balance.toString(),
      lastTransaction: new Date(account.lastTransaction),
    };
  