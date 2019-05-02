import { PropertySet } from "./PropertySet";
export class Property {
  constructor({ setter = v => v, defaultValue = undefined, ...rest }) {
    if (rest) {
      this.setter = new PropertySet(rest);
    } else {
      this.setter = setter;
    }
    this.defaultValue = defaultValue;
  }

  call(propKey, data, parent) {
    let v = data[propKey];
    if (v === undefined) v = this.defaultValue;
    if (v === undefined)
      throw new Error(`require prop value ${parent} -> ${propKey}`);
    return this.setter(v, data, parent);
  }
}
