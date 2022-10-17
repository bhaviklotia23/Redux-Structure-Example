export const endpoints = {
  // Authentication
  AUTH_REGISTER: "/api/Authentication/Register",
  AUTH_LOGIN: "/api/Authentication/Login",
  AUTH_CONFIRM_EMAIL: "/api/Authentication/ConfirmEmail",
  GET_ROLE_USER: "/api/Authentication/GetRolesByUser?email=:email",
  GET_USER_PROFILE: "/api/Authentication/GetUserByEmailId?email=:email",
  SET_ROLE_USER: "/api/Authentication/RoleAssignment",
  FORGOT_PASSWORD: "/api/Authentication/ForgotPassword",
  GET_INDIVIDUAL_DETAIL:
    "/api/IndividualPersonalDetails/GetIndividualPersonalDetailsByUserIdReturnRecord/:id",
  UPDATE_INDIVIDUAL_PERSONAL:
    "/api/IndividualPersonalDetails/UpdateIndividualPersonalDetailsReturnRecord",
  MARITIAL_STATUS_GET:
    "/api/MaritialStatusMaster/GetMaritialStatusMasterReturnList",
  PROFILE_UPDATE: "/api/Authentication/UpdateUserByEmailId",
  GET_COUNTRY: "/api/CountryMaster/GetCountryMasterReturnList",
  GET_STATE: "/api/StateMaster/GetStateMasterReturnList",
  //PayerID ,
  PAYER_ID_POST: "/api/PayerId/InsertPayerIdReturnRecordId",
  GET_PAYER_ID: "/api/PayerId/GetPayerIdByUserIdReturnRecord/:data",
  GET_BUSINESS_PERSONAL_DETAIL:
    "/api/BusinessBasicDetails/GetBusinessBasicDetailsByUserIdReturnRecord/:id",
  SET_BUSINESS_PERSONAL_DETAIL:
    "/api/BusinessBasicDetails/InsertBusinessBasicDetailsReturnRecordId",
  SET_BUSINESS_UPDATE_DETAIL:
    "/api/BusinessBasicDetails/UpdateBusinessBasicDetailsReturnRecord",
  INDIVIDUAL_PERSONAL_DETAIL:
    "/api/IndividualPersonalDetails/InsertIndividualPersonalDetailsReturnRecordId",
  //RaiseObjections
  RAISE_OBJECTIONS_POST:
    "/api/IndividualRaisedObjectionDetails/InsertIndividualRaisedObjectionDetailsReturnRecordId",
  GET_TAX_STATION_MASTER: "/api/TaxStationMaster/GetTaxStationMasterReturnList",
  //businesspremises
  BUSINESS_PREMISES_POST:
    "/api/BusinessPremisesChargesDetails/InsertBusinessPremisesChargesDetailsReturnRecordId",
  //deploymentLevy
  DEPLOYMENT_LEVY_POST:
    "/api/BusinessDevelopmentLevyChargesDetails/InsertBusinessDevelopmentLevyChargesDetailsReturnRecordId",

  // DAF Individual
  SET_INDIVIDUAL_PERSONAL:
    "/api/DirectAssessmentPersonalDetails/InsertDirectAssessmentPersonalDetailsReturnRecordId",
  INDIVIDUAL_SPOUSE_DETAIL:
    "/api/IndividualSpouseDetails/InsertIndividualSpouseDetailsReturnRecordId",
  GET_DIRECT_ASSESSMENT_DATA:
    "/api/DirectAssessmentPersonalDetails/GetDirectAssessmentPersonalDetailsReturnRecord/:id",
  UPDATE_DIRECT_ASSESSMENT_PERSONAL_DETAIL:
    "/api/DirectAssessmentPersonalDetails/UpdateDirectAssessmentPersonalDetailsReturnRecord",

  // Annual Return Filing
  MULTIPLE_COMPUTATIONAL_DETAILS:
    "/api/MultipleComputationDetails/InsertMultipleComputationDetailsReturnRecordId",

  // ETCC Individual

  ETCC_INDIVIDUAL_SPOUSE_DETAIL:
    "/api/IndividualSpouseDetails/InsertIndividualSpouseDetailsReturnRecordId",
  ETCC_SET_INDIVIDUAL_PERSONAL:
    "/api/DirectAssessmentPersonalDetails/InsertDirectAssessmentPersonalDetailsReturnRecordId",
  ETCC_GET_DIRECT_ASSESSMENT_DATA:
    "/api/DirectAssessmentPersonalDetails/GetDirectAssessmentPersonalDetailsReturnRecord/:id",
  ETCC_UPDATE_DIRECT_ASSESSMENT_PERSONAL_DETAIL:
    "/api/DirectAssessmentPersonalDetails/UpdateDirectAssessmentPersonalDetailsReturnRecord",

  // YEAR MASTER

  GET_YEAR_MASTER_LIST: "/api/YearMaster/GetYearMasterReturnList",
  INCOME_AND_CLAIMSBASIC_DETAILS:
    "/api/IncomeAndClaimsBasicDetails/InsertIncomeAndClaimsBasicDetailsReturnRecordId",
  GET_INDIVIDUAL_PROPERTY_OWNERSHIP_TYPE_MASTER:
    "/api/IndividualPropertyOwnershipTypeMaster/GetIndividualPropertyOwnershipTypeMasterReturnList",
  GET_INCOME_AND_CLAIMSBASIC_DETAILS:
    "/api/IncomeAndClaimsBasicDetails/GetIncomeAndClaimsBasicDetailsReturnRecord/:id",
  UPDATE_INCOME_AND_CLAIMSBASIC_DETAILS:
    "/api/IncomeAndClaimsBasicDetails/UpdateIncomeAndClaimsBasicDetailsReturnRecord",

  INDIVIDUAL_PROPERTY_OWNERSHIP_TYPEMASTER:
    "/api/IndividualPropertyOwnershipTypeMaster/GetIndividualPropertyOwnershipTypeMasterReturnList",
    DIRECT_ASSESSMENT_MANDATORY_DISCLOSURE_DETAILS : "/api/DirectAssessmentMandatoryDisclosureDetails/InsertDirectAssessmentMandatoryDisclosureDetailsReturnRecordId",
    DIRECT_ASSESSMENT_MANDATORY_DISCLOSURE_DETAILS_GET : "/api/DirectAssessmentMandatoryDisclosureDetails/GetDirectAssessmentMandatoryDisclosureDetailsReturnRecord/:id",
    DIRECT_ASSESSMENT_MANDATORY_DISCLOSURE_DETAILS_UPDATE : "/api/DirectAssessmentMandatoryDisclosureDetails/UpdateDirectAssessmentMandatoryDisclosureDetailsReturnRecord",

    DIRECT_ASSESSMENT_INDIVIDUAL_ALLOWANCES_DETAILS : "/api/IndividualAllowanceDetails/InsertIndividualAllowanceDetailsReturnRecordId",
    DIRECT_ASSESSMENT_INDIVIDUAL_ALLOWANCES_DETAILS_GET : "/api/IndividualAllowanceDetails/GetIndividualAllowanceDetailsReturnRecord/:id",
    DIRECT_ASSESSMENT_INDIVIDUAL_ALLOWANCES_DETAILS_UPDATE : "/api/IndividualAllowanceDetails/UpdateIndividualAllowanceDetailsReturnRecord",
  };
