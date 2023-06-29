import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Table = ({ list }) => {
   const columns = useMemo(
     () => [
       {
         accessorKey: "firstname", //access nested data with dot notation
         header: "First Name",
         size: 150,
       },
       {
         accessorKey: "lastname",
         header: "Last Name",
         size: 150,
       },
       {
         accessorKey: "department",
         header: "Department",
         size: 150,
       },
       {
         accessorKey: "startDate", //normal accessorKey
         header: "Start Date",
         size: 200,
       },
       {
         accessorKey: "street",
         header: "Street",
         size: 150,
       },
       {
         accessorKey: "city",
         header: "City",
         size: 150,
       },
       {
         accessorKey: "state",
         header: "State",
         size: 150,
       },
       {
         accessorKey: "zipCode",
         header: "Zip Code",
         size: 150,
       },
     ],
     []
   );
  return <MaterialReactTable columns={columns} data={list} />;
};

export default Table;