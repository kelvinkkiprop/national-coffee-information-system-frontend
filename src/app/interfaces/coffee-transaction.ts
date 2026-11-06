export interface CoffeeTransaction {
  id?: string,
  user_id?:any
  traceability_mark?:any

  grade?:any
  quantity?:any
  processed_at?:any
  shipment_ref?:any
  buyer_name?:any
  shipped_on?:any
  stage_id?:any

  created_at?: Date,
  updated_at?: Date,
}
