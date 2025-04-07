import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementsList: MovementsVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementsList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div>
          <span>Saldos y Últimos Movimientos</span>
          <div>
            <span>Saldo Actual</span>
            <span>1231</span>
          </div>
          <div>
            <span>Alias: Gastos Mes</span>
            <span>IBAN: 1231 4141 4444</span>
          </div>
        </div>
        <div className={classes.headerTable}>
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
