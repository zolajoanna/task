const addToObject = (
  accountsData: Array<Object>,
  accountsTypeData: Array<Object>
) => {
  accountsData.filter(function (obj: any) {
    return accountsTypeData.some(function (obj2: any) {
      if (obj.accountType === obj2.id) {
        Object.assign(obj, { accountTypeTitle: obj2.title });
      }
    });
  });
};

export { addToObject };
