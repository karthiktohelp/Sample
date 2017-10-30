import React from "react";
import TextField from "material-ui/TextField/index.js";
import RaisedButton from "material-ui/RaisedButton/index.js";
import { Card, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { NavLink } from "react-router-dom";
import ReactScrollbar from "react-scrollbar-js";
import Toggle from "material-ui/Toggle";
import axios from "axios";
import URL from "./URL";
import Badge from 'material-ui/Badge';

export default class Violations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // violations: [
      //   {
      //     name: "violation1",
      //     code: "Aud2",
      //     id: 1
      //   },
      //   {
      //     name: "violation2",
      //     id: 2
      //   },
      //   {
      //     name: "violation3",
      //     code: "Aud444",
      //     id: 3
      //   },
      //   {
      //     name: "violation4",
      //     id: 4
      //   }
      // ],

      audit_id: "",
      extract: false,
      ecode: null,
      audit_Date: "",
      auditid: "",
      list_of_audits: [],
      violations: []
    };
    this.change = this.change.bind(this);
    this.openAudit = this.openAudit.bind(this);
  }

  openAudit(data, e) {
    console.log(data);
    this.setState({
      auditid: data,
      isAudit_id: true
    });
  }
  change(value) {
    if (value) {
      if (this.state.extract == true) {
        this.setState({
          extract: false,
          ecode: value
        });
      } else {
        this.setState({
          extract: true,
          ecode: value
        });
      }
    }
  }
  componentDidMount() {
    console.log("fff", this.props.location.state);

    if (this.props.location.state != null) {
      this.setState({
        audit_id: this.props.location.state.audit_id,
        audit_Date: this.props.location.state.audit_date
      });

    }
	
	console.log("before array");
		var signedcopyworksheeet = [];             //47
		var reviewcopyworksheeet = [];				//48
		var lease_signed_copyworksheeet = [];		//51
		var lease_review_copyworksheeet = [];		//52
		var newusedworksheet = [];					//49
		var publicliability = [];					//50
		var dealerloanerr = [];
		var rollbackk = [];
		var companyservicevehiclee = [];
		var factoryexecutivee = [];
		var democonfirmed = [];
		var demopossible = [];
		var otherasnewdescribee = [];
		var demoarray = [];
		var incorectlyidentifiedstringarray = [];
		var supplierstickervoialationarray = [];
		var docfeeoverchargearray = [];
		var smogfeeoverchargearray = [];
		var smogfeeinspectionduearray = [];
		var theft_deterrent_paid_to_missing_array = [];
		var surface_protection_paid_to_missing_array = [];
		var paid_to_missing_violationarray = [];
		var evr_fee_overchargearray = [];  								//68
		var service_contracts_list_is_violation_array = [];         	//69
		var service_contracts_list_company_violation_array = [];		//70
		var service_contracts_list_months_violation_array = [];
		var service_contractsis_box_signedarray = [];
		var debt_cancellation_term_violationarray = [];
		var debt_cancellation_company_violationarray = [];
		var debt_cancellation_signature_missingarray = [];
		var signature_line_signedarray = [];
		var signature_line_hand_wrritenarray = [];
		var contract_cancellation_proper_valuearray = [];
		var other_line_usedarray = [];
		var license_or_registration_fees_violation_fees_lumpedarray = [];
		var license_or_registration_fees_violation_transfer_fee_too_higharray = [];
		var overcharge_no_spare_overchargearray = [];
		var overcharge_no_demo_overchargearray = [];
		var overcharge_no_on_usedarray = [];
		var overcharge_smog_inspection_overchargearray = [];
		var overcharge_smog_exempt_overchargearray = [];
		var overcharge_smog_insp_when_exemptarray = [];
		var overcharge_smog_exempt_when_insparray = [];
		var smog_exempt_or_fees_violation_underchargearray = [];
		var trade_in_vehicles_over_allowance_array = [];                  //90
		var credit_as_deferred_downarray = [];
		var undisclosed_deferred_downarray = [];
		var company_disclosed_on_contractarray = [];
		var broker_agreement_in_dealarray = [];
		var broker_agreement_completedarray = [];
		var broker_agreement_signedarray = [];
		var second_contract_backdatedarray = [];
		var rescission_letterarray = [];
		var notice_of_rewritten_contractarray = [];
		var describe_section_where_signature_missing = [];
		var describe_section_where_signature_missingarray = [];
		var blank_box_na_array = [];
		var blank_box_blank_array = [];
		var itemized_with_pricearray = [];
		var correct_valuesarray = [];
		var accesory_backupdocument_falsearray = [];
		var theft_deterrent_backup_documentarray = [];
		var surface_protection_backup_documentarray = [];
		var service_contracts_backup_documentarray = [];
		var debt_cancellation_agreement_backuparray = [];
		var term_completedarray = [];
		var debt_cancellation_agreement_backup_price_matcharray = [];
		var debt_cancellation_agreement_backup_missingarray = [];
		var debt_cancellation_agreement_backup_signedarray = [];

		var redflagprogrammeverifiedarray = [];
		var redflagsummaryfoundarray = [];
		var outofwalletquetionusedarray = [];
		var multiplesignedapplicationarray = [];
		var alteredinitialsarray = [];
		var incompleteorblanksarray = [];
		var fivelineapplicationlinedthrougharray = [];
		var buyerguidemissingarray = [];
		var bgpresentcompletevehicleinformationarray = [];
		var bgpresentvehiclehistorydisclosedonbgarray = [];
		var dealercontactinformationarray = [];
		var dealercontactinformationincompletearray = [];
		var bgpresenthowsoldsignedarray = [];
		var dealerwarrantyboxcheckedarray = [];
		var percentagecoveragecompletedarray = [];
		var systemscoveredordurationcompletearray = [];
		var impliedwarrantyboxcheckedearray = [];
		var factorywarrantyboxcheckedarray = [];
		var typeofbuyerguideasisversionarray = [];
		var impliedwarrantyboxcheckedarray = [];
		var mfgusedwarrantyboxcheckedarray = [];
		var factorycpowarrantyasisversionarray = [];
		var advertisingvehiclesoldoverarray = [];
		var hour48voilationarray = [];
		var vehiclehistoryproperlynotdisclosedpriorrentalarray = [];
		var vehiclehistoryproperlynotdisclosedserviceloanerarray = [];
		var vehiclehistoryproperlynotdiscloseddemonstratorarray = [];
		var vehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearray = [];
		var noproofoftranslationarray = [];
		var signatureonalllinesoftranslationarray = [];
		var translatedcontractorleasearray = [];
		var othertranslateddocumentsarray = [];
		var contractcancellationarray = [];
		var precontractdisclosurearray = [];
		var othertranslateddocumentsgaparray = [];
		var ackofcanceledcontractarray = [];
		var contractcancellationoptionagreementmissingarray = [];
		var contractcancellationoptionagreementpresentarray = [];
		var cancellationchargecorrectarray = [];
		var restockingfeecorrectarray = [];
		var deadlinedatecorrectarray = [];
		var deadlinetimecorrectarray = [];
		var mileslessthan250array = [];
		var milesaddedtoodometerreadingarray = [];
		var handwritteninformationarray = [];
		var contractcancellationoptionagreementsignedarray = [];
		var contractcancellationwrittenarray = [];
		var precontractdisclosuremissingarray = [];
		var precontractdisclosurepresentarray = [];
		var precontractdisclosurepresentpricescorrectarray = [];
		var precontractdisclosurepresentpaymentcorrectarray = []
		var precontractdisclosurepresentproductlistcorrectarray = [];
		var handwrittenentriesintiatedarray = [];
		var signedbuyerarray = [];
		var signedcobuyerarray = [];
		var precontractdisclosurerewrittenarray = [];
		var creditscoredisclosuremissingarray = [];
		var customerinfocompletedarray = [];
		var creditscorepresentarray = [];
		var credirrangespresentarray = [];
		var handwrittenentriesintialedarray = [];
		var creditscoredisclosuresignedarray = [];
		var nmvtis_presentarray = [];
		var prior_to_placement_in_inventoryarray = [];
		var federal_privacy_policy_presentarray = [];
		var also_at_date_of_sale_array = [];
		var car_fax_signed_array = [];
		var report_present_array = [];
		var report_completed_array = [];
		var signed_by_customer_array = [];
		var tire_chain_disclosures_located_array = [];
		var odo_262_present_array = [];
		var language_ack__form_in_all_jackets_array = [];
		var recission_letter_sent_with_no_reWritten_contract_array = [];        //   210
		var used_vehicle_history_disclosure_document_in_service_date_disclosed_array = [];
		var used_vehicle_history_disclosure_document_history_initialed_array = [];
		var used_vehicle_history_disclosure_document_disclosure_signed_array = [];
		var statement_of_facts_in_service_date_disclosed_array = [];
		var statement_of_facts_disclosure_signed_array = [];
		var in_house_form_in_service_date_disclosed_array = [];
		var in_house_form_disclosure_signed_array = [];
		var unregistered_dealer_demonstrator_no_disclosure_array = [];
		var dealer_service_vehicle_history_initiated_array = [];
		var dealer_service_vehicle_disclosure_signed_array = [];
		var dealer_service_vehicle_no_disclosure_array = [];    				//    221
		var vehicle_history_document_history_initiated_array = [];				//    222
		var vehicle_history_document_disclosure_signed_array = [];
		var dealer_loaner_vehicle_disclosure_signed_array = [];
		var dealer_loaner_vehicle_in_house_form_disclosure_signed_array = [];
		var dealer_loaner_vehicle_no_disclosure_array = [];
		var dealer_lease_vehicle_history_initiated_array = [];
		var dealer_lease_vehicle_disclosure_signed_array = [];
		var dealer_lease_vehicle_no_disclosure_array = [];
		var dealer_rental_history_initiated_array = [];
		var dealer_rental_disclosure_signed_array = [];
		var dealer_rental_statement_of_facts_array = [];
		var dealer_rental_in_house_form_array = [];
		var dealer_rental_no_disclosure_array = [];
		var publicly_owned_vehicle_history_initiated_array = [];
		var publicly_owned_vehicle_disclosure_signed_array = [];
		var publicly_owned_vehicle_no_disclosure_array = [];
		var taxicab_history_initiated_array = [];
		var taxicab_disclosure_signed_array = [];
		var taxicab_no_disclosure_array = [];
		var transportation_network_history_initiated_array = [];
		var transportation_network_disclosure_signed_array = [];
		var transportation_network_no_disclosure_array = [];
		var salvage_vehicle_history_initiated_array = [];
		var salvage_vehicle_disclosure_signed_array = [];
		var salvage_vehicle_no_disclosure_array = [];
		var lemon_law_buyback_history_initiated_array = [];
		var lemon_law_buyback_disclosure_signed_array = [];
		var lemon_law_buyback_no_disclosure_array = [];
		var stolen_vehicle_history_initiated_array = [];
		var stolen_vehicle_disclosure_signed_array = [];
		var stolen_vehicle_no_disclosure_array = [];
		var form_of_disclosure_car_fax_only_array = [];
		var form_of_disclosure_no_disclosure_array = [];
		var signed_four_square_pencil_desk_sheet_array = [];
		var heat_sheet_array = [];
		var due_bill_30_Day_language_array = [];
		var promissory_note_array = [];
		var hold_check_agreement_array = [];
		var trade_in_pay_off_adjustment_agreement_array = [];
		var monroney_stickers_missing_array = [];
		var buyers_guides_missing_array = [];
		var bumper_impact_labels_array = [];
		var parts_content_labels_array = [];
		var items_price_not_listed_array = [];
		var rollback_violation_monroney_posted_array = [];
		var rollback_violation_no_bg_posted_array = [];
		var demonstrator_violation_no_monroney_posted_array = [];
		var demonstrator_violation_no_bg_posted_array = [];
		var demonstrator_violation_missing_both_array = [];
		var kbb_stickers_outdated_array = [];
		var incomplete_finance_terms_stated_where_present_car_array = [];
		var incomplete_finance_terms_stated_where_present_banner_array = [];
		var incomplete_finance_terms_stated_where_present_tv_array = [];
		var incomplete_lease_terms_stated_where_present_car_array = [];
		var incomplete_lease_terms_stated_where_present_banner_array = [];
		var incomplete_lease_terms_stated_where_present_tv_array = [];
		var price_after_rebate_with_no_math_equationarray = [];
		var was_is_former_price_comparison_violationarray = [];

		// /*these are strings to be replaced  */
		var otherasnewtext = [];
		var incorectlyidentifiedstring = [];
		var leaseotherasnewtext = [];

		// /*these array of data to be replaced in lease worksheet */
		var leasedealerloanerr = [];
		var leaserollbackk = [];
		var leasecompanyservicevehiclee = [];
		var leasefactoryexecutivee = [];
		var leasedemoconfirmed = [];
		var leasedemopossible = [];
		var leaseotherasnewdescribee = [];
		var leasedemoarray = [];
		var leasedocfeeoverchargearray = [];
		var leaseevrfeeoverchargearray = [];
		var leaseisblankbox10daylanguagearray = [];
		var leaseisleaseorblankboxarray = [];
		var leaseisdriveoffdeferredarray = [];
		var leaseisaftermarketproductsproperlyitemizedarray = [];
		var leasedescribesignaturemissingvaluearray = [];





		var voilationlist = [];
		var voilationlists = [];
		var code;


		console.log("after array");

		console.log("Violations", this.props.location.state.audit_id);

		axios
			.get(
			URL.ROOT_URL + '/audit/' + this.props.location.state.audit_id
			)
			.then(response => {
				let gg = response.data;

				let rr = gg[0];

				//console.log("data here is$$$$$$$$$$$$$$$$$$$$ ", rr.audit_worksheets)

				for (var j = 0; j < rr.audit_worksheets.length; j++) {

					if (rr.audit_worksheets[j].contract !== undefined) {
						if (rr.audit_worksheets[j].contract.e_contract !== undefined) {
							if (rr.audit_worksheets[j].contract.e_contract.contract_signed_copy === true) {
								signedcopyworksheeet.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.e_contract.contract_review_copy === false) {
								reviewcopyworksheeet.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.e_contract.new_used_red_box === false) {
								newusedworksheet.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.e_contract.public_liability_section_in_red === false) {
								publicliability.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new === 'new') {
								if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect !== undefined) {
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.rollback === 'rollback') {
										rollbackk.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.dealer_loaner === 'dealer_loaner') {
										dealerloanerr.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);

									}
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.company_service_vehicle === 'company_service_vehicle') {
										companyservicevehiclee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.factory_executive === 'factory_executive') {
										factoryexecutivee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value === 'demonstrator') {

										if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.demonstrator.demo_confirmed === true) {
											democonfirmed.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
										}
										if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.demonstrator.demo_possible === true) {
											demopossible.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
										}
									}
									if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value === 'other_as_new') {
										otherasnewtext.push(rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.other_as_new.other_describe_value);
										console.log(otherasnewtext);
										otherasnewdescribee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
								}


								if (rr.audit_worksheets[j].contract.worksheet.selection_vehicle_value.demo === 'demo') {
									demoarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.accessories_info.is_accessories_cost_violation.incorrectly_identified_asaccessory !== null) {
							incorectlyidentifiedstring.push(rr.audit_worksheets[j].contract.worksheet.accessories_info.is_accessories_cost_violation.incorrectly_identified_asaccessory);

							incorectlyidentifiedstringarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].contract.worksheet.accessories_info.is_accessories_cost_violation.supplier_sticker_violation === true) {
							supplierstickervoialationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].contract.worksheet.doc_fee.overcharge !== undefined) {
							docfeeoverchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].contract.worksheet.smog_fee.overcharge !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.smog_fee.overcharge.is_dealer_overcharge_50_smog_fee === true) {
								smogfeeoverchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.smog_fee.overcharge.is_smog_inspection_fee_was_due === true) {            // 64
								smogfeeinspectionduearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}

						if (rr.audit_worksheets[j].contract.worksheet.theft_deterrent !== undefined) {
							for (var c = 0; c < rr.audit_worksheets[j].contract.worksheet.theft_deterrent.length; c++)        // 65
							{
								if (rr.audit_worksheets[j].contract.worksheet.theft_deterrent[c].paid_to_missing === true) {
									theft_deterrent_paid_to_missing_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						for (var d = 0; d < rr.audit_worksheets[j].contract.worksheet.surface_protection; d++)        // 66
						{
							if (rr.audit_worksheets[j].contract.worksheet.surface_protection[d].paid_to_missing === true) {
								surface_protection_paid_to_missing_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.evr_options !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.evr_options.paid_to_missing_violation === 'paidtomissingviolation') {    // 67
								paid_to_missing_violationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.evr_fee_overcharge === true)                                // 68
						{
							evr_fee_overchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].contract.worksheet.service_contracts !== undefined) {
							for (var e = 0; e < rr.audit_worksheets[j].contract.worksheet.service_contracts.service_contracts_list.length; e++)        // 69
							{
								if (rr.audit_worksheets[j].contract.worksheet.service_contracts.service_contracts_list[e].is_violation === true) {
									service_contracts_list_is_violation_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.service_contracts.service_contracts_list[e].company_violation === true) {
									service_contracts_list_company_violation_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.service_contracts.service_contracts_list[e].months_violation === true) {
									service_contracts_list_months_violation_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
							if (rr.audit_worksheets[j].contract.worksheet.service_contracts.is_box_signed === false) {
								service_contractsis_box_signedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.debt_cancellation !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.debt_cancellation.debt_cancellation.term_violation === true) {
								debt_cancellation_term_violationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.debt_cancellation.debt_cancellation.company_violation === true) {
								debt_cancellation_company_violationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.debt_cancellation.debt_cancellation.signature_missing === true) {
								debt_cancellation_signature_missingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.signature_line !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.signature_line.signed === true) {
								signature_line_signedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.signature_line.hand_wrriten === true) {
								signature_line_hand_wrritenarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.contract_cancellation !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.contract_cancellation.proper_value === false) {
								contract_cancellation_proper_valuearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.other_line_used !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.other_line_used.other_line !== undefined) {
								other_line_usedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.license_or_registration_fees_violation !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.license_or_registration_fees_violation.fees_lumped === true) {
								license_or_registration_fees_violation_fees_lumpedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.license_or_registration_fees_violation.transfer_fee_too_high === true) {
								license_or_registration_fees_violation_transfer_fee_too_higharray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.california_fees_violation !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.california_fees_violation.overcharge !== undefined){
								if (rr.audit_worksheets[j].contract.worksheet.california_fees_violation.overcharge.no_spare_overcharge === true) {
									overcharge_no_spare_overchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.california_fees_violation.overcharge.demo_overcharge === true) {
									overcharge_no_demo_overchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.california_fees_violation.overcharge.on_used === true) {
									overcharge_no_on_usedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.overcharge !== undefined){
								if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.overcharge.smog_inspection_overcharge === true) {
									overcharge_smog_inspection_overchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.overcharge.smog_exempt_overcharge === true) {
									overcharge_smog_exempt_overchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.overcharge.smog_insp_when_exempt === true) {
									overcharge_smog_insp_when_exemptarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.overcharge.smog_exempt_when_insp === true) {
									overcharge_smog_exempt_when_insparray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].contract.worksheet.smog_exempt_or_fees_violation.undercharge === true) {
									smog_exempt_or_fees_violation_underchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.trade_in_vehicles !== undefined) {
							for (var E = 0; E < rr.audit_worksheets[j].contract.worksheet.trade_in_vehicles.length; E++)        // 65
							{
								if (rr.audit_worksheets[j].contract.worksheet.trade_in_vehicles[E].over_allowance === true) {
									trade_in_vehicles_over_allowance_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}

						if (rr.audit_worksheets[j].contract.worksheet.deferred_down_payments !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.deferred_down_payments.credit_as_deferred_down === true) {
								credit_as_deferred_downarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.down_payment !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.down_payment.undisclosed_deferred_down === true) {
								undisclosed_deferred_downarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.broker_deal !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.broker_deal.company_disclosed_on_contract === false) {
								company_disclosed_on_contractarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.broker_deal.broker_agreement_in_deal === false) {
								broker_agreement_in_dealarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.broker_deal.broker_agreement_completed === false) {
								broker_agreement_completedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.broker_deal.broker_agreement_signed === false) {
								broker_agreement_signedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.rewritten_contract !== null) {
							if (rr.audit_worksheets[j].contract.worksheet.rewritten_contract.second_contract_backdated === true) {
								second_contract_backdatedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.rewritten_contract.rescission_letter === false) {
								rescission_letterarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.rewritten_contract.notice_of_rewritten_contract === false) {
								notice_of_rewritten_contractarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.missing_signatures !== undefined) {
							if (rr.audit_worksheets[j].contract.worksheet.missing_signatures.describe_section_where_signature_missing !== undefined) {
								describe_section_where_signature_missing.push(rr.audit_worksheets[j].contract.worksheet.missing_signatures.describe_section_where_signature_missing);

								describe_section_where_signature_missingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.blank_box !== null) {
							if (rr.audit_worksheets[j].contract.worksheet.blank_box.na === true) {
								blank_box_na_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].contract.worksheet.blank_box.blank === true) {
								blank_box_blank_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.after_market_backup_document !== undefined) {
							if (rr.audit_worksheets[j].contract.after_market_backup_document.accesory_backupdocument === false) {         // 117
								accesory_backupdocument_falsearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.accesory_backupdocument.itemized_with_price === false) {    //  118
								itemized_with_pricearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.accesory_backupdocument.correct_values === false) {   //  119
								correct_valuesarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.theft_deterrent_devices.theft_deterrent_backup_document === false) {   //   120
								theft_deterrent_backup_documentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.surface_protection_products.surface_protection_backup_document === false) {   //   124
								surface_protection_backup_documentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.service_contracts.service_contracts_backup_document === false) {   //   128
								service_contracts_backup_documentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.debt_cancellation_agreement.debt_cancellation_agreement_backup === false) {   //   133
								debt_cancellation_agreement_backuparray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.debt_cancellation_agreement.debt_cancellation_agreement_backup.term_completed === false) {
								term_completedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.debt_cancellation_agreement.debt_cancellation_agreement_backup.price_match === false) {
								debt_cancellation_agreement_backup_price_matcharray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.debt_cancellation_agreement.debt_cancellation_agreement_backup.missing === true) {
								debt_cancellation_agreement_backup_missingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.after_market_backup_document.debt_cancellation_agreement.debt_cancellation_agreement_backup.signed === true) {
								debt_cancellation_agreement_backup_signedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.redflags !== undefined) {
							if (rr.audit_worksheets[j].contract.redflags.flags_programme_verified === false) {
								redflagprogrammeverifiedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.redflags.flags_summary_found === false) {
								redflagsummaryfoundarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.redflags.flags_summary_found.red_flags_found.out_of_wallet_questions_used === false) {
								outofwalletquetionusedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}
						if (rr.audit_worksheets[j].contract.worksheet.credit_applications !== undefined) {
							if (rr.audit_worksheets[j].contract.credit_applications.multiple_signed_applications === true) {
								multiplesignedapplicationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.credit_applications.altered.initials === false) {
								alteredinitialsarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.credit_applications.incomplete_or_blanks === true) {
								incompleteorblanksarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.credit_applications.five_line_application.lined_through === false) {
								fivelineapplicationlinedthrougharray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}

						if (rr.audit_worksheets[j].contract.buyers_guide !== undefined) {

							if (rr.audit_worksheets[j].contract.buyersguide.missing === true) {
								buyerguidemissingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}


							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.complete_vehicle_information === false) {
								bgpresentcompletevehicleinformationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.vehicle_history_disclosed_on_bg === true) {
								bgpresentvehiclehistorydisclosedonbgarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.dealercontactinformation.dealercontactinfo === true) {
								dealercontactinformationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.dealercontactinformation.incomplete === true) {
								dealercontactinformationincompletearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.signed === false) {
								bgpresenthowsoldsignedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.dealerwarranty.dealerwarantyboxchecked === false) {
								dealerwarrantyboxcheckedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.dealerwarranty.percentagecoveragecompleted === false) {
								percentagecoveragecompletedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.dealerwarranty.systemscoveredordurationcomplete === false) {
								systemscoveredordurationcompletearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.remainingfactorywarranty.typeofbuyerguide.impliedwarranties.impliedwarrantyboxchecked === false) {
								impliedwarrantyboxcheckedearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.how_sold.remainingfactorywarranty.typeofbuyerguide.impliedwarranties.factorywarrantyboxchecked === false) {
								factorywarrantyboxcheckedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.howsold.remainingfactorywarranty.typeofbuyerguide.asisversion === true) {
								typeofbuyerguideasisversionarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.howsold.factorycpowarranty.typeofbuyerguide.impliedwarranties.impliedwarrantyboxchecked === false) {
								impliedwarrantyboxcheckedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.howsold.factorycpowarranty.typeofbuyerguide.impliedwarranties.mfgusedwarrantyboxchecked === false) {
								mfgusedwarrantyboxcheckedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							} if (rr.audit_worksheets[j].contract.buyers_guide.bg_present.howsold.factorycpowarranty.typeofbuyerguide.asisversion === true) {
								factorycpowarrantyasisversionarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.buyers_guide.missing !== null) {
								buyerguidemissingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}

						if (rr.audit_worksheets[j].contract.advertising !== undefined) {
							if (rr.audit_worksheets[j].contract.advertising.vehicle_sold !== undefined) {
								if (rr.audit_worksheets[j].contract.advertising.vehicle_sold.over === true) {
									advertisingvehiclesoldoverarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend + " for " + rr.audit_worksheets[j].contract.advertising.adprice)
								}
								if (rr.audit_worksheets[j].contract.advertising.vehicle_sold.hour_48_violation === true) {
									hour48voilationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend)
								}
							}
							if (rr.audit_worksheets[j].contract.advertising.vehiclehistoryproperlynotdisclosed.priorrental === true) {
								vehiclehistoryproperlynotdisclosedpriorrentalarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend)
							}
							if (rr.audit_worksheets[j].contract.advertising.vehiclehistoryproperlynotdisclosed.serviceloaner === true) {
								vehiclehistoryproperlynotdisclosedserviceloanerarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend)
							}
							if (rr.audit_worksheets[j].contract.advertising.vehiclehistoryproperlynotdisclosed.demonstrator === true) {
								vehiclehistoryproperlynotdiscloseddemonstratorarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend)
							}
							if (rr.audit_worksheets[j].contract.advertising.vehiclehistoryproperlynotdisclosed.factoryexecutivevehicle === true) {
								vehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos + " and advertised for sale in " + rr.audit_worksheets[j].contract.advertising.typeofadvertising + " from " + rr.audit_worksheets[j].contract.advertising.adperiodstart + " to " + rr.audit_worksheets[j].contract.advertising.adperiodend)
							}
						}
						if (rr.audit_worksheets[j].contract.language_translation !== undefined) {
							if (rr.audit_worksheets[j].contract.language_translation.translatedcontractorlease.noproofoftranslation === true) {
								noproofoftranslationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.translatedcontractorlease.signatureonalllinesoftranslation === true) {
								signatureonalllinesoftranslationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.other_translated_documents.buyers_guide_contract === 'violation') {
								othertranslateddocumentsarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.other_translated_documents.contract_cancellation === 'violation') {
								contractcancellationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.other_translated_documents.pre_contract_disclosure === 'violation') {
								precontractdisclosurearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.other_translated_documents.gap === 'violation') {
								othertranslateddocumentsgaparray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.language_translation.other_translated_documents.ack_of_canceled_contract === 'violation') {
								ackofcanceledcontractarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}
						if (rr.audit_worksheets[j].contract.ab_68_documents !== undefined) {
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.missing === true) {
								contractcancellationoptionagreementmissingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed === null) {
								contractcancellationoptionagreementpresentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.cancellationchargecorrect === false) {
								cancellationchargecorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.restockingfeecorrect === false) {
								restockingfeecorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.deadlinedatecorrect.lessthentwodays === true) {
								deadlinedatecorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.deadlinetimecorrect === false) {
								deadlinetimecorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.mileagelimitscorrect.mileslessthan250 === true) {
								mileslessthan250array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.mileagelimitscorrect.milesaddedtoodometerreading === true) {
								milesaddedtoodometerreadingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.handwritteninformation.handwrittenentriesinstalled === false) {
								handwritteninformationarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.signed === false) {
								contractcancellationoptionagreementsignedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.contract_cancellation_option_agreement.present.completed.rewrittencontract.contractcancellationwritten === false) {
								contractcancellationwrittenarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.missing === true) {
								precontractdisclosuremissingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed === null) {
								precontractdisclosurepresentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.pricescorrect === false) {
								precontractdisclosurepresentpricescorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.paymentcorrect === false) {
								precontractdisclosurepresentpaymentcorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.productlistcorrect === false) {
								precontractdisclosurepresentproductlistcorrectarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.hand_written_information.hand_written_entries_initialed === false) {
								handwrittenentriesintiatedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.signedbuyer === false) {
								signedbuyerarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.signedcobuyer === false) {
								signedcobuyerarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.pre_contract_disclosure.present.completed.reWritten_contract.pre_contract_disclosure_reWritten === false) {
								precontractdisclosurerewrittenarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.missing === true) {
								creditscoredisclosuremissingarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.present.customer_info_completed === false) {
								customerinfocompletedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.present.credit_score_present === false) {
								creditscorepresentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.present.credit_ranges_present === false) {
								credirrangespresentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.present.handWritten_information.handWritten_entries_initialed === false) {
								handwrittenentriesintialedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.ab_68_documents.credit_score_disclosure.present.signed === false) {
								creditscoredisclosuresignedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}
						if (rr.audit_worksheets[j].contract.miscellaneous_documents !== undefined) {
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.nmvtis_present === false) {
								nmvtis_presentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.nmvtis_present.prior_to_placement_in_inventory === false) {
								prior_to_placement_in_inventoryarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.federal_privacy_policy_present === false) {
								federal_privacy_policy_presentarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.car_fax_auto_check_run.also_at_date_of_sale === false) {
								also_at_date_of_sale_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.car_fax_auto_check_run.car_fax_signed === false) {
								car_fax_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.cpo_inspection_report_required.report_present === false) {
								report_present_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.cpo_inspection_report_required.report_completed === false) {
								report_completed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.cpo_inspection_report_required.signed_by_customer === false) {
								signed_by_customer_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.tire_chain_disclosures_located === false) {
								tire_chain_disclosures_located_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.odo_262_present === false) {
								odo_262_present_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.language_ack__form_in_all_jackets === false) {
								language_ack__form_in_all_jackets_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
							if (rr.audit_worksheets[j].contract.miscellaneous_documents.recission_letter_sent_with_no_reWritten_contract === true) {    //  210
								recission_letter_sent_with_no_reWritten_contract_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
							}
						}
						if (rr.audit_worksheets[j].contract.vehicle_history !== undefined) {
							if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator !== undefined) {
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.used_vehicle_history_disclosure_document.in_service_date_disclosed === false) {    //  211
									used_vehicle_history_disclosure_document_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.used_vehicle_history_disclosure_document.history_initialed === false) { //  212
									used_vehicle_history_disclosure_document_history_initialed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.used_vehicle_history_disclosure_document.disclosure_signed === false) { //  213
									used_vehicle_history_disclosure_document_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.statement_of_facts.in_service_date_disclosed === false) { //  214
									statement_of_facts_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.statement_of_facts.disclosure_signed === false) { //  215
									statement_of_facts_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.in_house_form.in_service_date_disclosed === false) { //  216
									in_house_form_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.in_house_form.disclosure_signed === false) { //  217
									in_house_form_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_dealer_demonstrator.form_of_disclosure.no_disclosure === true) { //  218
									unregistered_dealer_demonstrator_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
							}
							if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle !== undefined) {
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.used_vehicle_history_disclosure_document.in_service_date_disclosed === false) {    //  211
									used_vehicle_history_disclosure_document_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.used_vehicle_history_disclosure_document.history_initialed === false) { //  212
									used_vehicle_history_disclosure_document_history_initialed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.used_vehicle_history_disclosure_document.disclosure_signed === false) { //  213
									used_vehicle_history_disclosure_document_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.statement_of_facts.in_service_date_disclosed === false) { //  214
									statement_of_facts_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.statement_of_facts.disclosure_signed === false) { //  215
									statement_of_facts_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.in_house_form.in_service_date_disclosed === false) { //  216
									in_house_form_in_service_date_disclosed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.in_house_form.disclosure_signed === false) { //  217
									in_house_form_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.unregistered_factory_executive_vehicle.form_of_disclosure.no_disclosure === true) { //  218
									unregistered_dealer_demonstrator_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
							}
							if (rr.audit_worksheets[j].contract.vehicle_history.dealer_service_vehicle !== undefined) {
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_service_vehicle.history_initiated === false) {    //  219
									dealer_service_vehicle_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_service_vehicle.disclosure_signed === false) { //  220
									dealer_service_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_service_vehicle.no_disclosure === true) { //  221
									dealer_service_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
							}
							if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle !== null) {
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle.vehicle_history_document.history_initiated === false) {    //  222
									vehicle_history_document_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle.vehicle_history_document.disclosure_signed === false) { //  223
									vehicle_history_document_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle.statement_of_facts.disclosure_signed === false) { //  224
									dealer_loaner_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle.in_house_form.disclosure_signed === false) { //  225
									dealer_loaner_vehicle_in_house_form_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.vehicle_history.dealer_loaner_vehicle.no_disclosure === true) { //  226
									dealer_loaner_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
							}
									if (rr.audit_worksheets[j].contract.vehicle_history.dealer_lease_vehicle !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_lease_vehicle.history_initiated === false) {    //  227
											dealer_lease_vehicle_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_lease_vehicle.disclosure_signed === false) { //  228
											dealer_lease_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_lease_vehicle.no_disclosure === true) { //  229
											dealer_lease_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental.vehicle_history_document.history_initiated === false) {    //  230
											dealer_rental_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental.vehicle_history_document.disclosure_signed === false) { //  231
											dealer_rental_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental.statement_of_facts.disclosure_signed === false) { //  232
											dealer_rental_statement_of_facts_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental.in_house_form.disclosure_signed === false) { //  233
											dealer_rental_in_house_form_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.dealer_rental.no_disclosure === true) { //  234
											dealer_rental_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.other_rental !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.other_rental.vehicle_history_document.history_initiated === false) {    //  230
											dealer_rental_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.other_rental.vehicle_history_document.disclosure_signed === false) { //  231
											dealer_rental_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.other_rental.statement_of_facts.disclosure_signed === false) { //  232
											dealer_rental_statement_of_facts_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.other_rental.in_house_form.disclosure_signed === false) { //  233
											dealer_rental_in_house_form_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.other_rental.no_disclosure === true) { //  234
											dealer_rental_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.publicly_owned_vehicle !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.publicly_owned_vehicle.history_initiated === false) {    //  235
											publicly_owned_vehicle_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.publicly_owned_vehicle.disclosure_signed === false) { //  236
											publicly_owned_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.publicly_owned_vehicle.no_disclosure === true) { //  237
											publicly_owned_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.taxicab !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.taxicab.history_initiated === false) {    //  238
											taxicab_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.taxicab.disclosure_signed === false) { //  239
											taxicab_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.taxicab.no_disclosure === true) { //  240
											taxicab_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.transportation_network !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.transportation_network.history_initiated === false) {    //  241
											transportation_network_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.transportation_network.disclosure_signed === false) { //  242
											transportation_network_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.transportation_network.no_disclosure === true) { //  243
											transportation_network_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.salvage_vehicle !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.salvage_vehicle.history_initiated === false) {    //  244
											salvage_vehicle_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.salvage_vehicle.disclosure_signed === false) { //  245
											salvage_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.salvage_vehicle.no_disclosure === true) { //  246
											salvage_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.lemon_law_buyback !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.lemon_law_buyback.history_initiated === false) {    //  247
											lemon_law_buyback_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.lemon_law_buyback.disclosure_signed === false) { //  248
											lemon_law_buyback_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.lemon_law_buyback.no_disclosure === true) { //  249
											lemon_law_buyback_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.stolen_vehicle !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.stolen_vehicle.history_initiated === false) {    //  250
											stolen_vehicle_history_initiated_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.stolen_vehicle.disclosure_signed === false) { //  251
											stolen_vehicle_disclosure_signed_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.stolen_vehicle.no_disclosure === true) { //  252
											stolen_vehicle_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
									if (rr.audit_worksheets[j].contract.vehicle_history.prior_accident_damaged_vehicle !== undefined) {
										if (rr.audit_worksheets[j].contract.vehicle_history.prior_accident_damaged_vehicle.form_of_disclosure.car_fax_only === true) {    //  253
											form_of_disclosure_car_fax_only_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
										if (rr.audit_worksheets[j].contract.vehicle_history.prior_accident_damaged_vehicle.form_of_disclosure.no_disclosure === true) { //  254
											form_of_disclosure_no_disclosure_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
										}
									}
						}
							if (rr.audit_worksheets[j].contract.single_document_rule_violation !== undefined) {
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.signed_four_square_pencil_desk_sheet === true) {       //   255
									signed_four_square_pencil_desk_sheet_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.heat_sheet === true) {
									heat_sheet_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.due_bill_30_Day_language === true) {
									due_bill_30_Day_language_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.promissory_note === true) {
									promissory_note_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.hold_check_agreement === true) {
									hold_check_agreement_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
								if (rr.audit_worksheets[j].contract.worksheets.single_document_rule_violation.trade_in_pay_off_adjustment_agreement === true) {
									trade_in_pay_off_adjustment_agreement_array.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos)
								}
							}
					}
					else if (rr.audit_worksheets[j].lease !== null) {
						if (rr.audit_worksheets[j].lease.e_lease !== undefined) {
							if (rr.audit_worksheets[j].lease.e_lease.lease_signed_copy === false) {
								lease_signed_copyworksheeet.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
							if (rr.audit_worksheets[j].lease.e_lease.lease_review_copy === false) {
								lease_review_copyworksheeet.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
							}
						}
						if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new !== undefined) {
							if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect !== undefined) {
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.rollback === 'rollback') {
									leaserollbackk.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.dealer_loaner === 'dealer_loaner') {
									leasedealerloanerr.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);

								}
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.company_service_vehicle === 'company_service_vehicle') {
									leasecompanyservicevehiclee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.factory_executive === 'factory_executive') {
									leasefactoryexecutivee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.demonstrator === 'demonstrator') {
									if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.demonstrator.demo_confirmed === true) {
										leasedemoconfirmed.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
									if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.demonstrator.demo_possible === true) {
										leasedemopossible.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
									}
								}
								if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.other_as_new !== null) {
									leaseotherasnewtext.push(rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.new.incorrect.vehicle_selected_value.other_as_new.other_describe_value);

									leaseotherasnewdescribee.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						if (rr.audit_worksheets[j].lease.worksheet.selection_vehicle_value.demo === 'demo') {
							leasedemoarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.doc_fee.overcharge.doc_fee_overcharge !== undefined) {
							leasedocfeeoverchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.evr_fee_info.evr_overcharge === true) {
							leaseevrfeeoverchargearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.is_blank_box10_day_language === false) {
							leaseisblankbox10daylanguagearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.is_trade_in_vehicle !== undefined) {
							if (rr.audit_worksheets[j].lease.worksheet.is_trade_in_vehicle.is_trade_in_vehicle !== undefined) {
								if (rr.audit_worksheets[j].lease.worksheet.is_trade_in_vehicle.is_trade_in_vehicle.is_lease_or_blank_box === false) {
									leaseisleaseorblankboxarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
								}
							}
						}
						if (rr.audit_worksheets[j].lease.worksheet.is_drive_off_deferred === true) {
							leaseisdriveoffdeferredarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.is_after_market_products_properly_itemized === false) {
							leaseisaftermarketproductsproperlyitemizedarray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}
						if (rr.audit_worksheets[j].lease.worksheet.is_missing_signatures.describe_signature_missing_value !== undefined) {
							var leasedocfeeovercharge = rr.audit_worksheets[j].lease.worksheet.is_missing_signatures.describe_signature_missing_value;

							leasedescribesignaturemissingvaluearray.push(rr.audit_worksheets[j].vehicle_desc + " with stock number " + rr.audit_worksheets[j].stk_number + " is sold to " + rr.audit_worksheets[j].sold_to + " on " + rr.audit_worksheets[j].dos);
						}

					}

					else {
						console.log("Something went wrong.");
					}
				}
								if (rr.inventory_worksheet !== undefined) {
					for (var l = 0; l < rr.inventory_worksheet.monroney_stickers.missing.length; l++)    // 22
					{
						monroney_stickers_missing_array.push(rr.inventory_worksheet.monroney_stickers.missing[l].year + " ," + rr.inventory_worksheet.monroney_stickers.missing[l].make + " ," + rr.inventory_worksheet.monroney_stickers.missing[l].model + " , " + rr.inventory_worksheet.monroney_stickers.missing[l].stock_number)
					}
					for (var j = 0; j < rr.inventory_worksheet.buyers_guides.missing.length; j++)        // 23
					{
						buyers_guides_missing_array.push(rr.inventory_worksheet.buyers_guides.missing[j].year + " ," + rr.inventory_worksheet.buyers_guides.missing[j].make + " ," + rr.inventory_worksheet.buyers_guides.missing[j].model + " , " + rr.inventory_worksheet.buyers_guides.missing[j].stock_number)
					}
					for (var m = 0; m < rr.inventory_worksheet.bumper_impact_labels.missing.length; m++)        // 26
					{
						bumper_impact_labels_array.push(rr.inventory_worksheet.buyers_guides.missing[m].year + " ," + rr.inventory_worksheet.buyers_guides.missing[m].make + " ," + rr.inventory_worksheet.buyers_guides.missing[m].model + " , " + rr.inventory_worksheet.buyers_guides.missing[m].stock_number)
					}
					for (var n = 0; n < rr.inventory_worksheet.bumper_impact_labels.missing.length; n++)        // 27
					{
						parts_content_labels_array.push(rr.inventory_worksheet.parts_content_labels.missing[n].year + " ," + rr.inventory_worksheet.buyers_guides.missing[n].make + " ," + rr.inventory_worksheet.buyers_guides.missing[n].model + " , " + rr.inventory_worksheet.buyers_guides.missing[n].stock_number)
					}
					if(rr.inventory_worksheet.supplemental_stickers.violation.items_price_not_listed !== undefined)
					{
							for (var o = 0; o < rr.inventory_worksheet.supplemental_stickers.violation.items_price_not_listed.length; o++)        // 31
							{
								items_price_not_listed_array.push(rr.inventory_worksheet.parts_content_labels.missing[o].year + " ," + rr.inventory_worksheet.buyers_guides.missing[o].make + " ," + rr.inventory_worksheet.buyers_guides.missing[o].model + " , " + rr.inventory_worksheet.buyers_guides.missing[o].stock_number)
							}
					}
					for (var p = 0; p < rr.inventory_worksheet.rollbacks.violation.rollback_violation_monroney_posted.length; p++)        // 33
					{
						rollback_violation_monroney_posted_array.push(rr.inventory_worksheet.parts_content_labels.missing[p].year + " ," + rr.inventory_worksheet.buyers_guides.missing[p].make + " ," + rr.inventory_worksheet.buyers_guides.missing[p].model + " , " + rr.inventory_worksheet.buyers_guides.missing[p].stock_number)
					}
					for (var q = 0; q < rr.inventory_worksheet.rollbacks.violation.rollback_violation_no_bg_posted.length; q++)        // 34
					{
						rollback_violation_no_bg_posted_array.push(rr.inventory_worksheet.parts_content_labels.missing[q].year + " ," + rr.inventory_worksheet.buyers_guides.missing[q].make + " ," + rr.inventory_worksheet.buyers_guides.missing[q].model + " , " + rr.inventory_worksheet.buyers_guides.missing[q].stock_number)
					}
					for (var r = 0; r < rr.inventory_worksheet.demonstrators.violation.demonstrator_violation_no_monroney_posted.length; r++)        // 35
					{
						demonstrator_violation_no_monroney_posted_array.push(rr.inventory_worksheet.parts_content_labels.missing[r].year + " ," + rr.inventory_worksheet.buyers_guides.missing[r].make + " ," + rr.inventory_worksheet.buyers_guides.missing[r].model + " , " + rr.inventory_worksheet.buyers_guides.missing[r].stock_number)
					}
					for (var s = 0; s < rr.inventory_worksheet.demonstrators.violation.demonstrator_violation_no_bg_posted.length; s++)        // 35(2)
					{
						demonstrator_violation_no_bg_posted_array.push(rr.inventory_worksheet.parts_content_labels.missing[s].year + " ," + rr.inventory_worksheet.buyers_guides.missing[s].make + " ," + rr.inventory_worksheet.buyers_guides.missing[s].model + " , " + rr.inventory_worksheet.buyers_guides.missing[s].stock_number)
					}
					for (var t = 0; t < rr.inventory_worksheet.demonstrators.violation.demonstrator_violation_missing_both.length; t++)        // 35(3)
					{
						demonstrator_violation_missing_both_array.push(rr.inventory_worksheet.parts_content_labels.missing[t].year + " ," + rr.inventory_worksheet.buyers_guides.missing[t].make + " ," + rr.inventory_worksheet.buyers_guides.missing[t].model + " , " + rr.inventory_worksheet.buyers_guides.missing[t].stock_number)
					}
					for (var u = 0; u < rr.inventory_worksheet.kbb_stickers.outdated.length; u++)        // 36
					{
						kbb_stickers_outdated_array.push(rr.inventory_worksheet.parts_content_labels.missing[u].year + " ," + rr.inventory_worksheet.buyers_guides.missing[u].make + " ," + rr.inventory_worksheet.buyers_guides.missing[u].model + " , " + rr.inventory_worksheet.buyers_guides.missing[u].stock_number)
					}
					if(rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present !== undefined)
					{
						for (var v = 0; v < rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.car.length; v++)        // 37
						{
							incomplete_finance_terms_stated_where_present_car_array.push(rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.car[v].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.car[v].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.car[v].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.car[v].stock_number)
						}
						for (var w = 0; w < rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.banner.length; w++)        // 38
						{
							incomplete_finance_terms_stated_where_present_banner_array.push(rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.banner[w].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.banner[w].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.banner[w].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.banner[w].stock_number)
						}
						for (var x = 0; x < rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.tv.length; x++)        // 39
						{
							incomplete_finance_terms_stated_where_present_tv_array.push(rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.tv[x].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.tv[x].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.tv[x].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_finance_terms_stated_where_present.tv[x].stock_number)
						}
					}
					if(rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present !== undefined)
					{					
					
						for (var y = 0; y < rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.car.length; y++)        // 40
						{
							incomplete_lease_terms_stated_where_present_car_array.push(rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.car[y].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.car[y].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.car[y].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.car[y].stock_number)
						}
						for (var z = 0; z < rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.banner.length; z++)        // 41
						{
							incomplete_lease_terms_stated_where_present_banner_array.push(rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.banner[z].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.banner[z].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.banner[z].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.banner[z].stock_number)
						}
						for (var a = 0; a < rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.tv.length; a++)        // 42
						{
							incomplete_lease_terms_stated_where_present_tv_array.push(rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.tv[a].year + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.tv[a].make + " ," + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.tv[a].model + " , " + rr.inventory_worksheet.advertising.violation.incomplete_lease_terms_stated_where_present.tv[a].stock_number)
						}
					}
					if(rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation !== undefined)
					{
						for (var b = 0; b < rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation.length; b++)        // 43
						{
							price_after_rebate_with_no_math_equationarray.push(rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation[b].year + " ," + rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation[b].make + " ," + rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation[b].model + " , " + rr.inventory_worksheet.advertising.violation.price_after_rebate_with_no_math_equation[b].stock_number)
						}
					}
					if(rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation !== undefined)
					{
						for (var c = 0; c < rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation.length; c++)        // 44
						{
							was_is_former_price_comparison_violationarray.push(rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation[c].year + " ," + rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation[c].make + " ," + rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation[c].model + " , " + rr.inventory_worksheet.advertising.violation.was_is_former_price_comparison_violation[c].stock_number)
						}
					}
				}
				else {
					console.log("inventory null");
				}


				//	var mysignedString = JSON.stringify(signedcopyworksheeet);

				//  mysignedString = mysignedString.replace(/,/g,',\n');
				//  mysignedString = mysignedString.replace(/]/g,'');
				//  mysignedString = mysignedString.replace('[','');

				var mysignedString = signedcopyworksheeet.toString();
				var myreviewString = reviewcopyworksheeet.toString();
				var mynewusedString = newusedworksheet.toString();
				var mypublicliabilityString = publicliability.toString();
				var myleasesignedString = lease_signed_copyworksheeet.toString();
				var myleasereviewString = lease_review_copyworksheeet.toString();


				var mydealerloanerString = dealerloanerr.toString();   //53
				var myrollbackString = rollbackk.toString();// 54
				var mycompanyservicevehicleString = companyservicevehiclee.toString();   //55
				var myfactoryexecutiveString = factoryexecutivee.toString();  //56
				var mydemoconfirmedString = democonfirmed.toString(); // 56 two have same
				var mydemopossibleString = demopossible.toString();    // 57
				var myotherasnewdescribeeString = otherasnewdescribee.toString();  //58
				var mydemoarrayString = demoarray.toString();         //59
				var myincorectlyidentifiedstringarrayString = incorectlyidentifiedstringarray.toString();  //60
				var mysupplierstickervoialationarrayString = supplierstickervoialationarray.toString();    //61
				var mydocfeeoverchargearrayString = docfeeoverchargearray.toString();  //  62
				var mysmogfeeoverchargearrayString = smogfeeoverchargearray.toString(); // 63
				var mysmogfeeinspectionduearrayString = smogfeeinspectionduearray.toString();  // 64
				var mytheft_deterrent_paid_to_missing_arrayString = theft_deterrent_paid_to_missing_array.toString();  // 65
				var mysurface_protection_paid_to_missing_arrayString = surface_protection_paid_to_missing_array.toString();  // 66
				var mypaid_to_missing_violationarrayString = paid_to_missing_violationarray.toString();  // 67
				var myevr_fee_overchargearrayString = evr_fee_overchargearray.toString();  // 68
				var myservice_contracts_list_is_violation_arrayString = service_contracts_list_is_violation_array.toString();  // 69
				var myservice_contracts_list_company_violation_arrayString = service_contracts_list_company_violation_array.toString();  // 70
				var myservice_contracts_list_months_violation_arrayString = service_contracts_list_months_violation_array.toString();  // 71
				var myservice_contractsis_box_signedarrayString = service_contractsis_box_signedarray.toString();  // 72
				var mydebt_cancellation_term_violationarrayString = debt_cancellation_term_violationarray.toString();  // 73
				var mydebt_cancellation_company_violationarrayString = debt_cancellation_company_violationarray.toString();  // 74
				var mydebt_cancellation_signature_missingarrayString = debt_cancellation_signature_missingarray.toString();  // 75
				var mysignature_line_signedarrayString = signature_line_signedarray.toString();  // 76
				var mysignature_line_hand_wrritenarrayString = signature_line_hand_wrritenarray.toString();  // 77
				var mycontract_cancellation_proper_valuearrayString = contract_cancellation_proper_valuearray.toString();  // 78
				var myother_line_usedarrayString = other_line_usedarray.toString();  // 79
				var mylicense_or_registration_fees_violation_fees_lumpedarrayString = license_or_registration_fees_violation_fees_lumpedarray.toString();  // 80
				var mylicense_or_registration_fees_violation_transfer_fee_too_higharrayString = license_or_registration_fees_violation_transfer_fee_too_higharray.toString();  // 81
				var myovercharge_no_spare_overchargearrayString = overcharge_no_spare_overchargearray.toString();  // 82
				var myovercharge_no_demo_overchargearrayString = overcharge_no_demo_overchargearray.toString();  // 83
				var myovercharge_no_on_usedarrayString = overcharge_no_on_usedarray.toString();  // 84
				var myovercharge_smog_inspection_overchargearrayString = overcharge_smog_inspection_overchargearray.toString();  // 85
				var myovercharge_smog_exempt_overchargearrayString = overcharge_smog_exempt_overchargearray.toString();  // 86
				var myovercharge_smog_insp_when_exemptarrayString = overcharge_smog_insp_when_exemptarray.toString();  // 87
				var myovercharge_smog_exempt_when_insparrayString = overcharge_smog_exempt_when_insparray.toString();  // 88
				var mysmog_exempt_or_fees_violation_underchargearrayString = smog_exempt_or_fees_violation_underchargearray.toString();  // 89
				var mytrade_in_vehicles_over_allowance_arrayString = trade_in_vehicles_over_allowance_array.toString();  // 90
				var mycredit_as_deferred_downarrayString = credit_as_deferred_downarray.toString();  // 91
				var myundisclosed_deferred_downarrayString = undisclosed_deferred_downarray.toString();  // 92
				var mycompany_disclosed_on_contractarrayString = company_disclosed_on_contractarray.toString();  // 93
				var mybroker_agreement_in_dealarrayString = broker_agreement_in_dealarray.toString();  // 94
				var mybroker_agreement_completedarrayString = broker_agreement_completedarray.toString();  // 95
				var mybroker_agreement_signedarrayString = broker_agreement_signedarray.toString();  // 96
				var mysecond_contract_backdatedarrayString = second_contract_backdatedarray.toString();  // 97
				var myrescission_letterarrayString = rescission_letterarray.toString();  // 98
				var mynotice_of_rewritten_contractarrayString = notice_of_rewritten_contractarray.toString();  // 99
				var mydescribe_section_where_signature_missingString = describe_section_where_signature_missing.toString();  // 100
				var mydescribe_section_where_signature_missingarrayString = describe_section_where_signature_missingarray.toString();  // 100 inside value
				var myblank_box_na_arrayString = blank_box_na_array.toString();  // 101
				var myblank_box_blank_arrayString = blank_box_blank_array.toString();  // 102


				var myredflagprogrammeverifiedarrayString = redflagprogrammeverifiedarray.toString();  //138	
				var myredflagsummaryfoundarrayString = redflagsummaryfoundarray.toString();  //139
				var myoutofwalletquetionusedarrayString = outofwalletquetionusedarray.toString();  //140
				var mymultiplesignedapplicationarrayString = multiplesignedapplicationarray.toString();  //141
				var myalteredinitialsarrayString = alteredinitialsarray.toString();  //142
				var myincompleteorblanksarrayString = incompleteorblanksarray.toString();  //143
				var myfivelineapplicationlinedthrougharrayString = fivelineapplicationlinedthrougharray.toString();  //144
				var mybuyerguidemissingarrayString = buyerguidemissingarray.toString();  //145
				var mybgpresentcompletevehicleinformationarrayString = bgpresentcompletevehicleinformationarray.toString();  //146
				var mybgpresentvehiclehistorydisclosedonbgarrayString = bgpresentvehiclehistorydisclosedonbgarray.toString();  //147
				var mydealercontactinformationarrayString = dealercontactinformationarray.toString();  //148
				var mydealercontactinformationincompletearrayString = dealercontactinformationincompletearray.toString();  //149
				var mybgpresenthowsoldsignedarrayString = bgpresenthowsoldsignedarray.toString();  //150
				var mydealerwarrantyboxcheckedarrayString = dealerwarrantyboxcheckedarray.toString();  //151
				var mypercentagecoveragecompletedarrayString = percentagecoveragecompletedarray.toString();  //152
				var mysystemscoveredordurationcompletearrayString = systemscoveredordurationcompletearray.toString();  //153
				var myimpliedwarrantyboxcheckedearrayString = impliedwarrantyboxcheckedearray.toString();  //154
				var myfactorywarrantyboxcheckedarrayString = factorywarrantyboxcheckedarray.toString();  //155
				var mytypeofbuyerguideasisversionarrayString = typeofbuyerguideasisversionarray.toString();  //156
				var myimpliedwarrantyboxcheckedarrayString = impliedwarrantyboxcheckedarray.toString();  //157
				var mymfgusedwarrantyboxcheckedarrayString = mfgusedwarrantyboxcheckedarray.toString();  //158
				var myfactorycpowarrantyasisversionarrayString = factorycpowarrantyasisversionarray.toString();  //159
				var myadvertisingvehiclesoldoverarrayString = advertisingvehiclesoldoverarray.toString();  //160
				var myhour48voilationarrayString = hour48voilationarray.toString();  //161
				var myvehiclehistoryproperlynotdisclosedpriorrentalarrayString = vehiclehistoryproperlynotdisclosedpriorrentalarray.toString();  //162
				var myvehiclehistoryproperlynotdisclosedserviceloanerarrayString = vehiclehistoryproperlynotdisclosedserviceloanerarray.toString();  //163
				var myvehiclehistoryproperlynotdiscloseddemonstratorarrayString = vehiclehistoryproperlynotdiscloseddemonstratorarray.toString();  //164
				var myvehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearrayString = vehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearray.toString();  //165
				// //	var myaknowledgementoftranslatedleaseorcontractarrayString = aknowledgementoftranslatedleaseorcontractarray.toString();  //166
				// //	var mytranslatedcontractorleasearrayString = translatedcontractorleasearray.toString();  //166
				var noproofoftranslationarrayString = noproofoftranslationarray.toString();  //166
				var signatureonalllinesoftranslationarrayString = signatureonalllinesoftranslationarray.toString();  //167
				var myothertranslateddocumentsarrayString = othertranslateddocumentsarray.toString();  //169
				var mycontractcancellationarrayString = contractcancellationarray.toString();  //170
				var myprecontractdisclosurearrayString = precontractdisclosurearray.toString();  //171
				var myothertranslateddocumentsgaparrayString = othertranslateddocumentsgaparray.toString();  //172
				var myackofcanceledcontractarrayString = ackofcanceledcontractarray.toString();  //173	
				var mycontractcancellationoptionagreementmissingarrayString = contractcancellationoptionagreementmissingarray.toString();  //174
				var mycontractcancellationoptionagreementpresentarrayString = contractcancellationoptionagreementpresentarray.toString();  //175
				var mycancellationchargecorrectarrayString = cancellationchargecorrectarray.toString();  //176
				var myrestockingfeecorrectarrayString = restockingfeecorrectarray.toString();  //177
				var mydeadlinedatecorrectarrayString = deadlinedatecorrectarray.toString();  //178
				var mydeadlinetimecorrectarrayString = deadlinetimecorrectarray.toString();  //179
				var mymileslessthan250arrayString = mileslessthan250array.toString();  //180
				var mymilesaddedtoodometerreadingarrayString = milesaddedtoodometerreadingarray.toString();  //181
				var myhandwritteninformationarrayString = handwritteninformationarray.toString();  //182
				var mycontractcancellationoptionagreementsignedarrayString = contractcancellationoptionagreementsignedarray.toString();  //183
				var mycontractcancellationwrittenarrayString = contractcancellationwrittenarray.toString();  //184
				var myprecontractdisclosuremissingarrayString = precontractdisclosuremissingarray.toString();  //185
				var myprecontractdisclosurepresentarrayString = precontractdisclosurepresentarray.toString();  //186
				var myprecontractdisclosurepresentpricescorrectarrayString = precontractdisclosurepresentpricescorrectarray.toString();  //187
				var myprecontractdisclosurepresentpaymentcorrectarrayString = precontractdisclosurepresentpaymentcorrectarray.toString();  //188
				var myprecontractdisclosurepresentproductlistcorrectarrayString = precontractdisclosurepresentproductlistcorrectarray.toString();  //189
				var myhandwrittenentriesintiatedarrayString = handwrittenentriesintiatedarray.toString();  //190
				var signedbuyerString = signedbuyerarray.toString();  //191
				var mysignedcobuyerarrayString = signedcobuyerarray.toString();  //191a
				var myprecontractdisclosurerewrittenarrayString = precontractdisclosurerewrittenarray.toString();  //192
				var mycreditscoredisclosuremissingarrayString = creditscoredisclosuremissingarray.toString();  //193
				var mycustomerinfocompletedarrayString = customerinfocompletedarray.toString();  //194
				var mycreditscorepresentarrayString = creditscorepresentarray.toString();  //195
				var mycredirrangespresentarrayString = credirrangespresentarray.toString();  //196
				var myhandwrittenentriesintialedarrayString = handwrittenentriesintialedarray.toString();  //197
				var mycreditscoredisclosuresignedarrayString = creditscoredisclosuresignedarray.toString();  //198
				var mynmvtis_presentarrayString = nmvtis_presentarray.toString();  //199
				var myprior_to_placement_in_inventoryarrayString = prior_to_placement_in_inventoryarray.toString();  //200
				var myfederal_privacy_policy_presentarrayString = federal_privacy_policy_presentarray.toString();  //201
				var myalso_at_date_of_sale_arrayString = also_at_date_of_sale_array.toString();  //202	
				var mycar_fax_signed_arrayString = car_fax_signed_array.toString();  //203
				var myreport_present_arrayString = report_present_array.toString();  //204
				var myreport_completed_arrayString = report_completed_array.toString();  //205
				var mysigned_by_customer_arrayString = signed_by_customer_array.toString();  //206
				var mytire_chain_disclosures_located_arrayString = tire_chain_disclosures_located_array.toString();  //207
				var myodo_262_present_arrayString = odo_262_present_array.toString();  //208	
				var mylanguage_ack__form_in_all_jackets_arrayString = language_ack__form_in_all_jackets_array.toString();  //209
				var myrecission_letter_sent_with_no_reWritten_contract_arrayString = recission_letter_sent_with_no_reWritten_contract_array.toString();  //210	
				var myused_vehicle_history_disclosure_document_in_service_date_disclosed_arrayString = used_vehicle_history_disclosure_document_in_service_date_disclosed_array.toString();  //211	
				var myused_vehicle_history_disclosure_document_history_initialed_arrayString = used_vehicle_history_disclosure_document_history_initialed_array.toString();  //212
				var myused_vehicle_history_disclosure_document_disclosure_signed_arrayString = used_vehicle_history_disclosure_document_disclosure_signed_array.toString();  //213
				var mystatement_of_facts_in_service_date_disclosed_arrayString = statement_of_facts_in_service_date_disclosed_array.toString();  //214
				var mystatement_of_facts_disclosure_signed_arrayString = statement_of_facts_disclosure_signed_array.toString();  //215
				var myin_house_form_in_service_date_disclosed_arrayString = in_house_form_in_service_date_disclosed_array.toString();  //216
				var myin_house_form_disclosure_signed_arrayString = in_house_form_disclosure_signed_array.toString();  //217
				var myunregistered_dealer_demonstrator_no_disclosure_arrayString = unregistered_dealer_demonstrator_no_disclosure_array.toString();  //218
				var mydealer_service_vehicle_history_initiated_arrayString = dealer_service_vehicle_history_initiated_array.toString();  //219
				var mydealer_service_vehicle_disclosure_signed_arrayString = dealer_service_vehicle_disclosure_signed_array.toString();  //220
				var mydealer_service_vehicle_no_disclosure_arrayString = dealer_service_vehicle_no_disclosure_array.toString();  //221
				var myvehicle_history_document_history_initiated_arrayString = vehicle_history_document_history_initiated_array.toString();  //222
				var myvehicle_history_document_disclosure_signed_arrayString = vehicle_history_document_disclosure_signed_array.toString();  //223
				var mydealer_loaner_vehicle_disclosure_signed_arrayString = dealer_loaner_vehicle_disclosure_signed_array.toString();  //224
				var mydealer_loaner_vehicle_in_house_form_disclosure_signed_arrayString = dealer_loaner_vehicle_in_house_form_disclosure_signed_array.toString();  //225
				var mydealer_loaner_vehicle_no_disclosure_arrayString = dealer_loaner_vehicle_no_disclosure_array.toString();  //226
				var mydealer_lease_vehicle_history_initiated_arrayString = dealer_lease_vehicle_history_initiated_array.toString();  //227
				var mydealer_lease_vehicle_disclosure_signed_arrayString = dealer_lease_vehicle_disclosure_signed_array.toString();  //228
				var mydealer_lease_vehicle_no_disclosure_arrayString = dealer_lease_vehicle_no_disclosure_array.toString();  //229
				var mydealer_rental_history_initiated_arrayString = dealer_rental_history_initiated_array.toString();  //230
				var mydealer_rental_disclosure_signed_arrayString = dealer_rental_disclosure_signed_array.toString();  //231
				var mydealer_rental_statement_of_facts_arrayString = dealer_rental_statement_of_facts_array.toString();  //232
				var mydealer_rental_in_house_form_arrayString = dealer_rental_in_house_form_array.toString();  //233
				var mydealer_rental_no_disclosure_arrayString = dealer_rental_no_disclosure_array.toString();  //234
				var mypublicly_owned_vehicle_history_initiated_arrayString = publicly_owned_vehicle_history_initiated_array.toString();  //235
				var mypublicly_owned_vehicle_disclosure_signed_arrayString = publicly_owned_vehicle_disclosure_signed_array.toString();  //236
				var mypublicly_owned_vehicle_no_disclosure_arrayString = publicly_owned_vehicle_no_disclosure_array.toString();  //237
				var mytaxicab_history_initiated_arrayString = taxicab_history_initiated_array.toString();  //238
				var mytaxicab_disclosure_signed_arrayString = taxicab_disclosure_signed_array.toString();  //239
				var mytaxicab_no_disclosure_arrayString = taxicab_no_disclosure_array.toString();  //240
				var mytransportation_network_history_initiated_arrayString = transportation_network_history_initiated_array.toString();  //241
				var mytransportation_network_disclosure_signed_arrayString = transportation_network_disclosure_signed_array.toString();  //242
				var mytransportation_network_no_disclosure_arrayString = transportation_network_no_disclosure_array.toString();  //243
				var mysalvage_vehicle_history_initiated_arrayString = salvage_vehicle_history_initiated_array.toString();  //244
				var mysalvage_vehicle_disclosure_signed_arrayString = salvage_vehicle_disclosure_signed_array.toString();  //245
				var mysalvage_vehicle_no_disclosure_arrayString = salvage_vehicle_no_disclosure_array.toString();  //246
				var mylemon_law_buyback_history_initiated_arrayString = lemon_law_buyback_history_initiated_array.toString();  //247
				var mylemon_law_buyback_disclosure_signed_arrayString = lemon_law_buyback_disclosure_signed_array.toString();  //248
				var mylemon_law_buyback_no_disclosure_arrayString = lemon_law_buyback_no_disclosure_array.toString();  //249
				var mystolen_vehicle_history_initiated_arrayString = stolen_vehicle_history_initiated_array.toString();  //250
				var mystolen_vehicle_disclosure_signed_arrayString = stolen_vehicle_disclosure_signed_array.toString();  //251
				var mystolen_vehicle_no_disclosure_arrayString = stolen_vehicle_no_disclosure_array.toString();  //252
				var myform_of_disclosure_car_fax_only_arrayString = form_of_disclosure_car_fax_only_array.toString();  //253
				var myform_of_disclosure_no_disclosure_arrayString = form_of_disclosure_no_disclosure_array.toString();  //254
				var mysigned_four_square_pencil_desk_sheet_arrayString = signed_four_square_pencil_desk_sheet_array.toString();  //255
				var myheat_sheet_arrayString = heat_sheet_array.toString();  //256
				var mydue_bill_30_Day_language_arrayString = due_bill_30_Day_language_array.toString();  //257
				var mypromissory_note_arrayString = promissory_note_array.toString();  //258
				var myhold_check_agreement_arrayString = hold_check_agreement_array.toString();  //259
				var mytrade_in_pay_off_adjustment_agreement_arrayString = trade_in_pay_off_adjustment_agreement_array.toString();  //260

				var mymonroney_stickers_missing_arrayString = monroney_stickers_missing_array.toString();  //22
				var mybuyers_guides_missing_arrayString = buyers_guides_missing_array.toString();  //23
				var mybumper_impact_labels_arrayString = bumper_impact_labels_array.toString();  //26
				var myparts_content_labels_arrayString = parts_content_labels_array.toString();  //27
				var myitems_price_not_listed_arrayString = items_price_not_listed_array.toString();  //31
				var myrollback_violation_monroney_posted_arrayString = rollback_violation_monroney_posted_array.toString();  //33
				var myrollback_violation_no_bg_posted_arrayString = rollback_violation_no_bg_posted_array.toString();  //34
				var mydemonstrator_violation_no_monroney_posted_arrayString = demonstrator_violation_no_monroney_posted_array.toString();  //35
				var mydemonstrator_violation_no_bg_posted_arrayString = demonstrator_violation_no_bg_posted_array.toString();  //35(2)
				var mydemonstrator_violation_missing_both_arrayString = demonstrator_violation_missing_both_array.toString();  //35(3)
				var mykbb_stickers_outdated_arrayString = kbb_stickers_outdated_array.toString();  //36
				var myincomplete_finance_terms_stated_where_present_car_arrayString = incomplete_finance_terms_stated_where_present_car_array.toString();  //37
				var myincomplete_finance_terms_stated_where_present_banner_arrayString = incomplete_finance_terms_stated_where_present_banner_array.toString();  //38
				var myincomplete_finance_terms_stated_where_present_tv_arrayString = incomplete_finance_terms_stated_where_present_tv_array.toString();  //39
				var myincomplete_lease_terms_stated_where_present_car_arrayString = incomplete_lease_terms_stated_where_present_car_array.toString();  //40
				var myincomplete_lease_terms_stated_where_present_banner_arrayString = incomplete_lease_terms_stated_where_present_banner_array.toString();  //41
				var myincomplete_lease_terms_stated_where_present_tv_arrayString = incomplete_lease_terms_stated_where_present_tv_array.toString();  //42
				var myprice_after_rebate_with_no_math_equationarrayString = price_after_rebate_with_no_math_equationarray.toString();  //43
				var mywas_is_former_price_comparison_violationarrayString = was_is_former_price_comparison_violationarray.toString();  //44

				// var myotherasnewtextString = otherasnewtext.toString();
				// var myincorectlyidentifiedstringString = incorectlyidentifiedstring.toString();
				// var myleaseotherasnewtextString = leaseotherasnewtext.toString();

				var myleasedealerloanerString = leasedealerloanerr.toString();    // 103
				var myleaserollbackString = leaserollbackk.toString(); // 104
				var myleasecompanyservicevehicleString = leasecompanyservicevehiclee.toString(); // 105
				var myleasefactoryexecutiveString = leasefactoryexecutivee.toString();  // 106
				var myleasedemoconfirmedString = leasedemoconfirmed.toString(); // 106
				var myleasedemopossibleString = leasedemopossible.toString(); // 107
				var myleaseotherasnewdescribeeString = leaseotherasnewdescribee.toString();  //  108
				var myleasedemoarrayString = leasedemoarray.toString(); // 109
				var myleasedocfeeoverchargearrayString = leasedocfeeoverchargearray.toString();   // 110
				var myleaseevrfeeoverchargearrayString = leaseevrfeeoverchargearray.toString();   //111
				var myleaseisblankbox10daylanguagearrayString = leaseisblankbox10daylanguagearray.toString();   //112
				var myleaseisleaseorblankboxarrayString = leaseisleaseorblankboxarray.toString();  //  113
				var myleaseisdriveoffdeferredarrayString = leaseisdriveoffdeferredarray.toString();   // 114
				var myleaseisaftermarketproductsproperlyitemizedarrayString = leaseisaftermarketproductsproperlyitemizedarray.toString();  // 115
				var myleasedescribesignaturemissingvaluearrayString = leasedescribesignaturemissingvaluearray.toString();   // 116
				var myaccesory_backupdocument_falsearrayString = accesory_backupdocument_falsearray.toString();   // 117
				var myitemized_with_pricearrayString = itemized_with_pricearray.toString();   // 118
				var mycorrect_valuesarrayString = correct_valuesarray.toString();   // 119
				var mytheft_deterrent_backup_documentarrayString = theft_deterrent_backup_documentarray.toString();   // 120

				var mysurface_protection_backup_documentarrayString = surface_protection_backup_documentarray.toString();   // 124

				var myservice_contracts_backup_documentarrayString = service_contracts_backup_documentarray.toString();   // 128

				var mydebt_cancellation_agreement_backuparrayString = debt_cancellation_agreement_backuparray.toString();   // 133
				var myterm_completedarrayString = term_completedarray.toString();   // 134
				var mydebt_cancellation_agreement_backup_price_matcharrayString = debt_cancellation_agreement_backup_price_matcharray.toString();   // 135
				var mydebt_cancellation_agreement_backup_missingarrayString = debt_cancellation_agreement_backup_missingarray.toString();   // 136
				var mydebt_cancellation_agreement_backup_signedarrayString = debt_cancellation_agreement_backup_signedarray.toString();   // 137


				// if (mysignedString !== '')              // 47
				// {									
				// var firstviolation= 'Voided Reports of Sale fail to have a statement of facts attached as required by the Department of Motor Vehicles and processes must be created to ensure compliance with this requirement';

				// voilationlist.push(firstviolation);
				// }











				if (mymonroney_stickers_missing_arrayString !== '') {				//   22
				    var mymonroney_stickers_missing_violation= 'Some new vehicles fail to display the Monroney Sticker requiring the dealer to review the inventory to ensure that Monroney Stickers are present on all new vehicles and unregistered demonstrators.';
					// var codee = {};
					// codee.key =mymonroney_stickers_missing_violation;
					// codee.value = '1231 – 1233';
					
				    // voilationlists.push(codee);
					voilationlists.push({key : mymonroney_stickers_missing_violation, value : '1231 – 1233'});
//				    voilationlist.push(mymonroney_stickers_missing_violation);
				}
				if (mybuyers_guides_missing_arrayString !== '') {								   //   23

				    var mybuyers_guides_missing_violation= 'Some used vehicles fail to display the Buyers Guide requiring the dealer to review the inventory to ensure that Buyers Guides are present on all used vehicles including unregistered demonstrators. ';
					
					var laww = "";	
					// codeee.key =mybuyers_guides_missing_violation;
					// codeee.value = '455';
					
				    voilationlists.push({key : mybuyers_guides_missing_violation, value : '455'});
				}
				if (rr.inventory_worksheet !== undefined) {
					if (rr.inventory_worksheet.spanish_bg.none_present === true) {      // 24
				        var none_present_violation= 'Used vehicles did not display Spanish versions of the Buyers Guide requiring the dealer to ensure that Spanish Buyers Guides are present on all used vehicles including unregistered demonstrators.';

				        voilationlist.push(none_present_violation);
					}
					if (rr.inventory_worksheet.proposition_65.not_present_on_all_vehicles === true) {      // 25
				        var not_present_on_all_vehicles_violation= 'Vehicles did not display Proposition 65 stickers requiring the dealer to ensure that Proposition 65 stickers are present on all vehicles.';

				        voilationlist.push(not_present_on_all_vehicles_violation);
					}
					if (rr.inventory_worksheet.supplemental_stickers.violation.dealer_asking_price === true) {      // 28
				        var dealer_asking_price_violation= 'The dealership\'s supplemental stickers do not comply with Vehicle Codeformat requirements pertaining to the "Dealer Asking Price."';

				        voilationlist.push(dealer_asking_price_violation);
					}
					if (rr.inventory_worksheet.supplemental_stickers.violation.suggest_retail_price === true) {      // 29
				        var suggest_retail_price_violation= 'The dealership\'s supplemental stickers do not comply with Vehicle Code "This is Not the Manufacturer\'s Suggested Retail Price\" language requirements. ';

				        voilationlist.push(suggest_retail_price_violation);
					}
					if (rr.inventory_worksheet.supplemental_stickers.violation.msrp_not_disclosed === true) {      // 30
				        var msrp_not_disclosed_violation= 'The dealership\'s supplemental stickers do not comply with Vehicle Code\'s requirement that MSRP is cited on the sticker. ';

				        voilationlist.push(msrp_not_disclosed_violation);
					}
					if (rr.inventory_worksheet.supplemental_stickers.violation.added_dealer_markup === true) {      // 32
				        var added_dealer_markup_violation= 'The dealership\'s supplemental stickers do not comply with Vehicle Code\'s requirement pertaining to the notation of "added dealer mark up." ';

				        voilationlist.push(added_dealer_markup_violation);
					}
					if (rr.inventory_worksheet.front_license_plate_tile.disclosures_in_deal_jackets === false) {      // 45
				        var disclosures_in_deal_jackets_violation= 'Since front license plate brackets were missing in the dealerships inventory, the dealership must ensure that License Plate Bracket Removal forms are being utilized in all applicable transactions where the bracket was removed.  ';

				        voilationlist.push(disclosures_in_deal_jackets_violation);
					}
					if (rr.inventory_worksheet.advertising.violation.inserts_over_license_plates === false) {      // 46
				        var inserts_over_license_plates_violation= 'Vehicles within the dealership\'s inventory had license plates obscured by dealership placards in violation of the Vehicle Code. ';

				        voilationlist.push(inserts_over_license_plates_violation);
					}
				}
















				if (mybumper_impact_labels_arrayString !== '') {      // 26
				        var mybumper_impact_labels_arrayStringviolation= "Vehicles did not display Bumper Safety Labels requiring the dealer to ensure that these labels are present on all new vehicles.";

				        voilationlist.push(mybumper_impact_labels_arrayStringviolation);
				}
				if (myparts_content_labels_arrayString !== '') {      // 27
				        var myparts_content_labels_arrayStringviolation= "Vehicles did not display Parts Content Labels requiring the dealer to ensure that these labels are present on all new vehicles.";

				        voilationlist.push(myparts_content_labels_arrayStringviolation);
				}

				if (myitems_price_not_listed_arrayString !== '') {      										// 31
				        var myitems_price_not_listed_arrayStringviolation= "The dealership's supplemental stickers do not comply with Vehicle Code's requirement that it list all added products and prices.";

				        voilationlist.push(myitems_price_not_listed_arrayStringviolation);
				}

				if (myrollback_violation_monroney_posted_arrayString !== '') {      							// 33
				        var myrollback_violation_monroney_posted_arrayStringviolation= "Rollback vehicles were located displaying Monroney stickers requiring the dealership to ensure that only Buyers Guides are displayed on used vehicles.";

				        voilationlist.push(myrollback_violation_monroney_posted_arrayStringviolation);
				}
				if (myrollback_violation_no_bg_posted_arrayString !== '') {      									// 34
				        var myrollback_violation_no_bg_posted_arrayStringviolation= "Rollback vehicles were located that did not display the Buyers Guide requiring the dealership to review the inventory to ensure that Buyers Guides are displayed on all used vehicles.";

				        voilationlist.push(myrollback_violation_no_bg_posted_arrayStringviolation);
				}
				if (mydemonstrator_violation_no_monroney_posted_arrayString !== '' || mydemonstrator_violation_no_bg_posted_arrayString !== '' || mydemonstrator_violation_missing_both_arrayString !== '') {      																			// 35
				        var mydemonstrator_violation_no_monroney_posted_arrayStringviolation= "Demonstrator vehicles were located that did not display both a Monroney Sticker and Buyers Guide requiring the dealership to review the inventory to ensure that these stickers are displayed on all demonstrator vehicles.";

				        voilationlist.push(mydemonstrator_violation_no_monroney_posted_arrayStringviolation);
				}
				if (mykbb_stickers_outdated_arrayString !== '') {      													    // 36
				        var mykbb_stickers_outdated_arrayStringviolation= "Outdated Kelley Blue Book stickers were located on used vehicles requiring the dealership to review the inventory to ensure that current Kelley Blue Book stickers are posted on all used vehicles.";

				        voilationlist.push(mykbb_stickers_outdated_arrayStringviolation);
				}
				if (myincomplete_finance_terms_stated_where_present_car_arrayString !== '') {      							// 37
				        var myincomplete_finance_terms_stated_where_present_car_arrayStringviolation= "Purchase Offers Advertised on Inventory Vehicles";

				        voilationlist.push(myincomplete_finance_terms_stated_where_present_car_arrayStringviolation);
				}
				if (myincomplete_finance_terms_stated_where_present_banner_arrayString !== '') {      						// 38
				        var myincomplete_finance_terms_stated_where_present_banner_arrayStringviolation= "Finance advertisements advertised on an inventory banner failed to comply with Federal Regulation Z requirements.";

				        voilationlist.push(myincomplete_finance_terms_stated_where_present_banner_arrayStringviolation);
				}
				if (myincomplete_finance_terms_stated_where_present_tv_arrayString !== '') {      							// 39
				        var myincomplete_finance_terms_stated_where_present_tv_arrayStringviolation= "Finance advertisements advertised on a television located at the dealership failed to comply with Federal Regulation Z requirements.";

				        voilationlist.push(myincomplete_finance_terms_stated_where_present_tv_arrayStringviolation);
				}
				if (myincomplete_lease_terms_stated_where_present_car_arrayString !== '') {      							// 40
				        var myincomplete_lease_terms_stated_where_present_car_arrayStringviolation= "Lease advertisements advertised on vehicles fail to comply with Federal Regulation M requirements.";

				        voilationlist.push(myincomplete_lease_terms_stated_where_present_car_arrayStringviolation);
				}
				if (myincomplete_lease_terms_stated_where_present_banner_arrayString !== '') {      						// 41
				        var myincomplete_lease_terms_stated_where_present_banner_arrayStringviolation= "Lease terms stated on a dealership banner failed to comply with Federal Regulation M requirements.";

				        voilationlist.push(myincomplete_lease_terms_stated_where_present_banner_arrayStringviolation);
				}
				if (myincomplete_lease_terms_stated_where_present_tv_arrayString !== '') {      							// 42
				        var myincomplete_lease_terms_stated_where_present_tv_arrayStringviolation= "Lease terms stated on dealership television failed to comply with Federal Regulation M requirements.";

				        voilationlist.push(myincomplete_lease_terms_stated_where_present_tv_arrayStringviolation);
				}
				if (myprice_after_rebate_with_no_math_equationarrayString !== '') {      									// 43
				        var myprice_after_rebate_with_no_math_equationarrayStringviolation= "Vehicles stating prices after the application of factory rebates fail to comply with the math equation format requirements provided under Vehicle Code 11713.18(e).";

				        voilationlist.push(myprice_after_rebate_with_no_math_equationarrayStringviolation);
				}
				if (mywas_is_former_price_comparison_violationarrayString !== '') {      									// 44
				        var mywas_is_former_price_comparison_violationarrayStringviolation= "Advertising price comparisons on vehicles in inventory in violation of Business and Professions Code § 17501. ";
						var law17501 ="Business and Professions Code § 17501. For the purpose of this article the worth or value of anything advertised is the prevailing market price, wholesale if the offer is at wholesale, retail if the offer is at retail, at the time of publication of such advertisement in the locality wherein the advertisement is published.No price shall be advertised as a former price of any advertised thing, unless the alleged former price was the prevailing market price as above defined within three months next immediately preceding the publication of the advertisement or unless the date when the alleged former price did prevail is clearly, exactly and conspicuously stated in the advertisement.";
				        voilationlists.push({key : mywas_is_former_price_comparison_violationarrayStringviolation,value : "17501",law : law17501});
				}




				if (mysignedString !== '') {									// 47
					var firstviolation = 'Copies of the signed electronic copy of the Retail Installment Sales Contract must be retained in every sales jacket in which such contracts were executed.';

					voilationlist.push(firstviolation);
				}
				if (myreviewString !== '') {                    // 48
					var myreviewStringviolation = "Copies of the review version of the electronic Retail Installment Sales Contract must be provided to all consumers and a copy of the review version must be retained in every sales jacket in which such contracts were executed.";

					voilationlist.push(myreviewStringviolation);
				}
				if (mynewusedString !== '') {
					var mynewusedStringviolation = 'The dealership must review the e-contract process to ensure that the Retail Installment Sales Contract will print the "New/Used" box in red.';

					voilationlist.push(mynewusedStringviolation);
				}
				if (mypublicliabilityString !== '') {
					var mypublicliabilityStringviolation = 'The dealership must review the e-contract process to ensure that the Retail Installment Sales Contract will print the Minimum Public Liability Insurance Limits section in red.';

					voilationlist.push(mypublicliabilityStringviolation);
				}
				if (myleasesignedString !== '') {

					var myleasesignedStringviolation = 'Copies of the signed electronic copy of the electronic lease agreement must be retained in every sales jacket in which such agreements were executed.';

					voilationlist.push(myleasesignedStringviolation);
				}
				if (myleasereviewString !== '') {
					var myleasereviewStringviolation = 'Copies of the review version of the electronic lease agreement must be provided to all consumers and a copy of the review version must be retained in every sales jacket in which such lease agreements were executed.';

					voilationlist.push(myleasereviewStringviolation);
				}
				if (mydealerloanerString !== '') {
					var mydealerloanerStringviolation = 'Dealer loaners are being incorrectly identified as "NEW" on the sales contract requiring the dealer to review with its staff that dealer loaners are used vehicles and must be identified as such on the contract.';

					voilationlist.push(mydealerloanerStringviolation);
				}
				if (myrollbackString !== '') {
					var myrollbackStringviolation = 'Rollbacks are being incorrectly identified as "NEW" on the sales contract requiring the dealer to review with its staff that rollbacks are used vehicles and must be identified as such on the contract.';

					voilationlist.push(myrollbackStringviolation);
				}
				if (mycompanyservicevehicleString !== '') {
					var mycompanyservicevehicleStringviolation = 'Company Service Vehicles are being incorrectly identified as "NEW" on the sales contract requiring the dealer to review with its staff that service vehicles are used vehicles and must be identified as such on the contract.';

					voilationlist.push(mycompanyservicevehicleStringviolation);
				}
				if (myfactoryexecutiveString !== '') {
					var myfactoryexecutiveStringviolation = 'Company Service Vehicles are being incorrectly identified as "NEW" on the sales contract requiring the dealer to review with its staff that service vehicles are used vehicles and must be identified as such on the contract.';

					voilationlist.push(myfactoryexecutiveStringviolation);
				}
				if (mydemoconfirmedString !== '') {
					var mydemoconfirmedStringviolation = 'Company Service Vehicles are being incorrectly identified as "NEW" on the sales contract requiring the dealer to review with its staff that service vehicles are used vehicles and must be identified as such on the contract.';

					voilationlist.push(mydemoconfirmedStringviolation);
				}
				if (mydemopossibleString !== '') {
					var mydemopossibleStringviolation = 'Demonstrator vehicles must be identified as "used" on the sales contract requiring the dealer to review with its staff that such vehicles are used vehicles and must be identified as such on the contract.';

					voilationlist.push(mydemopossibleStringviolation);
				}
				if (myotherasnewdescribeeString !== '') {
					var myotherasnewdescribeeStringviolation = 'Used vehicles must never be identified as "NEW" on the sales contract requiring the dealer to review with its staff the requirements of compliance in this area.';

					voilationlist.push(myotherasnewdescribeeStringviolation);
				}
				if (mydemoarrayString !== '') {
					var mydemoarrayStringviolation = 'Demonstrator vehicles cannot be identified as "DEMO" on the sales contract requiring the dealer to review with its staff that such vehicles are used vehicles and the contract must identify the vehicles as such.';

					voilationlist.push(mydemoarrayStringviolation);
				}
				if (myincorectlyidentifiedstringarrayString !== '') {
					var myincorectlyidentifiedstringarrayStringviolation = 'The accessory line must only be used to identify products that are physically attached to a vehicle.';

					voilationlist.push(myincorectlyidentifiedstringarrayStringviolation);
				}
				if (mysupplierstickervoialationarrayString !== '') {
					var mysupplierstickervoialationarrayStringviolation = 'Dealer installed accessories listed on a supplemental sticker are included in the sales price when negotiated prohibiting the dealer from reflecting these products outside the sales price on the Retail Installment Sales Contract.';

					voilationlist.push(mysupplierstickervoialationarrayStringviolation);
				}
				if (mydocfeeoverchargearrayString !== '') {
					var mydocfeeoverchargearrayStringviolation = 'Contracts must be reviewed to ensure that consumers are not overcharged for the $80 dealer document processing fee.';

					voilationlist.push(mydocfeeoverchargearrayStringviolation);
				}
				if (mysmogfeeoverchargearrayString !== '') {
					var mysmogfeeoverchargearrayStringviolation = 'Contracts must be reviewed to ensure that consumers are not overcharged for the $50 smog inspection fee.';

					voilationlist.push(mysmogfeeoverchargearrayStringviolation);
				}
				if (mysmogfeeinspectionduearrayString !== '') {             // 64
					var mysmogfeeinspectionduearrayStringviolation = 'Contracts must be reviewed to ensure that consumers are not charged for smog inspections when the vehicle qualifies for the smog exemption fee.';

					voilationlist.push(mysmogfeeinspectionduearrayStringviolation);
				}
				if (mytheft_deterrent_paid_to_missing_arrayString !== '') {             // 65
					var mytheft_deterrent_paid_to_missing_arrayStringviolation = 'Contracts must reflect to the party receiving payment for the theft deterrent product on the "paid to" line of the contract.';

					voilationlist.push(mytheft_deterrent_paid_to_missing_arrayStringviolation);
				}
				if (mysurface_protection_paid_to_missing_arrayString !== '') {             // 66
					var mysurface_protection_paid_to_missing_arrayStringviolation = 'Contracts must reflect to the party receiving payment for the surface protectant product on the "paid to" line of the contract.';

					voilationlist.push(mysurface_protection_paid_to_missing_arrayStringviolation);
				}
				if (mypaid_to_missing_violationarrayString !== '') {                //67
					var mypaid_to_missing_violationarrayStringviolation = 'Contracts must reflect to the party receiving payment for the electronic vehicle registration or transfer charge on the "paid to" line of the contract.';

					voilationlist.push(mypaid_to_missing_violationarrayStringviolation);
				}
				if (myevr_fee_overchargearrayString !== '') {					//68
					var myevr_fee_overchargearrayStringviolation = 'The dealership must take action to correct the amount charged for the Electronic Vehicle Registration or Transfer Charge assessed to consumers to ensure that overcharges do not occur.';

					voilationlist.push(myevr_fee_overchargearrayStringviolation);
				}
				if (myservice_contracts_list_is_violation_arrayString !== '') {					//69
					var myservice_contracts_list_is_violation_arrayStringviolation = 'Contracts must reflect to the party receiving payment for the service contracts on the "paid to" line of the contract.';

					voilationlist.push(myservice_contracts_list_is_violation_arrayStringviolation);
				}
				if (myservice_contracts_list_company_violation_arrayString !== '') {					//70
					var myservice_contracts_list_company_violation_arrayStringviolation = 'Contracts must reflect to the party receiving payment for the service contracts in the Optional Service Contract box on the contract.';

					voilationlist.push(myservice_contracts_list_company_violation_arrayStringviolation);
				}
				if (myservice_contracts_list_months_violation_arrayString !== '') {					//71
					var myservice_contracts_list_months_violation_arrayStringviolation = 'Contracts must reflect the term of the service contract in the Optional Service Contract box on the contract.';

					voilationlist.push(myservice_contracts_list_months_violation_arrayStringviolation);
				}
				if (myservice_contractsis_box_signedarrayString !== '') {
					var myservice_contractsis_box_signedarrayStringviolation = 'Customer signatures must be obtained in the Optional Service Contract box on the contract in every instance these products are sold to consumers.';

					voilationlist.push(myservice_contractsis_box_signedarrayStringviolation);
				}
				if (mydebt_cancellation_term_violationarrayString !== '') {
					var mydebt_cancellation_term_violationarrayStringviolation = 'Contracts must reflect the term of the Debt Cancellation Agreement in the Debt Cancellation box on the contract.';

					voilationlist.push(mydebt_cancellation_term_violationarrayStringviolation);
				}
				if (mydebt_cancellation_company_violationarrayString !== '') {
					var mydebt_cancellation_company_violationarrayStringviolation = 'Contracts must reflect to the Debt Cancellation Agreement provider in the Debt Cancellation Agreement box on the contract.';

					voilationlist.push(mydebt_cancellation_company_violationarrayStringviolation);
				}
				if (mydebt_cancellation_signature_missingarrayString !== '') {
					var mydebt_cancellation_signature_missingarrayStringviolation = 'Customer signatures must be obtained in the Debt Cancellation Agreement box on the contract in every instance the product is sold to consumers.';

					voilationlist.push(mydebt_cancellation_signature_missingarrayStringviolation);
				}
				if (mysignature_line_signedarrayString !== '') {
					var mysignature_line_signedarrayStringviolation = 'The dealership must consider adopting the practice of inserting "N/A" in a typewritten form on the signature line in the Debt Cancellation Agreement section when a Debt Cancellation Agreement is not sold.';

					voilationlist.push(mysignature_line_signedarrayStringviolation);
				}
				if (mysignature_line_hand_wrritenarrayString !== '') {
					var mysignature_line_hand_wrritenarrayStringviolation = 'The dealership must eliminate the practice of handwriting "N/A" on the signature line in the Debt Cancellation Agreement section but rather, insert a typewritten "N/A" when a Debt Cancellation Agreement is not sold.';

					voilationlist.push(mysignature_line_hand_wrritenarrayStringviolation);
				}
				if (mycontract_cancellation_proper_valuearrayString !== '') {
					var mycontract_cancellation_proper_valuearrayStringviolation = 'The dealership must ensure that the Retail Installment Sales Contract correctly reflects an accurate value for the Contract Cancellation Charge fee.';

					voilationlist.push(mycontract_cancellation_proper_valuearrayStringviolation);
				}
				if (myother_line_usedarrayString !== '') {
					var myother_line_usedarrayStringviolation = 'The dealership must reconsider using the "Other" line on the Retail Installment Sales Contract and seek legal advice anytime you consider using these lines.';

					voilationlist.push(myother_line_usedarrayStringviolation);
				}
				if (mylicense_or_registration_fees_violation_fees_lumpedarrayString !== '') {
					var mylicense_or_registration_fees_violation_fees_lumpedarrayStringviolation = 'The dealership must discontinue the practice of fee lumping and ensure that DMV fees are properly reflected on the contract.';

					voilationlist.push(mylicense_or_registration_fees_violation_fees_lumpedarrayStringviolation);
				}
				if (mylicense_or_registration_fees_violation_transfer_fee_too_higharrayString !== '') {
					var mylicense_or_registration_fees_violation_transfer_fee_too_higharrayStringviolation = 'The dealership must ensure that proper fees (i.e., transfer fees) are stated on the Retail Installment Sales Contract.';

					voilationlist.push(mylicense_or_registration_fees_violation_transfer_fee_too_higharrayStringviolation);
				}
				if (myovercharge_no_spare_overchargearrayString !== '') {
					var myovercharge_no_spare_overchargearrayStringviolation = 'The dealership must ensure that tire fees are collected for the number of new tires present on a vehicle and if a vehicle lacks a spare tire, the consumer cannot be charged in this instance.';

					voilationlist.push(myovercharge_no_spare_overchargearrayStringviolation);
				}
				if (myovercharge_no_demo_overchargearrayString !== '') {
					var myovercharge_no_demo_overchargearrayStringviolation = 'The dealership must ensure that tire fees are only charged for a new spare tire in demonstrator vehicle transactions.';

					voilationlist.push(myovercharge_no_demo_overchargearrayStringviolation);
				}
				if (myovercharge_no_on_usedarrayString !== '') {
					var myovercharge_no_on_usedarrayStringviolation = 'The dealership must ensure that tire fees are collected for the number of new tires present on a vehicle and the consumer can only be charged when new tires are present.';

					voilationlist.push(myovercharge_no_on_usedarrayStringviolation);
				}
				if (myovercharge_smog_inspection_overchargearrayString !== '') {
					var myovercharge_smog_inspection_overchargearrayStringviolation = 'The dealership must ensure that accurate smog fees are collected in each applicable transaction.';

					voilationlist.push(myovercharge_smog_inspection_overchargearrayStringviolation);
				}
				if (myovercharge_smog_exempt_overchargearrayString !== '') {
					var myovercharge_smog_exempt_overchargearrayStringviolation = 'The dealership must ensure that accurate smog exempt fees are collected in each applicable transaction.';

					voilationlist.push(myovercharge_smog_exempt_overchargearrayStringviolation);
				}
				if (myovercharge_smog_insp_when_exemptarrayString !== '') {
					var myovercharge_smog_insp_when_exemptarrayStringviolation = 'The dealership must ensure that only smog exempt fees are charged when a vehicle meets the smog exemption requirements in the Vehicle Code.';

					voilationlist.push(myovercharge_smog_insp_when_exemptarrayStringviolation);
				}
				if (myovercharge_smog_exempt_when_insparrayString !== '') {
					var myovercharge_smog_exempt_when_insparrayStringviolation = 'The dealership must ensure that smog exempt fees are only charged when a vehicle meets the smog exemption requirements in the Vehicle Code and that full inspection costs for the smog inspection and certificate of compliance are charged when a smog inspection is required.';

					voilationlist.push(myovercharge_smog_exempt_when_insparrayStringviolation);
				}
				if (mysmog_exempt_or_fees_violation_underchargearrayString !== '') {
					var myovercharge_smog_exempt_when_insparrayStringviolation = 'The dealership should always collect the permitted amounts that can be charged to a consumer for the smog inspection and certificate of compliance when dealers are obligated to perform a smog inspection in order to recoup costs.';

					voilationlist.push(myovercharge_smog_exempt_when_insparrayStringviolation);
				}

				if (mytrade_in_vehicles_over_allowance_arrayString !== '') {
					var mytrade_in_vehicles_over_allowance_arrayStringviolation = 'The dealership must avoid providing over allowances as such allowances facilitate challenges by attorneys contending the over allowance resulted in the increase in the selling price which, in turn, resulted in excess sales tax, license and finance charges as a result.';

					voilationlist.push(mytrade_in_vehicles_over_allowance_arrayStringviolation);
				}

				if (mycredit_as_deferred_downarrayString !== '') {
					var mycredit_as_deferred_downarrayStringviolation = 'Credit card down payments must be listed on the down payment portion of the contract and not as a deferred down payment.';

					voilationlist.push(mycredit_as_deferred_downarrayStringviolation);
				}
				if (myundisclosed_deferred_downarrayString !== '') {
					var myundisclosed_deferred_downarrayStringviolation = 'Deferred down payments must be accurately reflected on the correct line of the Retail Installment Sales Contract.';

					voilationlist.push(myundisclosed_deferred_downarrayStringviolation);
				}
				if (mycompany_disclosed_on_contractarrayString !== '') {
					var mycompany_disclosed_on_contractarrayStringviolation = 'When transactions are brokered, the contract must reflect the name of the broker in the auto broker box.';

					voilationlist.push(mycompany_disclosed_on_contractarrayStringviolation);
				}
				if (mybroker_agreement_in_dealarrayString !== '') {
					var mybroker_agreement_in_dealarrayStringviolation = 'When transactions are brokered, a copy of the auto broker agreement must be maintained in the sales jacket. ';

					voilationlist.push(mybroker_agreement_in_dealarrayStringviolation);
				}
				if (mybroker_agreement_completedarrayString !== '') {
					var mybroker_agreement_completedarrayStringviolation = 'When transactions are brokered, a completed copy of the auto broker agreement must be maintained in the sales jacket.';

					voilationlist.push(mybroker_agreement_completedarrayStringviolation);
				}
				if (mybroker_agreement_signedarrayString !== '') {
					var mybroker_agreement_signedarrayStringviolation = 'When transactions are brokered, a complete and signed copy of the auto broker agreement must be maintained in the sales jacket. ';

					voilationlist.push(mybroker_agreement_signedarrayStringviolation);
				}
				if (mysecond_contract_backdatedarrayString !== '') {
					var mysecond_contract_backdatedarrayStringviolation = 'Dealers must avoid the practice of backdating rewritten contracts but rather, institute a policy that contracts reflect the date it is executed.  ';

					voilationlist.push(mysecond_contract_backdatedarrayStringviolation);
				}
				if (myrescission_letterarrayString !== '') {
					var myrescission_letterarrayStringviolation = 'Dealers must ensure that it carefully follows the contract cancellation requirements found on the back of the Retail Installment Sales Contract by retaining proof in the sales jacket (rescission letter) that such requirements were carefully followed.';

					voilationlist.push(myrescission_letterarrayStringviolation);
				}
				if (mynotice_of_rewritten_contractarrayString !== '') {
					var mynotice_of_rewritten_contractarrayStringviolation = 'Dealers should adhere to the practice of obtaining the consumer’s signature on an acknowledgement of canceled/rewritten contract form any time a contract is cancelled. ';

					voilationlist.push(mynotice_of_rewritten_contractarrayStringviolation);
				}
				if (mydescribe_section_where_signature_missingarrayString !== '') {
					var mydescribe_section_where_signature_missingarrayStringviolation = 'Dealers must ensure that signatures are obtained on all lines of the sales contract and that no portions of the sales contract are blank.';

					voilationlist.push(mydescribe_section_where_signature_missingarrayStringviolation);
				}
				if (myblank_box_na_arrayString !== '') {
					var myblank_box_na_arrayStringviolation = 'Dealers must consider using the phrase “no additional terms to be entered in this box”for the blank box on the Retail Installment Contract; however, no such provision should be used unless you confirm that your lenders will accept such language.';

					voilationlist.push(myblank_box_na_arrayStringviolation);
				}
				if (myblank_box_blank_arrayString !== '') {
					var myblank_box_blank_arrayStringviolation = 'Dealers must never obtain a customer’s signature on a Retail Installment Contract that includes blank sections.';

					voilationlist.push(myblank_box_blank_arrayStringviolation);
				}
				if (myleasedealerloanerString !== '') {
					var myleasedealerloanerStringviolation = 'Dealer loaners are being incorrectly identified as "NEW" on leases requiring the dealer to review with its staff that dealer loaners are used vehicles and must be identified as such on the lease.';

					voilationlist.push(myleasedealerloanerStringviolation);
				}
				if (myleaserollbackString !== '') {
					var myleaserollbackStringviolation = 'Rollbacks are being incorrectly identified as "NEW" on leases requiring the dealer to review with its staff that rollbacks are used vehicles and must be identified as such.';

					voilationlist.push(myleaserollbackStringviolation);
				}
				if (myleasecompanyservicevehicleString !== '') {
					var myleasecompanyservicevehicleStringviolation = 'Company Service Vehicles are being incorrectly identified as "NEW" on leases requiring the dealer to review with its staff that service vehicles are used vehicles and must be identified as such.';

					voilationlist.push(myleasecompanyservicevehicleStringviolation);
				}
				if (myleasefactoryexecutiveString !== '') {
					var myleasefactoryexecutiveStringviolation = 'Demonstrator/Factory Executive Vehicles are being incorrectly identified as "NEW" on leases requiring the dealer to review with its staff that such vehicles are used vehicles and must be identified as such.';

					voilationlist.push(myleasefactoryexecutiveStringviolation);
				}
				if (myleasedemoconfirmedString !== '') {
					var myleasedemoconfirmedStringviolation = 'Demonstrator/Factory Executive Vehicles are being incorrectly identified as "NEW" on leases requiring the dealer to review with its staff that such vehicles are used vehicles and must be identified as such.';

					voilationlist.push(myleasedemoconfirmedStringviolation);
				}
				if (myleasedemopossibleString !== '') {
					var myleasedemopossibleStringviolation = 'Demonstrator vehicles must be identified as "used" on leases requiring the dealer to review with its staff that such vehicles are used vehicles and must be identified as such.';

					voilationlist.push(myleasedemopossibleStringviolation);
				}
				if (myleaseotherasnewdescribeeString !== '') {
					var myleaseotherasnewdescribeeStringviolation = 'Used vehicles must never be identified as "new" on the lease requiring the dealer to review with its staff the requirements of compliance in this area.';

					voilationlist.push(myleaseotherasnewdescribeeStringviolation);
				}
				if (myleasedemoarrayString !== '') {
					var myleasedemoarrayStringviolation = 'Demonstrator vehicles cannot be identified as "DEMO" on a lease requiring the dealer to review with its staff that such vehicles are used vehicles and the contract must identify the vehicles as such.';

					voilationlist.push(myleasedemoarrayStringviolation);
				}
				if (myleasedocfeeoverchargearrayString !== '') {
					var myleasedocfeeoverchargearrayStringviolation = 'Leases must be reviewed to ensure that consumers are not overcharged for the $80 dealer document processing fee.';

					voilationlist.push(myleasedocfeeoverchargearrayStringviolation);
				}
				if (myleaseevrfeeoverchargearrayString !== '') {
					var myleaseevrfeeoverchargearrayStringviolation = 'The dealership must take corrective action concerning the amount charged for the Electronic Vehicle Registration or Transfer Charge assessed to consumers to ensure that overcharges do not occur.';

					voilationlist.push(myleaseevrfeeoverchargearrayStringviolation);
				}
				if (myleaseisblankbox10daylanguagearrayString !== '') {
					var myleaseisblankbox10daylanguagearrayStringviolation = 'When acceptable to your lender, ten day rescission/cancellation provisions must be populated in the dealership’s lease agreements.';

					voilationlist.push(myleaseisblankbox10daylanguagearrayStringviolation);
				}
				if (myleaseisleaseorblankboxarrayString !== '') {
					var myleaseisleaseorblankboxarrayStringviolation = 'When acceptable to your lender, trade in pay off agreement language must be populated in the dealership’s lease agreements.';

					voilationlist.push(myleaseisleaseorblankboxarrayStringviolation);
				}
				if (myleaseisdriveoffdeferredarrayString !== '') {
					var myleaseisdriveoffdeferredarrayStringviolation = 'The dealership must institute a policy whereby deferred down payments are not accepted in a lease context.';

					voilationlist.push(myleaseisdriveoffdeferredarrayStringviolation);
				}
				if (myleaseisaftermarketproductsproperlyitemizedarrayString !== '') {
					var myleaseisaftermarketproductsproperlyitemizedarrayStringviolation = 'The dealership must ensure that aftermarket accessories sold to a consumer are properly itemized on the lease.';

					voilationlist.push(myleaseisaftermarketproductsproperlyitemizedarrayStringviolation);
				}
				if (myleasedescribesignaturemissingvaluearrayString !== '') {
					var myleasedescribesignaturemissingvaluearrayStringviolation = 'The dealership must ensure that signatures are obtained on all requisite lines on the lease agreement.';

					voilationlist.push(myleasedescribesignaturemissingvaluearrayStringviolation);
				}
				if (myaccesory_backupdocument_falsearrayString !== '') {
					var myaccesory_backupdocument_falsearrayStringviolation = 'Whenever accessories are listed on the Retail Installment Contract, the dealership must retain backup documentation itemizing the products purchased and the respective prices of the same.';

					voilationlist.push(myaccesory_backupdocument_falsearrayStringviolation);
				}
				if (myitemized_with_pricearrayString !== '') {
					var myitemized_with_pricearrayStringviolation = 'Whenever accessories are listed on the Retail Installment Contract, the dealership must retain backup documentation reflecting the cost of the accessories purchased. ';

					voilationlist.push(myitemized_with_pricearrayStringviolation);
				}
				if (mycorrect_valuesarrayString !== '') {
					var mycorrect_valuesarrayStringviolation = 'Whenever accessories are listed on the Retail Installment Contract, the dealership must retain backup documentation that reflects pricing for accessories that is consistent with what is stated on the Retail Installment Contract. ';

					voilationlist.push(mycorrect_valuesarrayStringviolation);
				}
				if (mytheft_deterrent_backup_documentarrayString !== '') {					// 120
					var mytheft_deterrent_backup_documentarrayStringviolation = 'Retail Installment Sales Contracts which include the purchase of theft deterrent devices require the dealership to retain backup documentation describing the products purchased and the respective prices of the same. ';

					voilationlist.push(mytheft_deterrent_backup_documentarrayStringviolation);
				}
				if (mysurface_protection_backup_documentarrayString !== '') {  				// 124
					var mysurface_protection_backup_documentarrayStringviolation = 'Retail Installment Sales Contracts which include the purchase of surface protection products require the dealership to retain backup documentation describing the products purchased and the respective prices of the same. ';

					voilationlist.push(mysurface_protection_backup_documentarrayStringviolation);
				}
				if (myservice_contracts_backup_documentarrayString !== '') {  				// 128
					var myservice_contracts_backup_documentarrayStringviolation = 'Any time a Service Contract is sold to a customer, the dealership must retain a signed copy of the document in the sales jacket.  ';

					voilationlist.push(myservice_contracts_backup_documentarrayStringviolation);
				}
				if (mydebt_cancellation_agreement_backuparrayString !== '') {  				// 133
					var mydebt_cancellation_agreement_backuparrayStringviolation = 'Whenever a Debt Cancellation Agreement is sold to a customer, the dealership must retain a signed copy of the document in the sales jacket.  ';

					voilationlist.push(mydebt_cancellation_agreement_backuparrayStringviolation);
				}
				if (myterm_completedarrayString !== '') {  									// 134
					var myterm_completedarrayStringviolation = 'To avoid coverage issues relating to the sale of a Debt Cancellation Agreement, the dealership must ensure that the coverage term reflected on the agreement is consistent with the term reflected on the Retail Installment Sales Contract.  ';

					voilationlist.push(myterm_completedarrayStringviolation);
				}
				if (mydebt_cancellation_agreement_backup_price_matcharrayString !== '') {  		// 135
					var mydebt_cancellation_agreement_backup_price_matcharrayStringviolation = 'To avoid disparities in pricing on the Retail Installment Sales Contract and Debt Cancellation Agreements, dealer staff must verify the accuracy of this information in every transaction.  ';

					voilationlist.push(mydebt_cancellation_agreement_backup_price_matcharrayStringviolation);
				}
				if (mydebt_cancellation_agreement_backup_missingarrayString !== '') {  		// 136
					var mydebt_cancellation_agreement_backup_missingarrayStringviolation = "To avoid disparities in pricing on the Retail Installment Sales Contract and Debt Cancellation Agreements, dealer staff must verify the accuracy of this information in every transaction.  ";

					voilationlist.push(mydebt_cancellation_agreement_backup_missingarrayStringviolation);
				}
				if (mydebt_cancellation_agreement_backup_signedarrayString !== '') {  		// 137
					var mydebt_cancellation_agreement_backup_signedarrayStringviolation = "To avoid contentions that the sale of a Debt Cancellation Agreement is invalid or unenforceable or otherwise obligates the dealership to provide coverage, dealership staff must ensure that the customer’s signature is obtained on all Debt Cancellation Agreements.   ";

					voilationlist.push(mydebt_cancellation_agreement_backup_signedarrayStringviolation);
				}
				if (myredflagprogrammeverifiedarrayString !== '') {
					var myredflagprogrammeverifiedarrayStringviolation = "The dealership must ensure that it has a proper Red Flags Program, that an Information Security Officer (ISO) is assigned to oversee the program, the staff is trained in Red Flags and that annual updates are made to the program.   ";

					voilationlist.push(myredflagprogrammeverifiedarrayStringviolation);
				}
				if (myredflagsummaryfoundarrayString !== '') {
					var myredflagsummaryfoundarrayStringviolation = "The dealership must ensure that it has proper procedures in place to retain Red Flag documentation pertaining to each deal.   ";

					voilationlist.push(myredflagsummaryfoundarrayStringviolation);
				}
				if (myoutofwalletquetionusedarrayString !== '') {
					var myoutofwalletquetionusedarrayStringviolation = "Any time a Red Flags problem is noted and a potential identity theft situation is present, the dealership must retain Red Flag documentation (i.e., out of wallet questions, etc.) evidencing that the dealership cleared any potential Red Flags problem by performing the requisite inquiries with the consumer.  ";

					voilationlist.push(myoutofwalletquetionusedarrayStringviolation);
				}
				if (mymultiplesignedapplicationarrayString !== '') {
					var mymultiplesignedapplicationarrayStringviolation = "The dealership must institute strict practices relating to credit applications and ensure that the consumer completes the credit application and that multiple credit applications are never obtained. ";

					voilationlist.push(mymultiplesignedapplicationarrayStringviolation);
				}
				if (myalteredinitialsarrayString !== '') {
					var myalteredinitialsarrayStringviolation = "The dealership must institute strict practices relating to credit applications and ensure that the consumer completes the credit application and that credit applications are never altered.";

					voilationlist.push(myalteredinitialsarrayStringviolation);
				}
				if (myincompleteorblanksarrayString !== '') {
					var myincompleteorblanksarrayStringviolation = " The dealership must institute strict practices relating to credit applications and ensure that the consumer completes the credit application and that the dealership never obtain the consumer's signature on a credit application that includes blank entries. ";

					voilationlist.push(myincompleteorblanksarrayStringviolation);
				}
				if (myfivelineapplicationlinedthrougharrayString !== '') {
					var myfivelineapplicationlinedthrougharrayStringviolation = " The dealership must institute strict practices relating to credit applications and ensure that the consumer completes the credit application and that the dealership never obtain the consumer's signature on a credit application that includes blank entries. ";

					voilationlist.push(myfivelineapplicationlinedthrougharrayStringviolation);
				}
				if (mybuyerguidemissingarrayString !== '') {
					var mybuyerguidemissingarrayStringviolation = " The dealership must ensure that a signed copy of the Buyers Guide is retained in every used vehicle transaction. ";

					voilationlist.push(mybuyerguidemissingarrayStringviolation);
				}
				if (mybgpresentcompletevehicleinformationarrayString !== '') {
					var mybgpresentcompletevehicleinformationarrayStringviolation = " The dealership must ensure that the vehicle description is stated on the Buyers Guide in every used vehicle transaction.";

					voilationlist.push(mybgpresentcompletevehicleinformationarrayStringviolation);
				}
				if (mybgpresentvehiclehistorydisclosedonbgarrayString !== '') {
					var mybgpresentvehiclehistorydisclosedonbgarrayStringviolation = "The dealership must ensure that the vehicle histories are not stated on the Buyers Guide.";

					voilationlist.push(mybgpresentvehiclehistorydisclosedonbgarrayStringviolation);
				}
				if (mydealercontactinformationarrayString !== '') {
					var mydealercontactinformationarrayStringviolation = "The dealership must ensure that dealer contact information is disclosed on all Buyers Guide.";

					voilationlist.push(mydealercontactinformationarrayStringviolation);
				}
				if (mydealercontactinformationincompletearrayString !== '') {
					var mydealercontactinformationincompletearrayStringviolation = "The dealership must ensure that dealer contact information is disclosed on all Buyers Guide.";

					voilationlist.push(mydealercontactinformationincompletearrayStringviolation);
				}
				if (mybgpresenthowsoldsignedarrayString !== '') {
					var mybgpresenthowsoldsignedarrayStringviolation = "The dealership must ensure that the customer's signature is obtained on the back of the Buyers Guide to provide proof of compliance that the vehicle posted the Buyers Guide.";

					voilationlist.push(mybgpresenthowsoldsignedarrayStringviolation);
				}
				if (mydealerwarrantyboxcheckedarrayString !== '') {
					var mydealerwarrantyboxcheckedarrayStringviolation = "When a dealer warranty is offered on a used vehicle, the dealership must ensure the Buyers Guide has the dealer warranty box checked. ";

					voilationlist.push(mydealerwarrantyboxcheckedarrayStringviolation);
				}
				if (mypercentagecoveragecompletedarrayString !== '') {
					var mypercentagecoveragecompletedarrayStringviolation = "When a dealer warranty is offered on a used vehicle, the dealership must ensure the percentage of coverage offered by the dealer is stated on the Buyers Guide.";

					voilationlist.push(mypercentagecoveragecompletedarrayStringviolation);
				}
				if (mysystemscoveredordurationcompletearrayString !== '') {
					var mysystemscoveredordurationcompletearrayStringviolation = "When a dealer warranty is offered on a used vehicle, the dealership must ensure the systems covered and duration of coverage offered by the dealer is stated on the Buyers Guide. ";

					voilationlist.push(mysystemscoveredordurationcompletearrayStringviolation);
				}
				if (myimpliedwarrantyboxcheckedearrayString !== '') {
					var myimpliedwarrantyboxcheckedearrayStringviolation = "Any time a used vehicle is sold with an unexpired factory warranty, the used vehicle must display an Implied Warranties version of the Buyers Guide. ";

					voilationlist.push(myimpliedwarrantyboxcheckedearrayStringviolation);
				}
				if (myfactorywarrantyboxcheckedarrayString !== '') {
					var myfactorywarrantyboxcheckedarrayStringviolation = "Whenever a used vehicle is sold with an unexpired factory warranty, the Implied Warranties box must be checked on the Buyers Guide.  ";

					voilationlist.push(myfactorywarrantyboxcheckedarrayStringviolation);
				}
				if (mytypeofbuyerguideasisversionarrayString !== '') {
					var mytypeofbuyerguideasisversionarrayStringviolation = "Any time a used vehicle is sold with an unexpired factory warranty, the “Manufacturer’s Warranty Still Applies” box should be checked on the Buyers Guide.  ";

					voilationlist.push(mytypeofbuyerguideasisversionarrayStringviolation);
				}
				if (myimpliedwarrantyboxcheckedarrayString !== '') {
					var myimpliedwarrantyboxcheckedarrayStringviolation = "Whenever a factory CPO vehicle is sold, the used vehicle must display an Implied Warranties version of the Buyers Guide.";

					voilationlist.push(myimpliedwarrantyboxcheckedarrayStringviolation);
				}
				if (mymfgusedwarrantyboxcheckedarrayString !== '') {
					var mymfgusedwarrantyboxcheckedarrayStringviolation = "Whenever a CPO vehicle is sold, the Implied Warranties box must be checked on the Buyers Guide. ";

					voilationlist.push(mymfgusedwarrantyboxcheckedarrayStringviolation);
				}
				if (myfactorycpowarrantyasisversionarrayString !== '') {
					var myfactorycpowarrantyasisversionarrayStringviolation = "Whenever a CPO vehicle is sold with an unexpired factory warranty, the “Manufacturer’s Used Vehicle Warranty Applies” box should be checked on the Buyers Guide.";

					voilationlist.push(myfactorycpowarrantyasisversionarrayStringviolation);
				}
				if (myadvertisingvehiclesoldoverarrayString !== '') {
					var myadvertisingvehiclesoldoverarrayStringviolation = "The dealership must ensure that all sales staff are aware of advertised prices and that vehicles are sold at the price/terms advertised. ";

					voilationlist.push(myadvertisingvehiclesoldoverarrayStringviolation);
				}
				if (myhour48voilationarrayString !== '') {
					var myhour48voilationarrayStringviolation = "The dealership must comply with the Vehicle Code's \"48 Hour Rule\" by withdrawing vehicles from an advertisement once the vehicle is sold. ";

					voilationlist.push(myhour48voilationarrayStringviolation);
				}
				if (myvehiclehistoryproperlynotdisclosedpriorrentalarrayString !== '') {
					var myvehiclehistoryproperlynotdisclosedpriorrentalarrayStringviolation = "The dealership must comply with the Vehicle Code and Code of Regulation requirements relating to rental vehicle history disclosure in advertisements.  ";

					voilationlist.push(myvehiclehistoryproperlynotdisclosedpriorrentalarrayStringviolation);
				}
				if (myvehiclehistoryproperlynotdisclosedserviceloanerarrayString !== '') {
					var myvehiclehistoryproperlynotdisclosedserviceloanerarrayStringviolation = "The dealership must comply with the Vehicle Code and Code of Regulation requirements relating to dealer loaner history disclosure in advertisements.  ";

					voilationlist.push(myvehiclehistoryproperlynotdisclosedserviceloanerarrayStringviolation);
				}
				if (myvehiclehistoryproperlynotdiscloseddemonstratorarrayString !== '') {
					var myvehiclehistoryproperlynotdiscloseddemonstratorarrayStringviolation = "The dealership must comply with the Vehicle Code and Code of Regulation requirements relating to demonstrator vehicle history disclosure in advertisements.  ";

					voilationlist.push(myvehiclehistoryproperlynotdiscloseddemonstratorarrayStringviolation);
				}
				if (myvehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearrayString !== '') {
					var myvehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearrayStringviolation = "The dealership must comply with the Vehicle Code and Code of Regulation requirements relating to factory executive vehicle history disclosure in advertisements. ";

					voilationlist.push(myvehiclehistoryproperlynotdisclosedfactoryexecutivevehiclearrayStringviolation);
				}
				// // if (mytranslatedcontractorleasearrayString !== '') {
				// // 	var pObj = docx.createByJson(para166);
				// // 	var out = fs.createWriteStream(docname + '.docx');
				// // 	out.on('error', function (err) {
				// // 		console.log(err);
				// // 	});
				// // }	
				if (noproofoftranslationarrayString !== '') {
					var noproofoftranslationarrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a copy of the translated contract to the consumer and copy of the same must be retained in the deal jacket as proof of compliance.  ";

					voilationlist.push(noproofoftranslationarrayStringviolation);
				}
				if (signatureonalllinesoftranslationarrayString !== '') {
					var signatureonalllinesoftranslationarrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership should only obtain the customer's signature on the English version of the contract and utilize a Translated Contract Acknowledgement form as proof that the customer received a translated copy.  ";

					voilationlist.push(signatureonalllinesoftranslationarrayStringviolation);
				}
				if (myothertranslateddocumentsarrayString !== '') {
					var myothertranslateddocumentsarrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a translated copy of the Buyers Guide. ";

					voilationlist.push(myothertranslateddocumentsarrayStringviolation);
				}

				if (mycontractcancellationarrayString !== '') {
					var mycontractcancellationarrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a translated copy of the Contract Cancellation Option Agreement.  ";

					voilationlist.push(mycontractcancellationarrayStringviolation);
				}
				if (myprecontractdisclosurearrayString !== '') {
					var myprecontractdisclosurearrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a translated copy of the Pre-Contract Disclosure Form.   ";

					voilationlist.push(myprecontractdisclosurearrayStringviolation);
				}
				if (myothertranslateddocumentsgaparrayString !== '') {
					var myothertranslateddocumentsgaparrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a translated copy of the Debt Cancellation Agreement. ";

					voilationlist.push(myothertranslateddocumentsgaparrayStringviolation);
				}
				if (myackofcanceledcontractarrayString !== '') {
					var myackofcanceledcontractarrayStringviolation = "Whenever a transaction is negotiated in one of the five protected languages (Spanish, Korean, Chinese, Tagalog or Vietnamese), the dealership must provide a translated copy of the Acknowledgement of Cancelled Contract Form.  ";

					voilationlist.push(myackofcanceledcontractarrayStringviolation);
				}
				if (mycontractcancellationoptionagreementmissingarrayString !== '') {
					var mycontractcancellationoptionagreementmissingarrayStringviolation = "A Contract Cancellation Option Agreement must be offered to all purchasers of used vehicles (including demonstrators) under $40,000 and evidence of this Agreement must be maintained in the sales jacket.";

					voilationlist.push(mycontractcancellationoptionagreementmissingarrayStringviolation);
				}
				if (mycontractcancellationoptionagreementpresentarrayString !== '') {
					var mycontractcancellationoptionagreementpresentarrayStringviolation = "The dealership must ensure that a properly completed Contract Cancellation Option Agreement is offered to all purchasers of used vehicles (including demonstrators) under $40,000.";

					voilationlist.push(mycontractcancellationoptionagreementpresentarrayStringviolation);
				}
				if (mycancellationchargecorrectarrayString !== '') {
					var mycancellationchargecorrectarrayStringviolation = "The dealership must ensure that the cancellation option purchase price is accurate in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000. ";

					voilationlist.push(mycancellationchargecorrectarrayStringviolation);
				}
				if (myrestockingfeecorrectarrayString !== '') {
					var myrestockingfeecorrectarrayStringviolation = "The dealership must ensure that the restocking fee is accurate in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000.  ";

					voilationlist.push(myrestockingfeecorrectarrayStringviolation);
				}
				if (mydeadlinedatecorrectarrayString !== '') {
					var mydeadlinedatecorrectarrayStringviolation = "The dealership must ensure that the deadline date is accurate in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000.   ";

					voilationlist.push(mydeadlinedatecorrectarrayStringviolation);
				}
				if (mydeadlinetimecorrectarrayString !== '') {
					var mydeadlinetimecorrectarrayStringviolation = "The dealership must ensure that the deadline time is accurate in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000.  ";

					voilationlist.push(mydeadlinetimecorrectarrayStringviolation);
				}
				if (mymileslessthan250arrayString !== '') {
					var mymileslessthan250arrayStringviolation = "The dealership must ensure that the mileage limitations are accurate in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000. ";

					voilationlist.push(mymileslessthan250arrayStringviolation);
				}
				if (mymilesaddedtoodometerreadingarrayString !== '') {
					var mymilesaddedtoodometerreadingarrayStringviolation = "The dealership must ensure that the mileage limitations are accurately stated in every Contract Cancellation Option Agreement that is offered to all purchasers of used vehicles (including demonstrators) under $40,000.  ";

					voilationlist.push(mymilesaddedtoodometerreadingarrayStringviolation);
				}
				if (myhandwritteninformationarrayString !== '') {
					var myhandwritteninformationarrayStringviolation = "The dealership must avoid the practice of handwriting information on the Contract Cancellation Option Agreement. ";

					voilationlist.push(myhandwritteninformationarrayStringviolation);
				}
				if (mycontractcancellationoptionagreementsignedarrayString !== '') {
					var mycontractcancellationoptionagreementsignedarrayStringviolation = "The dealership must ensure that the customer's signature is obtained on the Contract Cancellation Option Agreement in used vehicles sold for less than $40,000.";

					voilationlist.push(mycontractcancellationoptionagreementsignedarrayStringviolation);
				}
				if (mycontractcancellationwrittenarrayString !== '') {
					var mycontractcancellationwrittenarrayStringviolation = "Any time a contract is cancelled and rewritten, the dealership must ensure that a second, or fresh, Contract Cancellation Option Agreement is provided for the second transaction as well. ";

					voilationlist.push(mycontractcancellationwrittenarrayStringviolation);
				}
				if (myprecontractdisclosuremissingarrayString !== '') {
					var myprecontractdisclosuremissingarrayStringviolation = "A Pre-Contract Disclosure must be offered to all purchasers anytime a dealer enters into a Retail Installment Sales Contract.";

					voilationlist.push(myprecontractdisclosuremissingarrayStringviolation);
				}
				if (myprecontractdisclosurepresentarrayString !== '') {
					var myprecontractdisclosurepresentarrayStringviolation = "A fully completed Pre-Contract Disclosure must be offered to all purchasers anytime a dealer enters into a Retail Installment Sales Contract. ";

					voilationlist.push(myprecontractdisclosurepresentarrayStringviolation);
				}
				if (myprecontractdisclosurepresentpricescorrectarrayString !== '') {
					var myprecontractdisclosurepresentpricescorrectarrayStringviolation = "The product/services pricing listed on the Pre-Contract Disclosure must correspond exactly to the figures stated on the Retail Installment Sales Contract.  ";

					voilationlist.push(myprecontractdisclosurepresentpricescorrectarrayStringviolation);
				}
				if (myprecontractdisclosurepresentpaymentcorrectarrayString !== '') {
					var myprecontractdisclosurepresentpaymentcorrectarrayStringviolation = "The monthly payments stated on the Pre-Contract Disclosure must correspond exactly to the monthly payment stated on the Retail Installment Sales Contract.";

					voilationlist.push(myprecontractdisclosurepresentpaymentcorrectarrayStringviolation);
				}
				if (myprecontractdisclosurepresentproductlistcorrectarrayString !== '') {
					var myprecontractdisclosurepresentproductlistcorrectarrayStringviolation = "An accurate listing of any aftermarket products purchased and the cost for the same must be accurately reflected on the Pre-Contract Disclosure form. ";

					voilationlist.push(myprecontractdisclosurepresentproductlistcorrectarrayStringviolation);
				}
				if (myhandwrittenentriesintiatedarrayString !== '') {
					var myhandwrittenentriesintiatedarrayStringviolation = "The dealership must strive to only use typewritten entries on the Pre-Contract Disclosure form and avoid making any handwritten notations on the same.  ";

					voilationlist.push(myhandwrittenentriesintiatedarrayStringviolation);
				}
				if (signedbuyerString !== '') {
					var signedbuyerStringviolation = "The dealership must ensure that customer signatures are obtained on the Pre-Contract Disclosure form.  ";

					voilationlist.push(signedbuyerStringviolation);
				}
				if (mysignedcobuyerarrayString !== '') {
					var mysignedcobuyerarrayStringviolation = "The dealership must ensure that customer signatures are obtained on the Pre-Contract Disclosure form.  ";

					voilationlist.push(mysignedcobuyerarrayStringviolation);
				}
				if (myprecontractdisclosurerewrittenarrayString !== '') {
					var myprecontractdisclosurerewrittenarrayStringviolation = "Any time a contract is cancelled and rewritten, the dealership must ensure that a second, or fresh, Pre-Contract Disclosure form is provided for the second transaction as well. ";

					voilationlist.push(myprecontractdisclosurerewrittenarrayStringviolation);
				}
				if (mycreditscoredisclosuremissingarrayString !== '') {
					var mycreditscoredisclosuremissingarrayStringviolation = "The dealership must ensure that a Credit Score Disclosure/Risk Based Pricing form is retained in all sales jackets where the dealership receives the consumer's credit score. ";

					voilationlist.push(mycreditscoredisclosuremissingarrayStringviolation);
				}
				if (mycustomerinfocompletedarrayString !== '') {
					var mycustomerinfocompletedarrayStringviolation = "The dealership must ensure that the customer information is completed on the Credit Score Disclosure/Risk Based Pricing form.  ";

					voilationlist.push(mycustomerinfocompletedarrayStringviolation);
				}
				if (mycreditscorepresentarrayString !== '') {
					var mycreditscorepresentarrayStringviolation = "The dealership must ensure that the credit score is completed on the Credit Score Disclosure/Risk Based Pricing form.  ";

					voilationlist.push(mycreditscorepresentarrayStringviolation);
				}
				if (mycredirrangespresentarrayString !== '') {
					var mycredirrangespresentarrayStringviolation = "The dealership must ensure that the Credit Score Disclosure/Risk Based Pricing form states the credit range.  ";

					voilationlist.push(mycredirrangespresentarrayStringviolation);
				}
				if (myhandwrittenentriesintialedarrayString !== '') {
					var myhandwrittenentriesintialedarrayStringviolation = "The dealership must strive to only use typewritten entries on the Credit Score Disclosure form and avoid making any handwritten notations on the same.  ";

					voilationlist.push(myhandwrittenentriesintialedarrayStringviolation);
				}
				if (mycreditscoredisclosuresignedarrayString !== '') {                // 198
					var mycreditscoredisclosuresignedarrayStringviolation = "The dealership must ensure that customer signatures are obtained on the Credit Score Disclosure form. ";

					voilationlist.push(mycreditscoredisclosuresignedarrayStringviolation);
				}
				if (mynmvtis_presentarrayString !== '') {							  //  199
					var mynmvtis_presentarrayStringviolation = "The dealership must ensure that NMVTIS reports are retained in the sales jacket for every used vehicle to establish proof of compliance with NMVTIS requirements. ";

					voilationlist.push(mynmvtis_presentarrayStringviolation);
				}
				if (myprior_to_placement_in_inventoryarrayString !== '') {            //  200
					var myprior_to_placement_in_inventoryarrayStringviolation = "The dealership must ensure that NMVTIS reports are run for every used vehicle prior to offering the vehicle for retail sale to the public. ";

					voilationlist.push(myprior_to_placement_in_inventoryarrayStringviolation);
				}
				if (myfederal_privacy_policy_presentarrayString !== '') {            //  201
					var myfederal_privacy_policy_presentarrayStringviolation = "The dealership must ensure that Privacy Notices are retained in each sales jacket where a purchases or a leases a vehicle on credit as proof of compliance with the Gramm Leach Bliley Act. ";

					voilationlist.push(myfederal_privacy_policy_presentarrayStringviolation);
				}
				if (myalso_at_date_of_sale_arrayString !== '') {            //  202
					var myalso_at_date_of_sale_arrayStringviolation = "We strongly encourage dealers to run used vehicle history reports when the vehicle is first taken into inventory and again, when the vehicle is sold to a retail consumer to ensure the most current information is provided to the purchaser. ";

					voilationlist.push(myalso_at_date_of_sale_arrayStringviolation);
				}
				if (mycar_fax_signed_arrayString !== '') {            //  203
					var mycar_fax_signed_arrayStringviolation = "We strongly encourage dealers to obtain the consumer's signature on a current used vehicle history report in all used vehicle transactions.";

					voilationlist.push(mycar_fax_signed_arrayStringviolation);
				}
				if (myreport_present_arrayString !== '') {            //  204
					var myreport_present_arrayStringviolation = "The dealership must retained a certified used vehicle inspection report, signed by the consumer, in every CPO transaction. ";

					voilationlist.push(myreport_present_arrayStringviolation);
				}
				if (myreport_completed_arrayString !== '') {            //  205
					var myreport_completed_arrayStringviolation = "The dealership must ensure a completed CPO inspection report is issued to all purchasers of a CPO vehicle. ";

					voilationlist.push(myreport_completed_arrayStringviolation);
				}
				if (mysigned_by_customer_arrayString !== '') {            //  206
					var mysigned_by_customer_arrayStringviolation = "The dealership must ensure a completed CPO inspection report is signed by all purchasers of a CPO vehicle to provide proof of compliance with CPO notice requirements.";

					voilationlist.push(mysigned_by_customer_arrayStringviolation);
				}
				if (mytire_chain_disclosures_located_arrayString !== '') {            //  207
					var mytire_chain_disclosures_located_arrayStringviolation = "Please ensure that Tire Chain Disclosures are provided to all new vehicle purchasers in those instances where the new vehicle cannot accommodate tire chains.";

					voilationlist.push(mytire_chain_disclosures_located_arrayStringviolation);
				}
				if (myodo_262_present_arrayString !== '') {            //  208
					var myodo_262_present_arrayStringviolation = "Please ensure that odometer statements are completed by the dealership in all transactions.";

					voilationlist.push(myodo_262_present_arrayStringviolation);
				}
				if (mylanguage_ack__form_in_all_jackets_arrayString !== '') {            //  209
					var mylanguage_ack__form_in_all_jackets_arrayStringviolation = "We recommend that the dealership adopt the practice of using the Translated Contract Acknowledgement Form in all transactions.";

					voilationlist.push(mylanguage_ack__form_in_all_jackets_arrayStringviolation);
				}
				if (myrecission_letter_sent_with_no_reWritten_contract_arrayString !== '') {            //  210
					var myrecission_letter_sent_with_no_reWritten_contract_arrayStringviolation = "When a notice of rescission/cancellation is sent to a consumer, the contract is cancelled requiring the dealer to enter into a second contract if financing is ultimately obtained by the dealer and the consumer desires to purchase the vehicle. ";

					voilationlist.push(myrecission_letter_sent_with_no_reWritten_contract_arrayStringviolation);
				}
				if (myused_vehicle_history_disclosure_document_in_service_date_disclosed_arrayString !== '') {            //  211
					var myused_vehicle_history_disclosure_document_in_service_date_disclosed_arrayStringviolation = "In the sale of an unregistered demonstrator or unregistered factory executive vehicle, the dealership must ensure that the in service date, triggering the commencement of the warranty, is disclosed to the consumer. ";

					voilationlist.push(myused_vehicle_history_disclosure_document_in_service_date_disclosed_arrayStringviolation);
				}
				if (myused_vehicle_history_disclosure_document_history_initialed_arrayString !== '') {            //  212
					var myused_vehicle_history_disclosure_document_history_initialed_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the proper history.  ";

					voilationlist.push(myused_vehicle_history_disclosure_document_history_initialed_arrayStringviolation);
				}
				if (myused_vehicle_history_disclosure_document_disclosure_signed_arrayString !== '') {            //  213
					var myused_vehicle_history_disclosure_document_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on any disclosure document disclosing a vehicle's prior use as a demonstrator/factory executive vehicle.  ";

					voilationlist.push(myused_vehicle_history_disclosure_document_disclosure_signed_arrayStringviolation);
				}
				if (mystatement_of_facts_in_service_date_disclosed_arrayString !== '') {            //  214
					var mystatement_of_facts_in_service_date_disclosed_arrayStringviolation = "In the sale of an unregistered demonstrator or unregistered factory executive vehicle, the dealership must ensure that the in service date, triggering the commencement of the warranty, is disclosed to the consumer.";

					voilationlist.push(mystatement_of_facts_in_service_date_disclosed_arrayStringviolation);
				}
				if (mystatement_of_facts_disclosure_signed_arrayString !== '') {            //  215
					var mystatement_of_facts_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the Used Vehicle History Disclosure form when selling a prior demonstrator/factory executive vehicle.";

					voilationlist.push(mystatement_of_facts_disclosure_signed_arrayStringviolation);
				}
				if (myin_house_form_in_service_date_disclosed_arrayString !== '') {            //  216
					var myin_house_form_in_service_date_disclosed_arrayStringviolation = "In the sale of an unregistered demonstrator or unregistered factory executive vehicle, the dealership must ensure that the in service date, triggering the commencement of the warranty, is disclosed to the consumer.";

					voilationlist.push(myin_house_form_in_service_date_disclosed_arrayStringviolation);
				}
				if (myin_house_form_disclosure_signed_arrayString !== '') {            //  217
					var myin_house_form_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior demonstrator/factory executive vehicle. ";

					voilationlist.push(myin_house_form_disclosure_signed_arrayStringviolation);
				}
				if (myunregistered_dealer_demonstrator_no_disclosure_arrayString !== '') {            //  218
					var myunregistered_dealer_demonstrator_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a prior demonstrator or factory executive vehicle. ";

					voilationlist.push(myunregistered_dealer_demonstrator_no_disclosure_arrayStringviolation);
				}
				if (mydealer_service_vehicle_history_initiated_arrayString !== '') {            //  219
					var mydealer_service_vehicle_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the service vehicle history.  ";

					voilationlist.push(mydealer_service_vehicle_history_initiated_arrayStringviolation);
				}
				if (mydealer_service_vehicle_disclosure_signed_arrayString !== '') {            //  220
					var mydealer_service_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior dealer service vehicle. ";

					voilationlist.push(mydealer_service_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_service_vehicle_no_disclosure_arrayString !== '') {            //  221
					var mydealer_service_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a prior dealer service vehicle.  ";

					voilationlist.push(mydealer_service_vehicle_no_disclosure_arrayStringviolation);
				}
				if (myvehicle_history_document_history_initiated_arrayString !== '') {            //  222
					var myvehicle_history_document_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the dealer loaner vehicle history. ";

					voilationlist.push(myvehicle_history_document_history_initiated_arrayStringviolation);
				}
				if (myvehicle_history_document_disclosure_signed_arrayString !== '') {            //  223
					var myvehicle_history_document_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior dealer loaner vehicle.  ";

					voilationlist.push(myvehicle_history_document_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_loaner_vehicle_disclosure_signed_arrayString !== '') {            //  224
					var mydealer_loaner_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on any disclosure document disclosing a vehicle's prior use as a dealer loaner vehicle.  ";

					voilationlist.push(mydealer_loaner_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_loaner_vehicle_in_house_form_disclosure_signed_arrayString !== '') {            //  225
					var mydealer_loaner_vehicle_in_house_form_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on any disclosure document disclosing a vehicle's prior use as a dealer loaner vehicle. ";

					voilationlist.push(mydealer_loaner_vehicle_in_house_form_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_loaner_vehicle_no_disclosure_arrayString !== '') {            //  226
					var mydealer_loaner_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a prior dealer loaner vehicle. ";

					voilationlist.push(mydealer_loaner_vehicle_no_disclosure_arrayStringviolation);
				}
				if (mydealer_lease_vehicle_history_initiated_arrayString !== '') {            //  227
					var mydealer_lease_vehicle_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the dealer lease vehicle history.  ";

					voilationlist.push(mydealer_lease_vehicle_history_initiated_arrayStringviolation);
				}
				if (mydealer_lease_vehicle_disclosure_signed_arrayString !== '') {            //  228
					var mydealer_lease_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior dealer lease vehicle. ";

					voilationlist.push(mydealer_lease_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_lease_vehicle_no_disclosure_arrayString !== '') {            //  229
					var mydealer_lease_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a prior dealer lease vehicle. ";

					voilationlist.push(mydealer_lease_vehicle_no_disclosure_arrayStringviolation);
				}
				if (mydealer_rental_history_initiated_arrayString !== '') {            //  230
					var mydealer_rental_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the rental vehicle history.  ";

					voilationlist.push(mydealer_rental_history_initiated_arrayStringviolation);
				}
				if (mydealer_rental_disclosure_signed_arrayString !== '') {            //  231
					var mydealer_rental_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a former rental vehicle.  ";

					voilationlist.push(mydealer_rental_disclosure_signed_arrayStringviolation);
				}
				if (mydealer_rental_statement_of_facts_arrayString !== '') {            //  232
					var mydealer_rental_statement_of_facts_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior rental vehicle.  ";

					voilationlist.push(mydealer_rental_statement_of_facts_arrayStringviolation);
				}
				if (mydealer_rental_in_house_form_arrayString !== '') {            //  233
					var mydealer_rental_in_house_form_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior rental vehicle.";

					voilationlist.push(mydealer_rental_in_house_form_arrayStringviolation);
				}
				if (mydealer_rental_no_disclosure_arrayString !== '') {            //  234
					var mydealer_rental_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a prior rental vehicle.";

					voilationlist.push(mydealer_rental_no_disclosure_arrayStringviolation);
				}
				if (mypublicly_owned_vehicle_history_initiated_arrayString !== '') {            //  235
					var mypublicly_owned_vehicle_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the publicly owned used vehicle history. ";

					voilationlist.push(mypublicly_owned_vehicle_history_initiated_arrayStringviolation);
				}
				if (mypublicly_owned_vehicle_disclosure_signed_arrayString !== '') {            //  236
					var mypublicly_owned_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a formerly publicly owned vehicle.";

					voilationlist.push(mypublicly_owned_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mypublicly_owned_vehicle_no_disclosure_arrayString !== '') {            //  237
					var mypublicly_owned_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a former publicly owned vehicle. ";

					voilationlist.push(mypublicly_owned_vehicle_no_disclosure_arrayStringviolation);
				}
				if (mytaxicab_history_initiated_arrayString !== '') {            //  238
					var mytaxicab_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the taxicab vehicle history.  ";

					voilationlist.push(mytaxicab_history_initiated_arrayStringviolation);
				}
				if (mytaxicab_disclosure_signed_arrayString !== '') {            //  239
					var mytaxicab_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a prior taxicab vehicle.";

					voilationlist.push(mytaxicab_disclosure_signed_arrayStringviolation);
				}
				if (mytaxicab_no_disclosure_arrayString !== '') {            //  240
					var mytaxicab_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a former taxicab vehicle. ";

					voilationlist.push(mytaxicab_no_disclosure_arrayStringviolation);
				}
				if (mytransportation_network_history_initiated_arrayString !== '') {            //  241
					var mytransportation_network_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the transportation network vehicle history.";

					voilationlist.push(mytransportation_network_history_initiated_arrayStringviolation);
				}
				if (mytransportation_network_disclosure_signed_arrayString !== '') {            //  242
					var mytransportation_network_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a former transportation network vehicle. ";

					voilationlist.push(mytransportation_network_disclosure_signed_arrayStringviolation);
				}
				if (mytransportation_network_no_disclosure_arrayString !== '') {            //  243
					var mytransportation_network_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a former transportation network vehicle.";

					voilationlist.push(mytransportation_network_no_disclosure_arrayStringviolation);
				}
				if (mysalvage_vehicle_history_initiated_arrayString !== '') {            //  244
					var mysalvage_vehicle_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to salvage vehicle history. ";

					voilationlist.push(mysalvage_vehicle_history_initiated_arrayStringviolation);
				}
				if (mysalvage_vehicle_disclosure_signed_arrayString !== '') {            //  245
					var mysalvage_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a former salvage vehicle. ";

					voilationlist.push(mysalvage_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mysalvage_vehicle_no_disclosure_arrayString !== '') {            //  246
					var mysalvage_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it utilizes some form of used vehicle history disclosure form when selling a former salvage vehicle.";

					voilationlist.push(mysalvage_vehicle_no_disclosure_arrayStringviolation);
				}
				if (mylemon_law_buyback_history_initiated_arrayString !== '') {            //  247
					var mylemon_law_buyback_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the lemon law vehicle history. ";

					voilationlist.push(mylemon_law_buyback_history_initiated_arrayStringviolation);
				}
				if (mylemon_law_buyback_disclosure_signed_arrayString !== '') {            //  248
					var mylemon_law_buyback_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a lemon law vehicle.";

					voilationlist.push(mylemon_law_buyback_disclosure_signed_arrayStringviolation);
				}
				if (mylemon_law_buyback_no_disclosure_arrayString !== '') {            //  249
					var mylemon_law_buyback_no_disclosure_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on a proper disclosure document form when selling a former lemon law vehicle. ";

					voilationlist.push(mylemon_law_buyback_no_disclosure_arrayStringviolation);
				}
				if (mystolen_vehicle_history_initiated_arrayString !== '') {            //  250
					var mystolen_vehicle_history_initiated_arrayStringviolation = "The dealership must avoid inserting a check mark or \"X\" next to a vehicle history but rather, institute a practice of obtaining the customer's initials next to the stolen vehicle history. ";

					voilationlist.push(mystolen_vehicle_history_initiated_arrayStringviolation);
				}
				if (mystolen_vehicle_disclosure_signed_arrayString !== '') {            //  251
					var mystolen_vehicle_disclosure_signed_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on the disclosure document form when selling a former stolen vehicle.";

					voilationlist.push(mystolen_vehicle_disclosure_signed_arrayStringviolation);
				}
				if (mystolen_vehicle_no_disclosure_arrayString !== '') {            //  252
					var mystolen_vehicle_no_disclosure_arrayStringviolation = "The dealership must ensure that it obtains the customer's signature on a proper disclosure document form when selling a former stolen vehicle.";

					voilationlist.push(mystolen_vehicle_no_disclosure_arrayStringviolation);
				}
				if (myform_of_disclosure_car_fax_only_arrayString !== '') {            //  253
					var myform_of_disclosure_car_fax_only_arrayStringviolation = "The dealership must utilize a separate damage disclosure form when the dealership has direct or indirect knowledge (i.e., Car Fax or Auto Check) of a prior accident or damage sustained by a vehicle.";

					voilationlist.push(myform_of_disclosure_car_fax_only_arrayStringviolation);
				}
				if (myform_of_disclosure_no_disclosure_arrayString !== '') {            //  254
					var myform_of_disclosure_no_disclosure_arrayStringviolation = "The dealership must utilize a separate damage/prior accident disclosure form when the dealership has direct or indirect knowledge (i.e., Car Fax or Auto Check) of a prior accident or damage sustained by a vehicle.";

					voilationlist.push(myform_of_disclosure_no_disclosure_arrayStringviolation);
				}
				if (mysigned_four_square_pencil_desk_sheet_arrayString !== '') {            //  255
					var mysigned_four_square_pencil_desk_sheet_arrayStringviolation = "The dealership must discontinue the practice of obtaining the customer's signature or initials on worksheets to avoid challenges under the Civil Code's Single Document Rule.";

					voilationlist.push(mysigned_four_square_pencil_desk_sheet_arrayStringviolation);
				}
				if (myheat_sheet_arrayString !== '') {            //  256
					var myheat_sheet_arrayStringviolation = "The dealership must discontinue the practice of using Heat Sheets to avoid challenges under the Civil Code's Single Document Rule.";

					voilationlist.push(myheat_sheet_arrayStringviolation);
				}
				if (mydue_bill_30_Day_language_arrayString !== '') {            //  257
					var mydue_bill_30_Day_language_arrayStringviolation = "The dealership must discontinue the practice of using Due Bills with penalty or forfeiture language to avoid challenges under the Civil Code's Single Document Rule.";

					voilationlist.push(mydue_bill_30_Day_language_arrayStringviolation);
				}
				if (mypromissory_note_arrayString !== '') {            //  258
					var mypromissory_note_arrayStringviolation = "The dealership must discontinue the practice of using Promissory Notes or other terms of indebtedness as such documents violate the Civil Code's Single Document Rule.";

					voilationlist.push(mypromissory_note_arrayStringviolation);
				}
				if (myhold_check_agreement_arrayString !== '') {            //  259
					var myhold_check_agreement_arrayStringviolation = "The dealership must discontinue to the practice of using Hold Check Agreements as such documents violate the Civil Code's Single Document Rule.";

					voilationlist.push(myhold_check_agreement_arrayStringviolation);
				}
				if (mytrade_in_pay_off_adjustment_agreement_arrayString !== '') {            //  260
					var mytrade_in_pay_off_adjustment_agreement_arrayStringviolation = "The dealership must discontinue to the practice of using a Trade In Payoff Adjustment form as such documents violate the Civil Code's Single Document Rule.";

					voilationlist.push(mytrade_in_pay_off_adjustment_agreement_arrayStringviolation);
				}
				else {
					console.log("nothing to generate");
				}


		console.log(voilationlists);

        this.setState({ list_of_audits: gg, violations: voilationlists });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }

  render() {
    let dealername = null;
    let auditorname = null;
    let auditorname1 = null;
    let dealerid = null;
    let auditdate = null;
    var date = null;
    {
      this.state.list_of_audits.map(
        (row, index) => (
          (dealername = row.dealer_info.dealer_name),
          (auditorname = row.audit_info.auditor_id),
          (dealerid = row.dealer_id),
          (auditdate = row.audit_info.audit_date)
        )
      );
    }
    {
      this.state.list_of_audits.map((item, index) => {
        let id = this.state.audit_id;
        let id1 = item.audit_info.auditor_id;

        if (this.state.audit_id == item.audit_info.auditor_id) {
          auditdate = item.audit_info.audit_date;
          console.log("date1", this.state.audit_id);
          console.log("date2", item.audit_info.auditor_id);
        }
      });
    }
    //  console.log("date",this.state.audit_id);
    // auditdate = new Date(auditdate).toLocaleDateString();

    return (
      <div className="container-fiuld">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <br /> <br /> <br />
            <h3>{this.state.audit_id}</h3>
          </div>
          <div className="col-sm-2" />
        </div>
        <br /> <br /> <br />
        <div className=" container-fiuld ">
          <div className="row">
            <div className="col-sm-2" />
            <Card>
              <div className="col-sm-7 ">
                <h4>
                  Dealer Name : {dealername}
                </h4>
                <h4>
                  {" "}Auditor Name :{auditorname}
                </h4>
              </div>
              <div className="col-sm-2">
                <h4>
                  Audit date : {new Date(this.state.audit_Date).toLocaleDateString()}
                </h4>
                <Badge badgeContent={this.state.violations.length} primary={true} badgeStyle={{ backgroundColor: "#4B7FB7" }}>
                  <RaisedButton
                    label={"Violations    "}
                    primary={true}
                    disabled={true}
                    disabledBackgroundColor="#4B7FB7"
                    disabledLabelColor=" white"
                  />
                </Badge>
              </div>
            </Card>
            <div className="col-sm-1" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="panel panel-primary  ">
              <div className="panel-heading">List of Violations</div>
              <div className="panel-body list-group-item ">
                <ReactScrollbar>
                  <ol>
                    <ListRender
                      violations={this.state.violations.map((row,index) =><div key={index}> {row.key} -- {row.value}</div> )}
                      code={this.state.ecode}
                      change={this.change}
                      extract={this.state.extract}
                      audit_id={this.state.audit_id}
                    />
					{this.state.list_of_audits.map((row, index) => row.audit_worksheets.map((raw,indix) => <div key={indix}>worksheet id :  -- {raw.worksheet_id}</div> ) 
                    )} 
                  </ol>
                </ReactScrollbar>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2" />
      </div>
    );
  }
}
class ListRender extends React.Component {
  render() {
    const myScrollbar = {
      width: "auto",
      height: 530
    };

    return (
      <div>
        <div className="container-fluid ">
          <br />

          {this.props.violations.map((item, index) => {
            var code = item.code;
            let button1 = null;

            if (code) {
              button1 = (
                <div>
                  <RaisedButton
                    label={item.code}
                    primary={true}
                    disabled={true}
                    disabledBackgroundColor="#4B7FB7"
                    disabledLabelColor=" white"
                  />
                </div>
              );
            } else {
              button1 = null;
            }
            let extractText = null;
            let extract = this.props.extract;
            let code1 = this.props.code;

            if (extract && code1 == item.code) {
              extractText = (
                <div className="container-fluid " key={index}>
                  <div className="row ">
                    <div
                      style={{ backgroundColor: "#F3EAC1", height: "100px" }}
                    >
                      <br /> <br />
                      <div className="col-sm-2  " />
                      Civil Code: {item.code}
                      <br />
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div className="container-fluid " key={index}>
                <div className="row ">
                  <div>
                    {" "}<div className="col-sm-10">
                      <li>
                        <h5>
                          {item}
                        </h5>
                      </li>
                    </div>
                    <div
                      className="col-sm-1 "
                      onClick={() => this.props.change(item.code)}
                    >
                      {" "}{button1}{" "}
                    </div>
                    <div className="col-sm-1" />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div>
                    {extractText}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
