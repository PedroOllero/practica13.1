import { AppLayout } from "@/layouts";
import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component"

const movementsList: MovementsVm[] = [
  {
    description: "Nómina noviembre",
    amount: 900,
    balance: 1490,
    transaction: "2019-12-09",
    realTransaction: "2019-12-09",
  },
  {
    description: "Alquiler noviembre",
    amount: -400,
    balance: 590,
    transaction: "2019-12-07",
    realTransaction: "2019-12-08",
  },
  {
    description: "Gastos móvil",
    amount: -24,
    balance: 990,
    transaction: "2019-12-01",
    realTransaction: "2019-12-02",
  },
];

export const MovementListPage: React.FC = () => {
  return (
    <AppLayout>
      <MovementListTableComponent movementsList={movementsList}/>
    </AppLayout>
  );
};
