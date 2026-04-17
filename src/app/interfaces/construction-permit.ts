export interface ConstructionPermit {
  id?: string,
  investor_id?: string,
  plan_submission_type_id?: string,

  professional_body_id?: string,
  membership_number?: string,
  consultant_name?: string,
  address?: string,
  email?: string,
  citizenship?: string,

  project_brief?: string,
  project_purpose?: string,

  site_plan_and_analysis?: string,
  context_analysis?: string,
  concept_plan?: string,
  geotechnical_report?: string,
  topographical_survey?: string,
  parking_strategy?: string,
  traffic_management_plan?: string,
  estimated_utility_demand_requirements?: string,

  project_sustainability_brief?: string,
  green_certification_id?: string,
  other_green_certification?: string,
  sustainability_report?: string,

  has_variations?: any,
  estimated_project_duration?: string,
  estimated_project_construction_cost?: string,
  commitment_to_comply_with_development_codes_and_guidelines?: string,

  // variations
  variation_status_id?: string,
  variation_comments?: string,
  variation_evidence?: string,

  construction_permit?: string,
  detailed_plan_status_id?: string,
  status_id?: number,

  investor?: investor[],
  land_use_plans?: landUsePlans[],
  status?: constructionPermitStatus[],
}

export interface investor {
  id?: string,
  name?: any,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}

export interface landUsePlans {
  id?: string,
  parcel_id?: string,
  parcel_number?: string,
  latitute?: string,
  longitude?: string,
  min_density?: string,
  max_density?: string,
  size?: string,
  min_floor_area?: string,
  max_floor_area?: string,
  min_far?: string,
  max_far?: string,
  minimum_setback?: string,
  min_floor_to_floor_height?: string,
  max_floor_to_floor_height?: string,
  min_number_of_floors?: string,
  max_number_of_floors?: string,
  percentage_of_site_covered_by_existing_building?: string,
  percentage_of_site_covered_by_proposed_building?: string,
  number_of_units_to_be_developed?: string,
  planned_land_use_id?: string,
  primary_secondary_and_preferred_ground_floor_use?: string,
}

export interface constructionPermitStatus {
  id?: string,
  name?: string,
  alias?: string,
  created_at?: Date,
  updated_at?: Date,
}