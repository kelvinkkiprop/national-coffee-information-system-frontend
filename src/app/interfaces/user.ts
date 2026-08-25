export interface User {
  id?: any,
  name?: string,
  email?: string,
  phone?: string,
  status_id?: any,
  role_id?: any,
  created_at?: string,
  updated_at?: string,
  token?: any,

  role?: role,
  status?: status,
  profile?: profile,
}

export interface status {
  id?: string,
  name?: string,
  alias?: string,
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



