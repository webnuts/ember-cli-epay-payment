# ember-cli-x-marquee

Plugin for ember-cli that makes epay-payment component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-epay-payment.git --save-dev
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{epay-payment merchentNumber='12345678' amount=totalPrice orderId=orderId acceptUrl=paymentAcceptUrl cancelUrl=paymentCancelUrl}}
```

## Configuration

### merchentNumber

Merchent number is set to the unique store ID given from ePay.

### amount

The total amount. Up to two decimals are included.

### orderId

The identification of the order. The ordernumber has to be unique for each payment.

### currency

The currency of the payment. See epay.dk for details about how to set this value.

### languageCode

Language code for the payment window.