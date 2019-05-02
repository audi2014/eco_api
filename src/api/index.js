import { Action } from "./core/Action";

import {
  setter_String,
  setter_AssistanceContainer,
  setter_BoolNumber,
  setter_McEncryptString,
  setter_StringRequireMeetingPointEnd,
  hoc_setter_require_equal_number
} from "./core/setter";

export const get_last_application_version = new Action(
  "get_last_application_version"
);
export const get_buildinglist = new Action("get_buildinglist");
export const get_assistancetypeslist = new Action("get_assistancetypeslist");
export const get_admin_email = new Action("get_admin_email");
export const get_admin_active_email_dialogs = new Action(
  "get_admin_active_email_dialogs"
);
export const get_user_list = new Action("get_user_list");
export const check_email_exist = new Action("check_email_exist", {
  email: { setter: setter_String }
});
export const admin_set_user_property = new Action("admin_set_user_property", {
  user_id: { setter: Number },
  user_fields: {
    id: { defaultValue: null },
    email: { defaultValue: null },
    pass: { defaultValue: null },
    token: { defaultValue: null },
    first_name: { defaultValue: null },
    last_name: { defaultValue: null },
    building_name: { defaultValue: null },
    address: { defaultValue: null },
    apt_num: { defaultValue: null },
    phone: { defaultValue: null },
    zip_code: { defaultValue: null },
    building_flag: { setter: setter_BoolNumber, defaultValue: null },
    zip_flag: { setter: setter_BoolNumber, defaultValue: null },
    pa_flag: { setter: setter_BoolNumber, defaultValue: null },
    home_clng_prof_flag: { setter: setter_BoolNumber, defaultValue: null },
    cc_number: { defaultValue: null },
    exp_date: { defaultValue: null },
    cvv: { defaultValue: null },
    cc_zip: { defaultValue: null },
    plan_id: { defaultValue: null },
    start_clean_date: { defaultValue: null },
    frequency: { defaultValue: null },
    num_br: { defaultValue: null },
    num_bth: { defaultValue: null },
    num_adults: { defaultValue: null },
    num_kids: { defaultValue: null },
    num_pets: { defaultValue: null },
    pet_type: { defaultValue: null },
    home_condition: { defaultValue: null },
    home_access: { defaultValue: null },
    daily_tuning: { defaultValue: null },
    special: { defaultValue: null },
    registration_date: { defaultValue: null },
    meeting_point_start: { defaultValue: null },
    meeting_point_end: { defaultValue: null },
    is830: { defaultValue: null },
    promo_code: { defaultValue: null },
    resource: { defaultValue: null },
    flight_stairs: { defaultValue: null },
    status: { defaultValue: null }
  },
  auth_login: { setter: setter_String },
  auth_password: { setter: setter_String }
});
export const add_meeting_point = new Action("add_meeting_point", {
  email: { setter: setter_String },
  meeting_point_start: { setter: setter_String },
  meeting_point_end: { setter: setter_String }
});
export const send_message = new Action("send_message", {
  email: { setter: setter_String },
  text: { setter: setter_String },
  addressee_email: { setter: setter_String },
  isSystem: { setter: setter_BoolNumber },
  photoB64: { setter: setter_String, defaultValue: null }
});
export const request_assistance = new Action("request_assistance", {
  email: { setter: setter_String },
  "first_request_assistance (if = 1 require meeting_point_start)": {
    setter: (v, data, parent) => {
      v = setter_BoolNumber(v);
      if (v === 1 && !data.meeting_point_start) {
        throw new Error(`${parent} === 1 require meeting_point_start`);
      }
      return v;
    },
    defaultValue: 0
  },
  meeting_point_start: {
    setter: setter_StringRequireMeetingPointEnd,
    defaultValue: null
  },
  meeting_point_end: {
    setter: setter_String,
    defaultValue: null
  },
  CallFlag: { setter: setter_BoolNumber },
  EmailFlag: { setter: setter_BoolNumber },
  TextFlag: { setter: setter_BoolNumber },
  WashDishesFlag: { setter: setter_BoolNumber },
  MakeBedFlag: { setter: setter_BoolNumber },
  FoldClothesFlag: { setter: setter_BoolNumber },
  IronClothesFlag: { setter: setter_BoolNumber },
  OrganizationFlag: { setter: setter_BoolNumber },
  FeedMyPetFlag: { setter: setter_BoolNumber },
  WaterPlantsFlag: { setter: setter_BoolNumber },
  TakeOutTrashFlag: { setter: setter_BoolNumber },
  assistance_container: {
    setter: setter_AssistanceContainer,
    defaultValue: null
  }
});
export const add_billing_info = new Action("add_billing_info", {
  email: { setter: setter_String },
  cc_number: { setter: setter_McEncryptString },
  exp_date: { setter: setter_McEncryptString },
  cvv: { setter: setter_McEncryptString },
  cc_zip: { setter: setter_McEncryptString },
  meeting_point_start: {
    setter: setter_StringRequireMeetingPointEnd,
    defaultValue: null
  },
  meeting_point_end: {
    setter: setter_String,
    defaultValue: null
  }
});
export const login = new Action("login", {
  email: { setter: setter_String },
  pass: { setter: setter_String }
});
export const create_user = new Action("create_user", {
  email: { setter: setter_String },
  pass: { setter: setter_String },
  first_name: { setter: setter_String },
  last_name: { setter: setter_String },
  building_name: {
    //('None of the Above' will set BUILDING_FLAG = 0)
    setter: setter_String
  },
  address: { setter: setter_String },
  apt_num: { setter: setter_String, defaultValue: null },
  phone: { setter: setter_String },
  "zip_code ": {
    setter: setter_String,
    defaultValue: null
    //if BUILDING_FLAG=0 and unsupported zip -> error
  },
  cc_number: { setter: setter_String, defaultValue: null },
  exp_date: { setter: setter_String, defaultValue: null },
  cvv: { setter: setter_String, defaultValue: null },
  cc_zip: { setter: setter_String, defaultValue: null },
  meeting_point_start: {
    setter: setter_StringRequireMeetingPointEnd,
    defaultValue: null
  },
  meeting_point_end: {
    setter: setter_String,
    defaultValue: null
  },
  resource: {
    setter: setter_String,
    defaultValue: "In-Network"
  },
  flight_stairs: {
    setter: setter_String,
    defaultValue: "N/A"
  },
  device: {
    setter: setter_String,
    defaultValue: "EcoPureHelp"
  }
});
export const logout = new Action("logout", {
  email: { setter: setter_String },
  token: { setter: setter_String }
});
export const get_info = new Action("get_info", {
  email: { setter: setter_String },
  token: { setter: setter_String }
});
export const set_pa_plan = new Action("set_pa_plan", {
  email: { setter: setter_String },
  token: { setter: setter_String },
  plan_id: { setter: Number }
});
export const get_admin_chat = new Action("get_admin_chat", {
  token: { setter: setter_String },
  messages_offset: { setter: Number },
  messages_count: { setter: Number },
  addressee_email: {
    setter: setter_String,
    defaultValue: "admin_email"
  }
});
export const set_apns_token = new Action("set_apns_token", {
  token: { setter: setter_String },
  apns_token: { setter: setter_String }
});
export const get_price_list = new Action("get_price_list", {
  token: { setter: setter_String }
});
export const update_user_info = new Action("update_user_info", {
  token: { setter: setter_String },
  email: {
    setter: setter_String,
    defaultValue: null
  },
  building_name: {
    //('None of the Above' will set BUILDING_FLAG = 0)
    setter: setter_String,
    defaultValue: null
  },
  zip_code: {
    //if BUILDING_FLAG=0 and unsupported zip -> error
    setter: setter_String,
    defaultValue: null
  },
  pass: {
    setter: setter_String,
    defaultValue: null
  }
});
export const home_cleaning = new Action("home_cleaning", {
  token: { setter: setter_String },
  start_clean_date: { setter: setter_String },
  meeting_point_start: {
    setter: setter_StringRequireMeetingPointEnd,
    defaultValue: null
  },
  meeting_point_end: {
    setter: setter_String,
    defaultValue: null
  },
  pet_type: {
    setter: setter_String,
    defaultValue: null
  },
  special: {
    setter: setter_String,
    defaultValue: null
  },
  frequency: {
    // (Move-Out...)
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  num_br: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  num_bth: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  num_adults: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  num_kids: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  num_pets: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  home_condition: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  home_access: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  daily_tuning: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  time_initial_cleaning: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  time_ongoing_cleaning: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 0),
    defaultValue: null
  },
  preferred_time_cleaning: {
    setter: hoc_setter_require_equal_number(String, "home_clng_prof_flag", 1),
    defaultValue: null
  },
  is830: {
    //(-1 not ok; 1 - ok; 0 - default)
    setter: Number,
    defaultValue: null
  },
  "promo-code": {
    setter: setter_String,
    defaultValue: null
  },
  "add-on-services": {
    setter: setter_String,
    defaultValue: null
  }
});
export const get_photo = new Action("get_photo", {
  token: {
    setter: setter_String
  },
  message_id: {
    setter: Number
  }
});
