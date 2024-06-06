// Include type declarations from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import all from crud.js as CRUD
import * as CRUD from './crud';

// Create a row object with the RowElement type
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};


const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
