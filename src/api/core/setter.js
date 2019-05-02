import { PropertySet } from "./PropertySet";

export const setter_BoolNumber = v => Number(!!v);
export const setter_McEncryptString = () => "todo: simulate crypto";
export const setter_String = String;

const assistancePropertySet = new PropertySet({
  assistance_type: { setter: setter_String },
  assistance_label: { setter: setter_String },
  assistance_description: { setter: setter_String, defaultValue: null },
  photoB64: { setter: setter_String, defaultValue: null }
});

export const setter_AssistanceContainer = (valueArray, data, parent) => {
  if (Array.isArray(valueArray)) {
    valueArray = valueArray.map(v =>
      assistancePropertySet.call("assistance_container", v, parent)
    );
  } else if (valueArray !== null) {
    throw new Error(
      `assistance_container must be null or array of assistancePropertySet`
    );
  }
  return JSON.stringify(valueArray);
};
export const setter_StringRequireMeetingPointEnd = (v, data, parent) => {
  v = String(v);
  if (v && !data.meeting_point_end) {
    throw new Error(`${parent} require meeting_point_end`);
  }
  return v;
};
export const hoc_setter_require_equal_number = (fn, key, number) => (
  v,
  data,
  parent
) => {
  v = fn(v);
  if (v && !data[key]) {
    throw new Error(`${parent} require ${key}`);
  } else if (+data[key] !== +number) {
    throw new Error(`${parent} require equal number ${key} === ${number}`);
  }
  return v;
};
