//get target Object
//get selectedList => field names of object that we want to have

const FieldFilter = (targetObj, selectedList, typeOfAction = "select") => {
  //if type of action be remove then just remove selected fields
  if (typeOfAction === "remove") {
    selectedList.forEach((field) => {
      delete targetObj[field];
    });

    return targetObj;
  }

  //loop of selected list to findout fields in target object
  const filteredObject = selectedList.reduce((_obj, key) => {
    //loop on keys of targetObject
    if (key in targetObj) {
      //add field that is same as selected list
      _obj[key] = targetObj[key];
    }

    return _obj;
  }, {});

  return filteredObject;
};

module.exports = FieldFilter;
