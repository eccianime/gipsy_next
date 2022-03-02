export type User = {
  id: string | null;
  email: string | null;
  phone: string | null;
  firstName: string | null;
  lastName: string | null;
  documentType: string | null;
  documentNumber: string | null;
  passengerDocumentNumber?: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  country: string | null;
  birthDate: Date | null;
  zipCode: string | null;
};

export type UserLink = {
  email: string | null;
  phone: string | null;
  firstName: string | null;
  lastName: string | null;
  documentType: number | string | null;
  documentNumber: string | null;
};


export type IUsersState = {
  currentUser: User | null;
}