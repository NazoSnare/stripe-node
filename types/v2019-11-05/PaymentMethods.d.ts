declare namespace Stripe {
  /**
   * The PaymentMethod object.
   */
  interface PaymentMethod {
    billing_details?: PaymentMethod.BillingDetails;

    card?: PaymentMethod.Card;

    card_present?: PaymentMethod.CardPresent;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
     */
    customer?: string | Customer | null;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    ideal?: PaymentMethod.Ideal;

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
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'payment_method';

    sepa_debit?: PaymentMethod.SepaDebit;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type?: PaymentMethod.Type;
  }

  namespace PaymentMethod {
    interface BillingDetails {
      /**
       * Billing address.
       */
      address?: BillingDetails.Address | null;

      /**
       * Email address.
       */
      email?: string | null;

      /**
       * Full name.
       */
      name?: string | null;

      /**
       * Billing phone number (including extension).
       */
      phone?: string | null;
    }

    namespace BillingDetails {
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

    interface Card {
      /**
       * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
       */
      brand: string;

      /**
       * Checks on Card address and CVC if provided.
       */
      checks?: Card.Checks | null;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country?: string | null;

      /**
       * Card description. (Only for internal use only and not typically available in standard API requests.)
       */
      description?: string | null;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example.
       */
      fingerprint?: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string;

      /**
       * Issuer identification number of the card. (Only for internal use only and not typically available in standard API requests.)
       */
      iin?: string | null;

      /**
       * Issuer bank name of the card. (Only for internal use only and not typically available in standard API requests.)
       */
      issuer?: string | null;

      /**
       * The last four digits of the card.
       */
      last4: string;

      /**
       * Contains details on how this Card maybe be used for 3D Secure authentication.
       */
      three_d_secure_usage?: Card.ThreeDSecureUsage | null;

      /**
       * If this Card is part of a card wallet, this contains the details of the card wallet.
       */
      wallet?: Card.Wallet | null;
    }

    namespace Card {
      interface Checks {
        /**
         * If a address line1 was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
         */
        address_line1_check?: string | null;

        /**
         * If a address postal code was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
         */
        address_postal_code_check?: string | null;

        /**
         * If a CVC was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
         */
        cvc_check?: string | null;
      }

      interface ThreeDSecureUsage {
        /**
         * Whether 3D Secure is supported on this card.
         */
        supported: boolean;
      }

      interface Wallet {
        amex_express_checkout?: Wallet.AmexExpressCheckout;

        apple_pay?: Wallet.ApplePay;

        /**
         * (For tokenized numbers only.) The last four digits of the device account number.
         */
        dynamic_last4?: string | null;

        google_pay?: Wallet.GooglePay;

        masterpass?: Wallet.Masterpass;

        samsung_pay?: Wallet.SamsungPay;

        /**
         * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
         */
        type: Wallet.Type;

        visa_checkout?: Wallet.VisaCheckout;
      }

      namespace Wallet {
        interface AmexExpressCheckout {}

        interface ApplePay {}

        interface GooglePay {}

        interface Masterpass {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address?: Masterpass.BillingAddress | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email?: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name?: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address?: Masterpass.ShippingAddress | null;
        }

        namespace Masterpass {
          interface BillingAddress {
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

          interface ShippingAddress {
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

        interface SamsungPay {}

        type Type =
          | 'amex_express_checkout'
          | 'apple_pay'
          | 'google_pay'
          | 'masterpass'
          | 'samsung_pay'
          | 'visa_checkout'

        interface VisaCheckout {
          /**
           * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          billing_address?: VisaCheckout.BillingAddress | null;

          /**
           * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          email?: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          name?: string | null;

          /**
           * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          shipping_address?: VisaCheckout.ShippingAddress | null;
        }

        namespace VisaCheckout {
          interface BillingAddress {
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

          interface ShippingAddress {
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
      }
    }

    interface CardPresent {}

    interface Ideal {
      /**
       * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
       */
      bank?: Ideal.Bank | null;

      /**
       * The Bank Identifier Code of the customer's bank, if the bank was provided.
       */
      bic?: Ideal.Bic | null;
    }

    namespace Ideal {
      type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'rabobank'
        | 'regiobank'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'

      type Bic =
        | 'ABNANL2A'
        | 'ASNBNL21'
        | 'BUNQNL2A'
        | 'FVLBNL22'
        | 'HANDNL2A'
        | 'INGBNL2A'
        | 'KNABNL2H'
        | 'MOYONL21'
        | 'RABONL2U'
        | 'RBRBNL21'
        | 'SNSBNL2A'
        | 'TRIONL2U'
    }

    interface SepaDebit {
      /**
       * Bank code of bank associated with the bank account.
       */
      bank_code?: string | null;

      /**
       * Branch code of bank associated with the bank account.
       */
      branch_code?: string | null;

      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country?: string | null;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint?: string | null;

      /**
       * Last four characters of the IBAN.
       */
      last4?: string | null;
    }

    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
   */
  interface PaymentMethodCreateParams {
    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodCreateParams.BillingDetails;

    /**
     * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When creating with a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
     */
    card?: PaymentMethodCreateParams.Card1 | PaymentMethodCreateParams.Card2;

    /**
     * The `Customer` to whom the original PaymentMethod is attached.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
     */
    ideal?: PaymentMethodCreateParams.Ideal;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The PaymentMethod to share.
     */
    payment_method?: string;

    /**
     * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
     */
    sepa_debit?: PaymentMethodCreateParams.SepaDebit;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. Required unless `payment_method` is specified (see the [Cloning PaymentMethods](https://stripe.com/docs/payments/payment-methods/connect#cloning-payment-methods) guide)
     */
    type?: PaymentMethodCreateParams.Type;
  }

  namespace PaymentMethodCreateParams {
    interface BillingDetails {
      /**
       * Billing address.
       */
      address?: BillingDetails.Address;

      /**
       * Email address.
       */
      email?: string;

      /**
       * Full name.
       */
      name?: string;

      /**
       * Billing phone number (including extension).
       */
      phone?: string;
    }

    namespace BillingDetails {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }

    interface Card1 {
      /**
       * The card's CVC. It is highly recommended to always include this value.
       */
      cvc?: string;

      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year: number;

      /**
       * The card number, as a string without any separators.
       */
      number: string;
    }
    interface Card2 {
      token: string;
    }

    interface Ideal {
      /**
       * The customer's bank.
       */
      bank?: Ideal.Bank;
    }

    namespace Ideal {
      type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'rabobank'
        | 'regiobank'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
    }

    interface SepaDebit {
      iban: string;
    }

    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Returns a list of PaymentMethods for a given Customer
   */
  interface PaymentMethodListParams {
    /**
     * The ID of the customer whose PaymentMethods will be retrieved.
     */
    customer: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;

    /**
     * A required filter on the list, based on the object `type` field.
     */
    type: PaymentMethodListParams.Type;
  }

  namespace PaymentMethodListParams {
    type Type = 'card' | 'card_present' | 'ideal' | 'sepa_debit'
  }

  /**
   * Retrieves a PaymentMethod object.
   */
  interface PaymentMethodRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.
   */
  interface PaymentMethodUpdateParams {
    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodUpdateParams.BillingDetails;

    card?: PaymentMethodUpdateParams.Card;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    sepa_debit?: PaymentMethodUpdateParams.SepaDebit;
  }

  namespace PaymentMethodUpdateParams {
    interface BillingDetails {
      /**
       * Billing address.
       */
      address?: BillingDetails.Address;

      /**
       * Email address.
       */
      email?: string;

      /**
       * Full name.
       */
      name?: string;

      /**
       * Billing phone number (including extension).
       */
      phone?: string;
    }

    namespace BillingDetails {
      interface Address {
        city?: string;

        country?: string;

        line1?: string;

        line2?: string;

        postal_code?: string;

        state?: string;
      }
    }

    interface Card {
      /**
       * Two-digit number representing the card's expiration month.
       */
      exp_month?: number;

      /**
       * Four-digit number representing the card's expiration year.
       */
      exp_year?: number;
    }

    interface SepaDebit {}
  }

  /**
   * Attaches a PaymentMethod object to a Customer.
   *
   * To use this PaymentMethod as the default for invoice or subscription payments,
   * set [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
   * on the Customer to the PaymentMethod's ID.
   */
  interface PaymentMethodAttachParams {
    /**
     * The ID of the customer to which to attach the PaymentMethod.
     */
    customer: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Detaches a PaymentMethod object from a Customer.
   */
  interface PaymentMethodDetachParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class PaymentMethodsResource {
    /**
     * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
     */
    create(
      params?: PaymentMethodCreateParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Returns a list of PaymentMethods for a given Customer
     */
    list(
      params: PaymentMethodListParams,
      options?: HeaderOptions
    ): Promise<ApiList<PaymentMethod>>;

    /**
     * Retrieves a PaymentMethod object.
     */
    retrieve(
      id: string,
      params?: PaymentMethodRetrieveParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.
     */
    update(
      id: string,
      params?: PaymentMethodUpdateParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Attaches a PaymentMethod object to a Customer.
     *
     * To use this PaymentMethod as the default for invoice or subscription payments,
     * set [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
     * on the Customer to the PaymentMethod's ID.
     */
    attach(
      id: string,
      params: PaymentMethodAttachParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;

    /**
     * Detaches a PaymentMethod object from a Customer.
     */
    detach(
      id: string,
      params?: PaymentMethodDetachParams,
      options?: HeaderOptions
    ): Promise<PaymentMethod>;
  }
}