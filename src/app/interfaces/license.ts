export interface License {
  id?: any,
  user_id?: any,

  application_number?: any,
  type_id?: any,
  mark?: any,
  coffee_species_id?: any,
  coffee_form_id?: any,
  number_of_bags?: any,
  origin?: any,
  destination?: any,
  distance?: any,
  vehicle_registration_number?: any,
  driver_name?: any,
  driver_id_number?: any,
  warehouse_receipt_number?: any,
  date_of_issue?: any,
  effective_date?: any,
  duration?: any,
  expiry_date?: any,
  payment_id?: any,
  payment_status_id?: any,
  status_id?: any,

  created_at?: any,
  updated_at?: any,


  status?: status,
  paymentStatus?: paymentStatus,
  user?: user,
}

export interface status {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}

export interface paymentStatus {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}


export interface user {
  id?: string,
  name?: string,
  email?: string,
  created_at?: Date,
  updated_at?: Date,
}
