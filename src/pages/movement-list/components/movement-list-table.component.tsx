import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";
import { AccountVm } from "@/pages/account-list/account-list.vm";

interface Props {
  movementsList: MovementsVm[];
  accountList: AccountVm;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementsList } = props;
  const { accountList } = props;
  let accountInfo: AccountVm = {
    id: "",
    iban: "",
    name: "",
    balance: "",
    lastTransaction: new Date(),
  }

  if(accountList){
     accountInfo = accountList
  }
 

  return (
    <>
      <div className={classes.tableHeader}>
        <div className={classes.upHeader}>
          <span className={classes.title}>Saldos y Últimos Movimientos</span>
          <div className={classes.balance}>
            <span className={classes.balanceText}>Saldo Actual</span>
            <span className={classes.balanceNumber}>{accountInfo.balance}</span>
          </div>
        </div>
        <div className={classes.downHeader}>
          <span>Alias: {accountInfo.name}</span>
          <span>IBAN: {accountInfo.iban}</span>
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
            key={movement.amount}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
