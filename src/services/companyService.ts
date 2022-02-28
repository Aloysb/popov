/* eslint-disable import/prefer-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { Company } from '../types/general';
import APIEndpoints from '../utils/endpoints';
import QueryKeys from '../utils/queryKeys';

export function getAllCompanies(): UseQueryResult<Company[], unknown> {
  return useQuery(QueryKeys.Companies, getAllCompaniesQueryFn);
}

const getAllCompaniesQueryFn = async (): Promise<Company[]> => {
  const response = await axios.get<Company[]>(APIEndpoints.companies.get);
  return response.data;
};
