// import
import { Profile } from "./profile";
import { Role } from "./role";

export interface DealerRegistration {
  id?: any,
  name?: string,
  email?: string,
  phone?: string,
  status_id?: any,
  role_id?: number,
  email_verified_at?: any,
  otp_expires_at?:any,
  otp_verified?:any,
  password?:any,
  created_at?: string,
  updated_at?: string,
  token?: any,

  role?: Role,
  dealerRegistrationStatus?: dealerRegistrationStatus,
  profile?: Profile,
}

export interface dealerRegistrationStatus {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}
