import React from "react";
import classes from "./movement-list-item.component.module.css"
import { MovementsVm } from "../movement-list.vm";

interface Props {
  movementItem: MovementsVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  const negativeColor = (amount: number) => {
    if(amount < 0){
      return classes.negativeAmount;
    }else{
      return
    }
  }

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.realTransaction.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span className={`${classes.dataCell} ${negativeColor(movementItem.amount)}`}>{movementItem.amount}</span>
      <span className={classes.dataCell}>{movementItem.balance}</span>
    </div>
  );
};
