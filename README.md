# sendy validation

Validates input data on sendy frontend apps

## Getting Started
To pull sendy validation plugin into your vue project, use the command

```js
npm i @sendyit/validation
```

## Initializing & Configuring
Initialize the validation plugin by importing it into your component

```js
import validator from '@sendyit/validation';
```

## Using the validator
Use the validator by calling the validator function and passing parameters into it

```js
validator('image', 'https://sendy-partner-docs.s3-eu-west-1.amazonaws.com/photo/photo_name.png', 'ke', '.login__forgotPass')
```

The validator returns a `true` or `false` boolean so you can assign it to a variable as follows

```js
const IsValid = validator('image', 'https://sendy-partner-docs.s3-eu-west-1.amazonaws.com/photo/photo_name.png', 'ke', '.login__forgotPass')
```

The parameters are passed as follows
* Field type - `email, image, name, phone, MBUNumberPlate, EBUNumberPlate, FBUNumberPlate, LogBook, TaxPinRegistrationPeer, TaxPinRegistrationBiz, DrivingLicense, InsurancePolicy, InsuranceCertificate, NationalId, CompanyRegistration, TransporterCertificate, ConsularCard`
* Field value
* Country code - `ke, ug, ci`
* input identifier - `.input-id or #input-class` *(Optional)*
(This allows the validator to create a green/red halo around the input based on whether the validation has passed or failed)

*NOTE: The validator does not track/listen in on the input. To get validation on typing or keypress please call the function inside a watcher and pass the value into it*
