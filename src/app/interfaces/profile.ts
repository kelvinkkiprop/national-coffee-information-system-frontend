// import
import { User } from "./user";

export interface Profile {
  id?: string,
  user_id: string,
  role_id: number,
  id_number: string,
  country_code: string,
  phone_number: string,
  country_id: number,
  // General
  legal_status_id: number,
  company_registration_number: string,
  company_establishment_date: string,
  kra_pin: string,
  postal_address: string,
  physical_address: string,
  // Location
  county_id: number,
  sub_county_id: number,
  ward_id: number,
  location: string,
  sub_location: string,
  village: string,
  town: string,
  street_name: string,
  building_name: string,
  plot_number: string,

  created_at?: string,
  updated_at?: string,

  user?: User,
  country?: Country,
  county?: County,
  ward?: Ward,
}

export interface Country {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
export interface County {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
export interface Ward {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
