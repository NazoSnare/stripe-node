declare namespace Stripe {
  /**
   * The Dispute object.
   */
  interface Dispute {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'dispute';

    /**
     * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
     */
    amount: number;

    /**
     * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
     */
    balance_transactions: Array<BalanceTransaction>;

    /**
     * ID of the charge that was disputed.
     */
    charge: string | Charge;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    evidence: Dispute.Evidence;

    evidence_details: Dispute.EvidenceDetails;

    /**
     * If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
     */
    is_charge_refundable: boolean;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * Network-dependent reason code for the dispute.
     */
    network_reason_code?: string | null;

    /**
     * ID of the PaymentIntent that was disputed.
     */
    payment_intent: string | PaymentIntent | null;

    /**
     * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories).
     */
    reason: string;

    /**
     * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.
     */
    status: Dispute.Status;
  }

  namespace Dispute {
    interface Evidence {
      /**
       * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
       */
      access_activity_log: string | null;

      /**
       * The billing address provided by the customer.
       */
      billing_address: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
       */
      cancellation_policy: string | File | null;

      /**
       * An explanation of how and when the customer was shown your refund policy prior to purchase.
       */
      cancellation_policy_disclosure: string | null;

      /**
       * A justification for why the customer's subscription was not canceled.
       */
      cancellation_rebuttal: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
       */
      customer_communication: string | File | null;

      /**
       * The email address of the customer.
       */
      customer_email_address: string | null;

      /**
       * The name of the customer.
       */
      customer_name: string | null;

      /**
       * The IP address that the customer used when making the purchase.
       */
      customer_purchase_ip: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
       */
      customer_signature: string | File | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
       */
      duplicate_charge_documentation: string | File | null;

      /**
       * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
       */
      duplicate_charge_explanation: string | null;

      /**
       * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
       */
      duplicate_charge_id: string | null;

      /**
       * A description of the product or service that was sold.
       */
      product_description: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
       */
      receipt: string | File | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
       */
      refund_policy: string | File | null;

      /**
       * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
       */
      refund_policy_disclosure: string | null;

      /**
       * A justification for why the customer is not entitled to a refund.
       */
      refund_refusal_explanation: string | null;

      /**
       * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
       */
      service_date: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
       */
      service_documentation: string | File | null;

      /**
       * The address to which a physical product was shipped. You should try to include as complete address information as possible.
       */
      shipping_address: string | null;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
       */
      shipping_carrier: string | null;

      /**
       * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
       */
      shipping_date: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
       */
      shipping_documentation: string | File | null;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      shipping_tracking_number: string | null;

      /**
       * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
       */
      uncategorized_file: string | File | null;

      /**
       * Any additional evidence or statements.
       */
      uncategorized_text: string | null;
    }

    interface EvidenceDetails {
      /**
       * Date by which evidence must be submitted in order to successfully challenge dispute. Will be null if the customer's bank or credit card company doesn't allow a response for this particular dispute.
       */
      due_by: number | null;

      /**
       * Whether evidence has been staged for this dispute.
       */
      has_evidence: boolean;

      /**
       * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
       */
      past_due: boolean;

      /**
       * The number of times evidence has been submitted. Typically, you may only submit evidence once.
       */
      submission_count: number;
    }

    type Status =
      | 'charge_refunded'
      | 'lost'
      | 'needs_response'
      | 'under_review'
      | 'warning_closed'
      | 'warning_needs_response'
      | 'warning_under_review'
      | 'won'
  }

  interface DisputeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  interface DisputeUpdateParams {
    /**
     * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
     */
    evidence?: DisputeUpdateParams.Evidence;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs that you can attach to a dispute object. This can be useful for storing additional information about the dispute in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
     */
    submit?: boolean;
  }

  namespace DisputeUpdateParams {
    interface Evidence {
      /**
       * Has a maximum character count of 20,000.
       */
      access_activity_log?: string;

      billing_address?: string;

      cancellation_policy?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      cancellation_policy_disclosure?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      cancellation_rebuttal?: string;

      customer_communication?: string;

      customer_email_address?: string;

      customer_name?: string;

      customer_purchase_ip?: string;

      customer_signature?: string;

      duplicate_charge_documentation?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      duplicate_charge_explanation?: string;

      duplicate_charge_id?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      product_description?: string;

      receipt?: string;

      refund_policy?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      refund_policy_disclosure?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      refund_refusal_explanation?: string;

      service_date?: string;

      service_documentation?: string;

      shipping_address?: string;

      shipping_carrier?: string;

      shipping_date?: string;

      shipping_documentation?: string;

      shipping_tracking_number?: string;

      uncategorized_file?: string;

      /**
       * Has a maximum character count of 20,000.
       */
      uncategorized_text?: string;
    }
  }

  interface DisputeListParams {
    /**
     * Only return disputes associated to the charge specified by this charge ID.
     */
    charge?: string;

    created?: number | DisputeListParams.Created;

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
     * Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
     */
    payment_intent?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace DisputeListParams {
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
  }

  interface DisputeCloseParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class DisputesResource {
    /**
     * Retrieves the dispute with the given ID.
     */
    retrieve(
      id: string,
      params?: DisputeRetrieveParams,
      options?: RequestOptions
    ): Promise<Dispute>;
    retrieve(id: string, options?: RequestOptions): Promise<Dispute>;

    /**
     * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your [dashboard](https://dashboard.stripe.com/disputes), but if you prefer, you can use the API to submit evidence programmatically.
     *
     * Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our [guide to dispute types](https://stripe.com/docs/disputes/categories).
     */
    update(
      id: string,
      params?: DisputeUpdateParams,
      options?: RequestOptions
    ): Promise<Dispute>;

    /**
     * Returns a list of your disputes.
     */
    list(
      params?: DisputeListParams,
      options?: RequestOptions
    ): ApiListPromise<Dispute>;
    list(options?: RequestOptions): ApiListPromise<Dispute>;

    /**
     * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.
     *
     * The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.
     */
    close(
      id: string,
      params?: DisputeCloseParams,
      options?: RequestOptions
    ): Promise<Dispute>;
    close(id: string, options?: RequestOptions): Promise<Dispute>;
  }
}