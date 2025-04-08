import { AppLayout } from "@/layouts";
import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component"
import { mapMovementListFromApiToVm } from "./account-list.mapper";
import { getMovementsList } from "./api";


export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementsVm[]>([]);

  React.useEffect(() => {
    getMovementsList().then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);
  
  return (
    <AppLayout>
      <MovementListTableComponent movementsList={movementList}/>
    </AppLayout>
  );
};
