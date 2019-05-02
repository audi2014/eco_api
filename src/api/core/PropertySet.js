import { Property } from "./Property";
export class PropertySet {
  constructor(propsData = {}) {
    this.props = {};
    Object.keys(propsData).forEach(propKey => {
      this.props[propKey] = new Property(propsData[propKey]);
    });
  }

  call(parentKey, data, parent) {
    const v = {};
    Object.keys(this.props).forEach(propKey => {
      v[propKey] = this.props[propKey](
        propKey,
        data,
        `${parent} -> ${parentKey}`
      );
    });
    return v;
  }
}
