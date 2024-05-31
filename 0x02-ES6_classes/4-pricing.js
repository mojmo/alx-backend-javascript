import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }
    this._currency = newCurrency;
  }

  /**
     * Returns a formatted string with the price amount, currency name, and code.
     *
     * @returns {string} The formatted string (e.g., 12.99 United States Dollar (USD)).
     */
  displayFullPrice() {
    const { name, code } = this.currency;
    return `${this.amount} ${name} (${code})`;
  }

  /**
     * Converts a price to a new amount based on the provided conversion rate.
     *
     * @param {number} amount - The original price amount.
     * @param {number} conversionRate - The rate to convert the price.
     * @returns {number} The converted price amount.
     */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
