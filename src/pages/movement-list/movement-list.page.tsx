import React from "react";
import { useParams } from "react-router-dom";
import { MovementsVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component"
import { mapMovementListFromApiToVm } from "./account-list.mapper";
import { getMovementsList } from "./api";
import { AppLayout } from "@/layouts";
import { getAccountList } from "../account-list/api";
import { AccountVm } from "../account-list/account-list.vm";
import { mapAccountListFromApiToVm } from "../account-list/account-list.mapper";


export const MovementListPage: React.FC = () => {
  const { id } = useParams();
  const [movementList, setMovementList] = React.useState<MovementsVm[]>([]);
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const accountId: number = Number(id) - 1

  React.useEffect(() => {
    if(id){
      getMovementsList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
      getAccountList().then((result) =>
        setAccountList(mapAccountListFromApiToVm(result))
      );
    }
  }, []);
  
  return (
    <AppLayout>
      <MovementListTableComponent movementsList={movementList} accountList={accountList[accountId]}/>
    </AppLayout>
  );
};
