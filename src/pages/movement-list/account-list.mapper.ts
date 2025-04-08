import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementsVm[] =>
  movementList.map((movement) => ({
    transaction: movement.transaction,
    realTransaction: movement.realTransaction,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
  }));
