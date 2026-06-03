export interface DetailedDesign {
  id?: string,

  indemnity_form?: string,
  architectural_design?: string,
  structural_design?: string,
  electrical_design?: string,
  ict_design?: string,
  mechanical_design?: string,
  landscaping_design?: string,
  signage_design?: string,
  other_necessary_drawings?: string,
  green_certification_registration?: string,
  nema_project_report?: string,

  indemnity_form_url?: string,
  architectural_design_url?: string,
  structural_design_url?: string,
  electrical_design_url?: string,
  ict_design_url?: string,
  mechanical_design_url?: string,
  landscaping_design_url?: string,
  signage_design_url?: string,
  other_necessary_drawings_url?: string,
  green_certification_registration_url?: string,
  nema_project_report_url?: string,

  // Professionals_reviews
  architect_report?: string,
  structural_engineer_report?: string,
  electrical_engineer_report?: string,
  ict_engineer_report?: string,
  mechanical_engineer_report?: string,
  environment_health_and_safety_report?: string,
  professional_sustainability_report?: string,

  detailed_design_status?: detailedDesignStatus[],
}

export interface detailedDesignStatus {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}
