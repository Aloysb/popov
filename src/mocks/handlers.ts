/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { TCompany } from '../models/Company';
import APIEndpoints from '../utils/endpoints';

import FakeCompanyFactory from './FakeCompanyFactory';

export const handlers = [
  rest.get(APIEndpoints.companies.get, (_, res, ctx) => {
    const data: TCompany[] = new FakeCompanyFactory()
      .generateFakeCompanies(5)
      .map((obj) => obj.get());

    return res(ctx.status(200), ctx.json(data));
  }),
];
