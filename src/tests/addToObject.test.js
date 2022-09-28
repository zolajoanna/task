import { addToObject } from "../apiFunctions/addToObject";

describe("addToObject function", () => {
  it(" should return correct data", () => {
    const testObject1 = [
      {
        accountType: "TEST",
        currency: "$",
        default: true,
        funds: 10000,
        id: 1,
        isDemo: false,
        name: "Spread bet",
        profitLoss: 0.23,
        _id: "5d9ddef4915161280000853b",
      },
    ];
    const testObject2 = [
      { _id: "5d9dea6c9151612800008618", id: "TEST", title: "TEST ACCOUNT" },
    ];

    const testObject3 = [
      {
        accountType: "TEST",
        accountTypeTitle: "TEST ACCOUNT",
        currency: "$",
        default: true,
        funds: 10000,
        id: 1,
        isDemo: false,
        name: "Spread bet",
        profitLoss: 0.23,
        _id: "5d9ddef4915161280000853b",
      },
    ];
    addToObject(testObject1, testObject2);
    console.log(testObject1, testObject3);
    expect(testObject1).toStrictEqual(testObject3);
  });
});
