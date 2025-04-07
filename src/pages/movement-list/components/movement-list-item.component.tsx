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
      <span className={classes.headerCell}>{movementItem.transaction}</span>
      <span className={classes.headerCell}>{movementItem.realTransaction}</span>
      <span className={classes.headerCell}>{movementItem.description}</span>
      <span className={classes.headerCell}>{movementItem.amount}</span>
      <span className={classes.headerCell}>{movementItem.balance}</span>
    </div>
  );
};
