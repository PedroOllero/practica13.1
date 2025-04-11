import React from "react";
import { useParams } from "react-router-dom";
import { MovementsVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component"
import { mapMovementListFromApiToVm, mapAccountFromApiToVm } from "./account-list.mapper";
import { createEmptyAccount, getAccount, getMovementsList } from "./api";
import { AppLayout } from "@/layouts";
import { AccountVm } from "../account-list/account-list.vm";


export const MovementListPage: React.FC = () => {
  const { id } = useParams();
  const [movementList, setMovementList] = React.useState<MovementsVm[]>([]);
  const [accountList, setAccountList] = React.useState<AccountVm>(createEmptyAccount());

  React.useEffect(() => {
    if (id) {
      Promise.all([
        getMovementsList(id),
        getAccount(id),
      ]).then(([movementsResult, accountResult]) => {
        setMovementList(mapMovementListFromApiToVm(movementsResult));
        setAccountList(mapAccountFromApiToVm(accountResult));
      });
    }
  }, [id]);

  return (
    <AppLayout>
      <MovementListTableComponent movementsList={movementList} account={accountList}/>
    </AppLayout>
  );
};
