export class Company {
  private data: TCompany;

  constructor(lead: TCompany) {
    this.data = lead;
  }

  get(): TCompany {
    return this.data;
  }
}

export type TCompany = {
  id: string;
  name: string;
  addressId: number;
};
