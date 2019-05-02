import { PropertySet } from "./PropertySet";
export class Action {
  constructor(
    actionName,
    propsData = {},
    baseUrl = "https://api.ecopurehomecleaning.com/index.php"
  ) {
    this.baseUrl = String(baseUrl);
    this.actionName = String(actionName);
    this.propsSet = new PropertySet(propsData);
  }

  /**
   * @returns {Promise}
   */
  fetch(data = {}) {
    const formData = new FormData();
    const bodyData = this.propsSet.key("body", data, this.actionName);

    Object.keys(bodyData).forEach(key => {
      formData.append(key, bodyData[key]);
    });
    formData.append("action", this.actionName);
    return fetch(`${this.baseUrl}`, {
      method: "post",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("response not ok");
        } else {
          return res.json();
        }
      })
      .then(res => console.log(`fetch result ${this.actionName}`, res) || res)
      .then(res => {
        if (!res || !res.data || !!res.error) {
          throw new Error(res.errorMsg || "bad response");
        } else {
          return res.data;
        }
      });
  }
}
