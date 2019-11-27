declare namespace Stripe {
  namespace Issuing {
    /**
     * The Cardholder object.
     */
    interface Cardholder {
      authorization_controls?: Cardholder.AuthorizationControls | null;

      billing?: Cardholder.Billing;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: Cardholder.Company | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * The cardholder's email address.
       */
      email?: string | null;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: Cardholder.Individual | null;

      /**
       * Whether or not this cardholder is the default cardholder.
       */
      is_default?: boolean;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's name. This will be printed on cards issued to them.
       */
      name?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.cardholder';

      /**
       * The cardholder's phone number.
       */
      phone_number?: string | null;

      requirements?: Cardholder.Requirements;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards.
       */
      status?: Cardholder.Status;

      /**
       * One of `individual` or `business_entity`.
       */
      type?: Cardholder.Type;
    }

    namespace Cardholder {
      interface AuthorizationControls {
        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations permitted on this card.
         */
        allowed_categories?:
          | Array<AuthorizationControls.AllowedCategory>
          | null;

        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to always decline on this card.
         */
        blocked_categories?:
          | Array<AuthorizationControls.BlockedCategory>
          | null;

        /**
         * Limit the spending with rules based on time intervals and categories.
         */
        spending_limits?: Array<AuthorizationControls.SpendingLimit> | null;

        /**
         * Currency for the amounts within spending_limits.
         */
        spending_limits_currency?: string | null;
      }

      namespace AuthorizationControls {
        type AllowedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        type BlockedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        interface SpendingLimit {
          /**
           * Maximum amount allowed to spend per time interval.
           */
          amount: number;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) on which to apply the spending limit. Leave this blank to limit all charges.
           */
          categories?: Array<SpendingLimit.Category> | null;

          /**
           * The time interval with which to apply this spending limit towards. Allowed values are `per_authorization`, `daily`, `weekly`, `monthly`, `yearly`, or `all_time`.
           */
          interval: SpendingLimit.Interval;
        }

        namespace SpendingLimit {
          type Category =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards'

          type Interval =
            | 'all_time'
            | 'daily'
            | 'monthly'
            | 'per_authorization'
            | 'weekly'
            | 'yearly'
        }
      }

      interface Billing {
        address: Billing.Address;

        name?: string | null;
      }

      namespace Billing {
        interface Address {
          /**
           * City/District/Suburb/Town/Village.
           */
          city?: string | null;

          /**
           * 2-letter country code.
           */
          country?: string | null;

          /**
           * Address line 1 (Street address/PO Box/Company name).
           */
          line1?: string | null;

          /**
           * Address line 2 (Apartment/Suite/Unit/Building).
           */
          line2?: string | null;

          /**
           * ZIP or postal code.
           */
          postal_code?: string | null;

          /**
           * State/County/Province/Region.
           */
          state?: string | null;
        }
      }

      interface Company {
        /**
         * Whether the company's business ID number was provided.
         */
        tax_id_provided: boolean;
      }

      interface Individual {
        /**
         * The date of birth of this cardholder.
         */
        dob?: Individual.Dob | null;

        /**
         * The first name of this cardholder.
         */
        first_name: string;

        /**
         * The last name of this cardholder.
         */
        last_name: string;

        /**
         * Government-issued ID document for this cardholder.
         */
        verification?: Individual.Verification | null;
      }

      namespace Individual {
        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day?: number | null;

          /**
           * The month of birth, between 1 and 12.
           */
          month?: number | null;

          /**
           * The four-digit year of birth.
           */
          year?: number | null;
        }

        interface Verification {
          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document | null;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of a document returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            back?: string | File | null;

            /**
             * The front of a document returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            front?: string | File | null;
          }
        }
      }

      interface Requirements {
        /**
         * If the cardholder is disabled, this string describes why. Can be one of `listed`, `rejected.listed`, or `under_review`.
         */
        disabled_reason?: Requirements.DisabledReason | null;

        /**
         * If not empty, this field contains the list of fields that need to be collected in order to verify and re-enabled the cardholder.
         */
        past_due?: Array<Requirements.PastDue> | null;
      }

      namespace Requirements {
        type DisabledReason = 'listed' | 'rejected.listed' | 'under_review'

        type PastDue =
          | 'individual.dob.day'
          | 'individual.dob.month'
          | 'individual.dob.year'
          | 'individual.first_name'
          | 'individual.last_name'
          | 'individual.verification.document'
      }

      type Status = 'active' | 'blocked' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Creates a new Issuing Cardholder object that can be issued cards.
     */
    interface CardholderCreateParams {
      /**
       * Spending rules that give you control over how your cardholders can make charges. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: CardholderCreateParams.AuthorizationControls;

      /**
       * The cardholder's billing address.
       */
      billing: CardholderCreateParams.Billing;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: CardholderCreateParams.Company;

      /**
       * The cardholder's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: CardholderCreateParams.Individual;

      /**
       * Specifies whether to set this as the default cardholder.
       */
      is_default?: boolean;

      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's name. This will be printed on cards issued to them.
       */
      name: string;

      /**
       * The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already.
       */
      phone_number?: string;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards. Defaults to `inactive`.
       */
      status?: CardholderCreateParams.Status;

      /**
       * One of `individual` or `business_entity`.
       */
      type: CardholderCreateParams.Type;
    }

    namespace CardholderCreateParams {
      interface AuthorizationControls {
        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations permitted on this card.
         */
        allowed_categories?: Array<AuthorizationControls.AllowedCategory>;

        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to always decline on this card.
         */
        blocked_categories?: Array<AuthorizationControls.BlockedCategory>;

        /**
         * Limit the spending with rules based on time intervals and categories.
         */
        spending_limits?: Array<AuthorizationControls.SpendingLimit>;

        /**
         * Currency for your spending limits. Defaults to your merchant country's currency.
         */
        spending_limits_currency?: string;
      }

      namespace AuthorizationControls {
        type AllowedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        type BlockedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        interface SpendingLimit {
          /**
           * Maximum amount allowed to spend per time interval.
           */
          amount: number;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) on which to apply the spending limit. Leave this blank to limit all charges.
           */
          categories?: Array<SpendingLimit.Category>;

          /**
           * The time interval with which to apply this spending limit towards. Allowed values are 'per_authorization', 'daily', 'weekly', 'monthly', 'yearly', and 'all_time'.
           */
          interval: SpendingLimit.Interval;
        }

        namespace SpendingLimit {
          type Category =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards'

          type Interval =
            | 'all_time'
            | 'daily'
            | 'monthly'
            | 'per_authorization'
            | 'weekly'
            | 'yearly'
        }
      }

      interface Billing {
        address: Billing.Address;

        /**
         * Deprecated param. Passing value for this param is simply discarded. It will be removed in the next client library major version
         */
        name?: string;
      }

      namespace Billing {
        interface Address {
          city: string;

          country: string;

          line1: string;

          line2?: string;

          postal_code: string;

          state?: string;
        }
      }

      interface Company {
        /**
         * The entity's business ID number.
         */
        tax_id?: string;
      }

      interface Individual {
        /**
         * The date of birth of this cardholder.
         */
        dob?: Individual.Dob;

        /**
         * The first name of this cardholder.
         */
        first_name: string;

        /**
         * The last name of this cardholder.
         */
        last_name: string;

        /**
         * Government-issued ID document for this cardholder.
         */
        verification?: Individual.Verification;
      }

      namespace Individual {
        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }

        interface Verification {
          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            front?: string;
          }
        }
      }

      type Status = 'active' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface CardholderListParams {
      /**
       * Only return cardholders that were created during the given date interval.
       */
      created?: number | CardholderListParams.Created;

      /**
       * Only return cardholders that have the given email address.
       */
      email?: string;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return the default cardholder.
       */
      is_default?: boolean;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * Only return cardholders that have the given phone number.
       */
      phone_number?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
       */
      status?: CardholderListParams.Status;

      /**
       * Only return cardholders that have the given type. One of `individual` or `business_entity`.
       */
      type?: CardholderListParams.Type;
    }

    namespace CardholderListParams {
      interface Created {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }

      type Status = 'active' | 'blocked' | 'inactive'

      type Type = 'business_entity' | 'individual'
    }

    /**
     * Retrieves an Issuing Cardholder object.
     */
    interface CardholderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface CardholderUpdateParams {
      /**
       * Spending rules that give you some control over how your cards can be used. Refer to our [authorizations](https://stripe.com/docs/issuing/authorizations) documentation for more details.
       */
      authorization_controls?: CardholderUpdateParams.AuthorizationControls;

      /**
       * The cardholder's billing address.
       */
      billing?: CardholderUpdateParams.Billing;

      /**
       * Additional information about a `business_entity` cardholder.
       */
      company?: CardholderUpdateParams.Company;

      /**
       * The cardholder's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Additional information about an `individual` cardholder.
       */
      individual?: CardholderUpdateParams.Individual;

      /**
       * Specifies whether to set this as the default cardholder.
       */
      is_default?: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The cardholder's phone number.
       */
      phone_number?: string;

      /**
       * Specifies whether to permit authorizations on this cardholder's cards.
       */
      status?: CardholderUpdateParams.Status;
    }

    namespace CardholderUpdateParams {
      interface AuthorizationControls {
        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations permitted on this card.
         */
        allowed_categories?: Array<AuthorizationControls.AllowedCategory>;

        /**
         * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to always decline on this card.
         */
        blocked_categories?: Array<AuthorizationControls.BlockedCategory>;

        /**
         * Limit the spending with rules based on time intervals and categories.
         */
        spending_limits?: Array<AuthorizationControls.SpendingLimit>;

        /**
         * Currency for your spending limits. Defaults to your merchant country's currency.
         */
        spending_limits_currency?: string;
      }

      namespace AuthorizationControls {
        type AllowedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        type BlockedCategory =
          | 'ac_refrigeration_repair'
          | 'accounting_bookkeeping_services'
          | 'advertising_services'
          | 'agricultural_cooperative'
          | 'airlines_air_carriers'
          | 'airports_flying_fields'
          | 'ambulance_services'
          | 'amusement_parks_carnivals'
          | 'antique_reproductions'
          | 'antique_shops'
          | 'aquariums'
          | 'architectural_surveying_services'
          | 'art_dealers_and_galleries'
          | 'artists_supply_and_craft_shops'
          | 'auto_and_home_supply_stores'
          | 'auto_body_repair_shops'
          | 'auto_paint_shops'
          | 'auto_service_shops'
          | 'automated_cash_disburse'
          | 'automated_fuel_dispensers'
          | 'automobile_associations'
          | 'automotive_parts_and_accessories_stores'
          | 'automotive_tire_stores'
          | 'bail_and_bond_payments'
          | 'bakeries'
          | 'bands_orchestras'
          | 'barber_and_beauty_shops'
          | 'betting_casino_gambling'
          | 'bicycle_shops'
          | 'billiard_pool_establishments'
          | 'boat_dealers'
          | 'boat_rentals_and_leases'
          | 'book_stores'
          | 'books_periodicals_and_newspapers'
          | 'bowling_alleys'
          | 'bus_lines'
          | 'business_secretarial_schools'
          | 'buying_shopping_services'
          | 'cable_satellite_and_other_pay_television_and_radio'
          | 'camera_and_photographic_supply_stores'
          | 'candy_nut_and_confectionery_stores'
          | 'car_and_truck_dealers_new_used'
          | 'car_and_truck_dealers_used_only'
          | 'car_rental_agencies'
          | 'car_washes'
          | 'carpentry_services'
          | 'carpet_upholstery_cleaning'
          | 'caterers'
          | 'charitable_and_social_service_organizations_fundraising'
          | 'chemicals_and_allied_products'
          | 'child_care_services'
          | 'childrens_and_infants_wear_stores'
          | 'chiropodists_podiatrists'
          | 'chiropractors'
          | 'cigar_stores_and_stands'
          | 'civic_social_fraternal_associations'
          | 'cleaning_and_maintenance'
          | 'clothing_rental'
          | 'colleges_universities'
          | 'commercial_equipment'
          | 'commercial_footwear'
          | 'commercial_photography_art_and_graphics'
          | 'commuter_transport_and_ferries'
          | 'computer_network_services'
          | 'computer_programming'
          | 'computer_repair'
          | 'computer_software_stores'
          | 'computers_peripherals_and_software'
          | 'concrete_work_services'
          | 'construction_materials'
          | 'consulting_public_relations'
          | 'correspondence_schools'
          | 'cosmetic_stores'
          | 'counseling_services'
          | 'country_clubs'
          | 'courier_services'
          | 'court_costs'
          | 'credit_reporting_agencies'
          | 'cruise_lines'
          | 'dairy_products_stores'
          | 'dance_hall_studios_schools'
          | 'dating_escort_services'
          | 'dentists_orthodontists'
          | 'department_stores'
          | 'detective_agencies'
          | 'digital_goods_applications'
          | 'digital_goods_games'
          | 'digital_goods_large_volume'
          | 'digital_goods_media'
          | 'direct_marketing_catalog_merchant'
          | 'direct_marketing_combination_catalog_and_retail_merchant'
          | 'direct_marketing_inbound_telemarketing'
          | 'direct_marketing_insurance_services'
          | 'direct_marketing_other'
          | 'direct_marketing_outbound_telemarketing'
          | 'direct_marketing_subscription'
          | 'direct_marketing_travel'
          | 'discount_stores'
          | 'doctors'
          | 'door_to_door_sales'
          | 'drapery_window_covering_and_upholstery_stores'
          | 'drinking_places'
          | 'drug_stores_and_pharmacies'
          | 'drugs_drug_proprietaries_and_druggist_sundries'
          | 'dry_cleaners'
          | 'durable_goods'
          | 'duty_free_stores'
          | 'eating_places_restaurants'
          | 'educational_services'
          | 'electric_razor_stores'
          | 'electrical_parts_and_equipment'
          | 'electrical_services'
          | 'electronics_repair_shops'
          | 'electronics_stores'
          | 'elementary_secondary_schools'
          | 'employment_temp_agencies'
          | 'equipment_rental'
          | 'exterminating_services'
          | 'family_clothing_stores'
          | 'fast_food_restaurants'
          | 'financial_institutions'
          | 'fines_government_administrative_entities'
          | 'fireplace_fireplace_screens_and_accessories_stores'
          | 'floor_covering_stores'
          | 'florists'
          | 'florists_supplies_nursery_stock_and_flowers'
          | 'freezer_and_locker_meat_provisioners'
          | 'fuel_dealers_non_automotive'
          | 'funeral_services_crematories'
          | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
          | 'furniture_repair_refinishing'
          | 'furriers_and_fur_shops'
          | 'general_services'
          | 'gift_card_novelty_and_souvenir_shops'
          | 'glass_paint_and_wallpaper_stores'
          | 'glassware_crystal_stores'
          | 'golf_courses_public'
          | 'government_services'
          | 'grocery_stores_supermarkets'
          | 'hardware_equipment_and_supplies'
          | 'hardware_stores'
          | 'health_and_beauty_spas'
          | 'hearing_aids_sales_and_supplies'
          | 'heating_plumbing_a_c'
          | 'hobby_toy_and_game_shops'
          | 'home_supply_warehouse_stores'
          | 'hospitals'
          | 'hotels_motels_and_resorts'
          | 'household_appliance_stores'
          | 'industrial_supplies'
          | 'information_retrieval_services'
          | 'insurance_default'
          | 'insurance_underwriting_premiums'
          | 'intra_company_purchases'
          | 'jewelry_stores_watches_clocks_and_silverware_stores'
          | 'landscaping_services'
          | 'laundries'
          | 'laundry_cleaning_services'
          | 'legal_services_attorneys'
          | 'luggage_and_leather_goods_stores'
          | 'lumber_building_materials_stores'
          | 'manual_cash_disburse'
          | 'marinas_service_and_supplies'
          | 'masonry_stonework_and_plaster'
          | 'massage_parlors'
          | 'medical_and_dental_labs'
          | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
          | 'medical_services'
          | 'membership_organizations'
          | 'mens_and_boys_clothing_and_accessories_stores'
          | 'mens_womens_clothing_stores'
          | 'metal_service_centers'
          | 'miscellaneous'
          | 'miscellaneous_apparel_and_accessory_shops'
          | 'miscellaneous_auto_dealers'
          | 'miscellaneous_business_services'
          | 'miscellaneous_food_stores'
          | 'miscellaneous_general_merchandise'
          | 'miscellaneous_general_services'
          | 'miscellaneous_home_furnishing_specialty_stores'
          | 'miscellaneous_publishing_and_printing'
          | 'miscellaneous_recreation_services'
          | 'miscellaneous_repair_shops'
          | 'miscellaneous_specialty_retail'
          | 'mobile_home_dealers'
          | 'motion_picture_theaters'
          | 'motor_freight_carriers_and_trucking'
          | 'motor_homes_dealers'
          | 'motor_vehicle_supplies_and_new_parts'
          | 'motorcycle_shops_and_dealers'
          | 'motorcycle_shops_dealers'
          | 'music_stores_musical_instruments_pianos_and_sheet_music'
          | 'news_dealers_and_newsstands'
          | 'non_fi_money_orders'
          | 'non_fi_stored_value_card_purchase_load'
          | 'nondurable_goods'
          | 'nurseries_lawn_and_garden_supply_stores'
          | 'nursing_personal_care'
          | 'office_and_commercial_furniture'
          | 'opticians_eyeglasses'
          | 'optometrists_ophthalmologist'
          | 'orthopedic_goods_prosthetic_devices'
          | 'osteopaths'
          | 'package_stores_beer_wine_and_liquor'
          | 'paints_varnishes_and_supplies'
          | 'parking_lots_garages'
          | 'passenger_railways'
          | 'pawn_shops'
          | 'pet_shops_pet_food_and_supplies'
          | 'petroleum_and_petroleum_products'
          | 'photo_developing'
          | 'photographic_photocopy_microfilm_equipment_and_supplies'
          | 'photographic_studios'
          | 'picture_video_production'
          | 'piece_goods_notions_and_other_dry_goods'
          | 'plumbing_heating_equipment_and_supplies'
          | 'political_organizations'
          | 'postal_services_government_only'
          | 'precious_stones_and_metals_watches_and_jewelry'
          | 'professional_services'
          | 'public_warehousing_and_storage'
          | 'quick_copy_repro_and_blueprint'
          | 'railroads'
          | 'real_estate_agents_and_managers_rentals'
          | 'record_stores'
          | 'recreational_vehicle_rentals'
          | 'religious_goods_stores'
          | 'religious_organizations'
          | 'roofing_siding_sheet_metal'
          | 'secretarial_support_services'
          | 'security_brokers_dealers'
          | 'service_stations'
          | 'sewing_needlework_fabric_and_piece_goods_stores'
          | 'shoe_repair_hat_cleaning'
          | 'shoe_stores'
          | 'small_appliance_repair'
          | 'snowmobile_dealers'
          | 'special_trade_services'
          | 'specialty_cleaning'
          | 'sporting_goods_stores'
          | 'sporting_recreation_camps'
          | 'sports_and_riding_apparel_stores'
          | 'sports_clubs_fields'
          | 'stamp_and_coin_stores'
          | 'stationary_office_supplies_printing_and_writing_paper'
          | 'stationery_stores_office_and_school_supply_stores'
          | 'swimming_pools_sales'
          | 't_ui_travel_germany'
          | 'tailors_alterations'
          | 'tax_payments_government_agencies'
          | 'tax_preparation_services'
          | 'taxicabs_limousines'
          | 'telecommunication_equipment_and_telephone_sales'
          | 'telecommunication_services'
          | 'telegraph_services'
          | 'tent_and_awning_shops'
          | 'testing_laboratories'
          | 'theatrical_ticket_agencies'
          | 'timeshares'
          | 'tire_retreading_and_repair'
          | 'tolls_bridge_fees'
          | 'tourist_attractions_and_exhibits'
          | 'towing_services'
          | 'trailer_parks_campgrounds'
          | 'transportation_services'
          | 'travel_agencies_tour_operators'
          | 'truck_stop_iteration'
          | 'truck_utility_trailer_rentals'
          | 'typesetting_plate_making_and_related_services'
          | 'typewriter_stores'
          | 'u_s_federal_government_agencies_or_departments'
          | 'uniforms_commercial_clothing'
          | 'used_merchandise_and_secondhand_stores'
          | 'utilities'
          | 'variety_stores'
          | 'veterinary_services'
          | 'video_amusement_game_supplies'
          | 'video_game_arcades'
          | 'video_tape_rental_stores'
          | 'vocational_trade_schools'
          | 'watch_jewelry_repair'
          | 'welding_repair'
          | 'wholesale_clubs'
          | 'wig_and_toupee_stores'
          | 'wires_money_orders'
          | 'womens_accessory_and_specialty_shops'
          | 'womens_ready_to_wear_stores'
          | 'wrecking_and_salvage_yards'

        interface SpendingLimit {
          /**
           * Maximum amount allowed to spend per time interval.
           */
          amount: number;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) on which to apply the spending limit. Leave this blank to limit all charges.
           */
          categories?: Array<SpendingLimit.Category>;

          /**
           * The time interval with which to apply this spending limit towards. Allowed values are 'per_authorization', 'daily', 'weekly', 'monthly', 'yearly', and 'all_time'.
           */
          interval: SpendingLimit.Interval;
        }

        namespace SpendingLimit {
          type Category =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards'

          type Interval =
            | 'all_time'
            | 'daily'
            | 'monthly'
            | 'per_authorization'
            | 'weekly'
            | 'yearly'
        }
      }

      interface Billing {
        address: Billing.Address;

        /**
         * Deprecated param. Passing value for this param is simply discarded. It will be removed in the next client library major version
         */
        name?: string;
      }

      namespace Billing {
        interface Address {
          city: string;

          country: string;

          line1: string;

          line2?: string;

          postal_code: string;

          state?: string;
        }
      }

      interface Company {
        /**
         * The entity's business ID number.
         */
        tax_id?: string;
      }

      interface Individual {
        /**
         * The date of birth of this cardholder.
         */
        dob?: Individual.Dob;

        /**
         * The first name of this cardholder.
         */
        first_name: string;

        /**
         * The last name of this cardholder.
         */
        last_name: string;

        /**
         * Government-issued ID document for this cardholder.
         */
        verification?: Individual.Verification;
      }

      namespace Individual {
        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }

        interface Verification {
          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
             */
            front?: string;
          }
        }
      }

      type Status = 'active' | 'inactive'
    }

    class CardholdersResource {
      /**
       * Creates a new Issuing Cardholder object that can be issued cards.
       */
      create(
        params: CardholderCreateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;

      /**
       * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: CardholderListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Cardholder>>;

      /**
       * Retrieves an Issuing Cardholder object.
       */
      retrieve(
        id: string,
        params?: CardholderRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;

      /**
       * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: CardholderUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Cardholder>;
    }
  }
}