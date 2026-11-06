export interface CoffeeDelivery {
  id?: string,
  number?:any,

  user_id?:any,
  farmer_id?:any,
  plot_id?:any,
  // cooperative_society_id?:any,
  // collection_centre_id?:any,
  coffee_species_id?:any,
  harvest_date?:any,
  harvest_season?:any,
  delivery_date?:any,
  number_of_bags?:any,
  quantity?:any,
  price_per_kg?:any,

  lot_id?:any,
  recorded_by?:any,
  status_id?:any,

  created_at?: Date,
  updated_at?: Date,
}

