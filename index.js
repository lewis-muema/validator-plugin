/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
const validations = {
  email: {
    ke: new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
    ug: new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
    ci: new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
  },
  image: {
    ke: new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/),
    ug: new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/),
    ci: new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/),
  },
  name: {
    ke: new RegExp(/^[A-Z][a-z]+[,.'-]?(?: [A-Z][a-z]+[,.'-]?)*$/),
    ug: new RegExp(/^[A-Z][a-z]+[,.'-]?(?: [A-Z][a-z]+[,.'-]?)*$/),
    ci: new RegExp(/^[A-Z][a-z]+[,.'-]?(?: [A-Z][a-z]+[,.'-]?)*$/),
  },
  phone: {
    ke: new RegExp(/[0-9]{0,12}$/),
    ug: new RegExp(/[0-9]{0,12}$/),
    ci: new RegExp(/[0-9]{0,12}$/),
  },
  MBUNumberPlate: {
    ke: new RegExp(/^[A-Z]\w{3}\d{3}[A-Z]{1}/),
    ug: new RegExp(/^[A-Z]\w{2}\d{3}[A-Z]{1}/),
    ci: new RegExp(/^\d{4}[A-Z]{2}\d{2}/),
  },
  EBUNumberPlate: {
    ke: new RegExp(/^[A-Z]\w{2}\d{3}[A-Z]{1}/),
    ug: new RegExp(/^[A-Z]\w{2}\d{3}[A-Z]{1}/),
    ci: new RegExp(/^\d{4}[A-Z]{2}\d{2}/),
  },
  FBUNumberPlate: {
    ke: new RegExp(/^[A-Z]\w{1}\d{3}[A-Z]{1}/),
    ug: new RegExp(/^[A-Z]\w{2}\d{3}[A-Z]{1}/),
    ci: new RegExp(/^\d{4}[A-Z]{2}\d{2}/),
  },
  LogBook: {
    ke: new RegExp(/^[A-Z]{1}\d{7}[A-Z]{1}/),
    ug: new RegExp(/^[A-Z]{3}\d{3}[A-Z]{2}/),
  },
  TaxPinRegistrationPeer: {
    ke: new RegExp(/^[A]{1}\d{9}[A-Z]{1}/),
    ug: new RegExp(/\d{10}/),
    ci: new RegExp(/^[0-9]{7}[A-Z]{1}$/),
  },
  TaxPinRegistrationBiz: {
    ke: new RegExp(/^[P]{1}\d{9}[A-Z]{1}/),
    ug: new RegExp(/\d{10}/),
    ci: new RegExp(/^[0-9]{7}[A-Z]{1}$/),
  },
  DrivingLicense: {
    ke: new RegExp(/^[A-Z]{3}\d{3}/),
    ug: new RegExp(/^[0-9]{0,8}[/][0-9][/][0-9]/),
    ci: new RegExp(/^[A-Z0-9]{6}[-][0-9]{2}[-][A-Z0-9]{10}/),
  },
  InsurancePolicy: {
    ke: new RegExp(/^[A-Z][0-9]{0,2}[/][0-9]{0,3}[/][0-9]{0,6}[/][0-9]{0,4}/),
    ug: new RegExp(/^\d{10}/),
    ci: new RegExp(/^\d{4}[-]\d{10}/),
  },
  InsuranceCertificate: {
    ke: new RegExp(/^[A-Z][0-9]{8}$/),
  },
  NationalId: {
    ke: new RegExp(/^\d{8}/),
    ug: new RegExp(/^[A-Z0-9]{14}/),
  },
  CompanyRegistration: {
    ke: new RegExp(/^[PVT]{3}[A-Z0-9]{7}$/),
    ug: new RegExp(/[0-9]{5}/),
    ci: new RegExp(/^[A-Z]{2}[-][A-Z]{3}[-][0-9]{4}[-][A-Z]{1}[-][0-9]{5}/),
  },
  TransporterCertificate: {
    ci: new RegExp(/^[0-9]{4}[/][A-Z]{4}[/][A-Z]{3}[/][0-9]{2}[/][0-9]{3}/),
  },
  ConsularCard: {
    ci: new RegExp(/([A-Z0-9])\w+/),
  },
};

function HighlightInput(className, status) {
  setTimeout(() => {
    const element = document.querySelectorAll(className);
    if (element[0]) {
      element[0].style.borderColor = status ? 'rgb(34, 255, 112)' : 'rgb(255, 160, 160)';
      element[0].style.boxShadow = status ? '0px 1px 5px 1px #00ff5a' : 'rgba(255, 0, 0, 0.58) 0px 1px 5px 1px';
    }
  }, 500);
}

export default function validator(type, val, countryCode, className) {
  let status = false;
  if (validations[type] && validations[type][countryCode] && val) {
    const regExp = validations[type][countryCode];
    status = regExp.test(val);
    if (className) {
      HighlightInput(className, status);
    }
  }
  return status;
}
