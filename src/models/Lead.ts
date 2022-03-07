export class Lead {
  private data: TLead;

  constructor(lead: TLead) {
    this.data = lead;
  }

  get(): TLead {
    return this.data;
  }
}

export type TLead = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phoneNumber: string;
  companyId?: string;
  note?: string;
};
