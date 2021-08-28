const _letters = 'abcdefghijklmnopqrstuvwxyz';

type Choice = {
  uppercase?: boolean;
  numbers?: boolean;
  special?: boolean;
  passwordLength?: number;
};

/* Stores user choices and sets defaults */
export default class Choices {
  public static letters = _letters.split('');
  public static uppercaseLetters = _letters.toUpperCase().split('');
  public static special = ',./!@#$%^&*~'.split('');
  public static integers = '0123456789'.split('');

  private _storage = (data?: Choice): Choice => {
    const NAMESPACE = 'passGenOptions';
    if (data) {
      const json = localStorage.getItem(NAMESPACE);
      const parsed = json ? JSON.parse(json) : {};
      const stringified = JSON.stringify({
        ...parsed,
        ...data
      })
      localStorage.setItem(NAMESPACE, stringified);
      return {
        ...parsed,
        ...data,
      };
    } else {
      return JSON.parse(localStorage.getItem(NAMESPACE) || '{}');
    }
  };

  private _uppercase = false;
  private _numbers = false;
  private _special = false;
  private _passwordLength: number;

  constructor() {
    const stored = this._storage();
    console.log(stored);
    for (const key in stored) {
      console.log({
        [`_${key}`]: stored[key] 
      })
      this[`_${key}`] = stored[key];
    }
  }

  get props() {
    return {
      passwordLength: this._passwordLength,
      numbers: this._numbers,
      special: this._special,
      uppercase: this._uppercase
    }
  }

  get uppercase() {
    return this._uppercase;
  }
  set uppercase(value) {
    this._uppercase = value;
    this._storage({
      uppercase: value,
    });
  }

  get numbers() {
    return this._numbers;
  }
  set numbers(value) {
    this._numbers = value;
    this._storage({
      numbers: value,
    });
  }

  get special() {
    return this._special;
  }
  set special(value) {
    this._special = value;
    this._storage({
      special: value,
    });
  }

  get passwordLength() {
    return this._passwordLength;
  }
  set passwordLength(value) {
    this._passwordLength = value;
    this._storage({
      passwordLength: value,
    });
  }
}
