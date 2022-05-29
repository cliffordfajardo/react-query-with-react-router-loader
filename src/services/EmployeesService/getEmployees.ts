import { request } from "../../utils";

export type Employee = {
  name: string;
  age: number;
  department: string;
};

export const getEmployees = async () => {
  const response = await request<Employee[]>(`/employees`);
  return response;
};
