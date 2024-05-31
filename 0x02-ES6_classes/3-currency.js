export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newName;
  }

  /**
     * Returns a formatted string with the currency name and code.
     *
     * @returns {string} The formatted string (e.g., United States Dollar (USD)).
     */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
