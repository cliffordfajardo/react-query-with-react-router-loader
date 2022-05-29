import { useQuery } from "react-query";
import { getEmployees } from "../services/EmployeesService";

export const useGetEmployees = () => {
  return useQuery(["employees"], {
    queryFn: () => getEmployees(),
  });
};
