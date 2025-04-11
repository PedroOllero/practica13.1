import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";
import { AccountVm } from "@/pages/account-list/account-list.vm";

interface Props {
  movementsList: MovementsVm[];
  account: AccountVm;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementsList, account} = props;
 

  return (
    <>
      <div className={classes.tableHeader}>
        <div className={classes.upHeader}>
          <span className={classes.title}>Saldos y Últimos Movimientos</span>
          <div className={classes.balance}>
            <span className={classes.balanceText}>Saldo Actual</span>
            <span className={classes.balanceNumber}>{account.balance}</span>
          </div>
        </div>
        <div className={classes.downHeader}>
          <span>Alias: {account.name}</span>
          <span>IBAN: {account.iban}</span>
        </div>
      </div>

      <div className={classes.gridContainer}>
        <div className={classes.table}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCION</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movementsList.map((movement) => (
          <MovementListItemComponent
            key={movement.id}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
