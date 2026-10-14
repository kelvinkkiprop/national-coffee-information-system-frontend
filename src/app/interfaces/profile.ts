export interface Profile {
  id?: any,
  user_id: any,

  role_id: any,
  id_number: any,
  phone_number: any,
  country_id: any,
  county_id: any,
  sub_county_id: any,
  ward_id: any,
  postal_address: any,
  physical_address: any,

  created_at?: any,
  updated_at?: any,

  user?: user,
  country?: country,
  county?: county,
  ward?: ward,
}

export interface user {
  id?: string,
  name?: string,
  email?: number,
}
export interface country {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
export interface county {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
export interface ward {
  id?: string,
  name?: string,
  created_at?: Date,
  updated_at?: Date,
}
