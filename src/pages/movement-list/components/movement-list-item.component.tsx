import React from "react";
import classes from "./movement-list-item.component.module.css"
import { MovementsVm } from "../movement-list.vm";

interface Props {
  movementItem: MovementsVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{movementItem.transaction}</span>
      <span className={classes.dataCell}>{movementItem.realTransaction}</span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span className={classes.dataCell}>{movementItem.amount}</span>
      <span className={classes.dataCell}>{movementItem.balance}</span>
    </div>
  );
};
