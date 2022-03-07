/* eslint-disable import/prefer-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { TCompany } from '../models/Company';
import APIEndpoints from '../utils/endpoints';
import QueryKeys from '../utils/queryKeys';

export function getAllCompanies(): UseQueryResult<TCompany[], unknown> {
  return useQuery(QueryKeys.Companies, getAllCompaniesQueryFn, {
    cacheTime: 0,
  });
}

const getAllCompaniesQueryFn = async (): Promise<TCompany[]> => {
  const response = await axios.get<TCompany[]>(APIEndpoints.companies.get);
  return response.data;
};
