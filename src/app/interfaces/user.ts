// import
import { Profile } from "./profile";
import { Role } from "./role";

export interface User {
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
  status?: status,
  profile?: Profile,
}

export interface status {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}


