import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'sample-content',

  properties: {

    size: {
      type: Number,
      value: 0,
      notify: true
    },

    label: {
      value: ''
    },

    padding: {
      value: '16px'
    },

    margin: {
      value: '24px'
    },

    boxShadow: {
      value: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'
    }

  },

  observers: [
    '_render(size, label, padding, margin, boxShadow)'
  ],

  _lorem_ipsum_strings: [
    'Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.',
    'Ut labores minimum atomorum pro. Laudem tibique ut has.',
    'Fugit adolescens vis et, ei graeci forensibus sed.',
    'Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.',
    'Ea duis bonorum nec, falli paulo aliquid ei eum.',
    'Usu eu novum principes, vel quodsi aliquip ea.',
    'Has at minim mucius aliquam, est id tempor laoreet.',
    'Pro saepe pertinax ei, ad pri animal labores suscipiantur.',
    'Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.',
    'Iisque perfecto dissentiet cum et, sit ut quot mandamus, ut vim tibique splendide instructior.',
    'Id nam odio natum malorum, tibique copiosae expetenda mel ea.',
    'Cu mei vide viris gloriatur, at populo eripuit sit.',
    'Modus commodo minimum eum te, vero utinam assueverit per eu.',
    'No nam ipsum lorem aliquip, accumsan quaerendum ei usu.'
  ],

  ready: function() {
    this.style.display = 'block';
  },

  _randomString: function(size) {
    var ls = this._lorem_ipsum_strings;
    var s  = '';
    do {
      s += ls[Math.floor(Math.random() * ls.length)];
      size--;
    } while (size > 0);
    return s;
  },

  _randomLetter: function() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  },

  _render: function(size, label, padding, margin, boxShadow) {
    var html = this._lastSize < size ? this.innerHTML : '';
    var lastItem =  this._lastSize < size ?  size - this._lastSize : size;
    for (var i = 0; i < lastItem; i++) {
      html +=
        '<div style="box-shadow: ' + boxShadow +  '; padding: ' + padding + '; margin: ' + margin + '; border-radius: 5px; background-color: #fff; color: #757575;">' +
        '<div style="display: inline-block; height: 64px; width: 64px; border-radius: 50%; background: #ddd; line-height: 64px; font-size: 30px; color: #555; text-align: center;">' + this._randomLetter() + '</div>' +
        '<div style="font-size: 22px; margin: 16px 0; color: #212121;">' + this.label + ' '  + this._randomString() + '</div>' +
        '<p style="font-size: 16px;">' + this._randomString() + '</p>' +
        '<p style="font-size: 14px;">' + this._randomString(3) + '</p>' +
        '</div>';
    }
    this.innerHTML = html;
    this._lastSize = size;
  }

});
