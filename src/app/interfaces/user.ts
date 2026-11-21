// import
import { Committee } from "./committee";
import { Role } from "./role";

export interface User {
  id?: any,
  name?: string,
  email?: string,
  phone: string,
  id_number: string,
  status_id?: any,
  role_id?: number,
  email_verified_at?: any,
  otp_expires_at?:any,
  otp_verified?:any,
  password?:any,
  created_at?: string,
  updated_at?: string,
  token?: any,

  country_id: number,
  // General
  legal_status_id: number,
  company_registration_number: string,
  company_establishment_date: string,
  kra_pin: string,
  postal_address: string,
  postal_code: string,
  // Location
  region_id: number,
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

  role?: Role,
  status?: status,
  committees?: Committee,
  country?: Country,
  county?: County,
  ward?: Ward,
}

export interface status {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
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


