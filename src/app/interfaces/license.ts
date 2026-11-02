export interface License {
  id?: any,
  user_id?: any,
  category_id?: any,
  financial_year?: any,
  expiry_date?: any,
  type_id?: any,
  issuing_body_id?: any,
  // 1.AgentLicense
  paid_share_capital?: any,
  directors_details?: any,
  years_of_technical_experience?: any,
  growers_represented_and_signed_agreements ?: any,
  indemnity_against_professional_misconduct?: any,
  liquorer_cupping_facility_engaged?: any,
  // 2.BuyerLicense
  license_purpose?: any,
  // 3.WarehouseOperatorLicense
  directors_name_address_and_occupations?: any,
  // 4.LiquoringLicense
  year_of_certification?: any,
  current_occupation?: any,
  coffee_tasting_expert_certificate?: any,
  // 5.CommercialMillersLicence
  milling_capacity?: any,
  comprehensive_insurance_policy?: any,
  mill_certification?: any,
  // 6.IndependentCuppingLabsLicence
  company_officials?: any,
  licensed_liquorers_engaged?: any,
  laboratory_facilities?: any,
  services_to_be_offered?: any,
  statutory_compliance?: any,

  self_declaration_form?: any,
  commitment_declaration?: any,


  date_of_issue?: any,
  effective_date?: any,
  duration?: any,
  // expiry_date?: any,
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
