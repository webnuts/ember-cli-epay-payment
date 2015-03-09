import Ember from 'ember';

export default Ember.Component.extend({
  merchentNumber: undefined,
  amount: undefined,
  orderId: undefined,
  acceptUrl: undefined,
  cancelUrl: undefined,
  currency: 'DKK',
  languageCode: 'da',
  windowstate: '1',

  language: function() {
    switch (this.get('languageCode')) {
      case 'da':
        return 1;
      default:
        return 2;
    }
  }.property('languageCode'),

  initPayment: function() {
    if (window.PaymentWindow) {
      var paymentwindow = new window.PaymentWindow({
        'merchantnumber': this.get('merchentNumber').toString(),
        'amount': Math.round(this.get('amount') * 100).toString(),
        'currency': this.get('currency'),
        'language': this.get('language').toString(),
        'orderid': this.get('orderId').toString(),
        'accepturl': this.get('acceptUrl'),
        'cancelurl': this.get('cancelUrl')
      });

      //paymentwindow.append(this.elementId);
      paymentwindow.open();
    }
  },

  didInsertElement: function() {
    var self = this;

    if (window.PaymentWindow) {
      this.initPayment();
    }
    else {
      $.getScript('https://ssl.ditonlinebetalingssystem.dk/integration/ewindow/paymentwindow.js').then(function() {
        self.initPayment();
      });
    }
  }
});