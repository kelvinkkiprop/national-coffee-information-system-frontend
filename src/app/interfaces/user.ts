export interface User {
  id?: any,
  name?: string,
  email?: string,
  phone?: string,
  status_id?: any,
  role_id?: any,
  token?: any,
  member_of_a_committee?: any

  committees?: committee,
  profile?: profile,
  role?: role,
  status?: status,
}

export interface profile {
  id?: string,
  user_id?: string,
  professional_body_id?: number,
  membership_number?: string,
  consultant_name?: string,
  email?: string,
  membership_type?: string,
  status?: string,
  address?: string,
  nationality?: string,
  subscription_year?: string,
  good_standing?: string,

  professional_body_status_id?: number,
}

export interface status {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}

export interface committee {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}

export interface role {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}




