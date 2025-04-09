import { mapMovementListFromApiToVm } from "./account-list.mapper";
import { Movement } from "./api";
import { MovementsVm } from "./movement-list.vm";

describe("MapMovementList", () => {
  it("Debe pasar los datos de un formato a otro de manera correcta", () => {
    // Arrange
    const MovementList: Movement[] = [
      {
        id: "1",
        description: "Nómina noviembre",
        amount: 900,
        balance: 1490,
        transaction: "2019-12-09T21:30:00",
        realTransaction: "2019-12-09T21:30:00",
        accountId: "1"
      }
    ]

    // Act
    const result: MovementsVm[] = mapMovementListFromApiToVm(MovementList)

    // Assert
    expect(result).toEqual([
      {
        transaction: new Date("2019-12-09T21:30:00"),
    realTransaction: new Date("2019-12-09T21:30:00"),
    description: "Nómina noviembre",
    amount: 900,
    balance: 1490,
    id: "1"
      }
    ]);
  });
});
