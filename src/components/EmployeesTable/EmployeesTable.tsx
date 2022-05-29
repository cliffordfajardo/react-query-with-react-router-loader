import React from "react";
import { Table } from "antd";

type EmployeesTableProps = {
  dataSource: any[];
  tableColumns: any[];
  isLoading: boolean;
};

const EmployeesTable = (props: EmployeesTableProps) => {
  return (
    <>
      <Table dataSource={props.dataSource || []} columns={props.tableColumns} />
    </>
  );
};

export default EmployeesTable;
