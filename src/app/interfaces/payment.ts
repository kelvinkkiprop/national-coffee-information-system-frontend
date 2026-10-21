export interface Payment {

  id?: any,
  user_id?: any
  service_id?: any
  amount?: any
  convenience_fee?: any
  currency?: any
  payment_method?: any
  pesaflow_ref_no?: any
  pesaflow_invoice_number?: any
  pesaflow_invoice_link?: any
  status_id?: any


  user?: user,
  status?: status,
}

export interface user {
  id?: string,
  name?: string,
  email?: string,
}
export interface status {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}
