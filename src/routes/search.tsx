import React from "react";
import {
  EmployeesTable,
  TABLE_COLUMNS as EMPLOYEES_TABLE_COLUMNS,
} from "../components";
import { useGetEmployees } from "../hooks";
import { getEmployees } from "../services/EmployeesService";
import { queryClient } from "../utils";

export async function loader() {
  // console.log(`[search.tsx] - calling loader`);
  const response = queryClient.fetchQuery(["employees"], {
    queryFn: () => getEmployees(),
  });
  return response;
}

export default function Search() {
  const employeesInfo = useGetEmployees();

  return (
    <>
      <div style={{ padding: 40 }}>
        <h1>Search</h1>
        <section>
          <EmployeesTable
            isLoading={employeesInfo.isFetching}
            dataSource={employeesInfo.data || []}
            tableColumns={EMPLOYEES_TABLE_COLUMNS}
          />
        </section>
      </div>
    </>
  );
}
