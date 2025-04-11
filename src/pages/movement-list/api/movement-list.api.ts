import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";
import { AccountVm } from "../movement-list.vm";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementsList = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccount = async (accountId: string): Promise<Account> => {
  const urlAccount = `${
    import.meta.env.VITE_BASE_API_URL
  }/movements/${accountId}`;
  return Axios.get<Account>(urlAccount, { params: { accountId } }).then(
    ({ data }) => data
  );
};

export const createEmptyAccount = (): AccountVm => {
  return{
    id: "",
    iban: "",
    name: "",
    balance: "",
    lastTransaction: new Date(0),
  }
}
