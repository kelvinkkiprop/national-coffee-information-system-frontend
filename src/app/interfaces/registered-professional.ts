export interface RegisteredProfessional {
  id?: string,
  user_id?: string,
  professional_body_id?: number,
  membership_number?: string,
  consultant_name?: string,
  email?: string,
  membership_type?: string,
  status?: string,
  postal_address?: string,
  qualification?: string,
  business_name?: string,
  nationality?: string,
  subscription_year?: number,
  good_standing?: string,
  professional_body_status_id?: number,

  professional_body?: professionalBody,
}

export interface professionalBody {
  id?: string,
  name?: string,
  alias?: string,
}
