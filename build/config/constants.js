/**
 */
(function() {

  'use strict'

  angular.module('app.constants', [])
    .constant('FIVE_HUNDRED_PX', {
      USERNAME: 'bookings11',
      KEY: '8u516zh8EMeRBrlCI9YLKxYAXzaPCJygkUmb56el',
      SECRET: '6MQrl91LfyrQ5CUsUbIKiqbPm2DYToWV0fjM8INs',
      JS_SDK_KEY: 'f27b8afe926ca5521d1c612b2010300a5607404f',
      PAGE_SIZE: 20
    })
    .constant('MAPS', {
      API_KEY: 'AIzaSyA4GZxpNOG7cjZzmYdEKm9CgwXYlrdyS1o',
      CENTER: {
        LAT: 51.865382,
        LNG: -2.246484
      }
    })
    .constant('MATERIAL_DESIGN', {
      PRIMARY: {
        '50': '#3bb7fc',
        '100': '#22aefb',
        '200': '#09a5fb',
        '300': '#0496e6',
        '400': '#0385cd',
        '500': '#0375B4',
        '600': '#03659b',
        '700': '#025482',
        '800': '#024469',
        '900': '#013450',
        'A100': '#54c0fc',
        'A200': '#6dc9fd',
        'A400': '#86d3fd',
        'A700': '#012337',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', 'A100', 'A200', 'A400']
      },
      ACCENT: {
  '50': '#665200',
        '100': '#806700',
        '200': '#997c00',
        '300': '#b39000',
        '400': '#cca500',
        '500': '#e6b900',
        '600': '#ffd31a',
        '700': '#ffd833',
        '800': '#ffdd4d',
        '900': '#ffe266',
        'A100': '#ffd31a',
        'A200': '#FFCE00',
        'A400': '#e6b900',
        'A700': '#ffe780',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': ['50', '100', '200', '300', 'A400']
      },
      WARN: {
            '50': '#00f797',
        '100': '#00de87',
        '200': '#00c478',
        '300': '#00ab68',
        '400': '#009158',
        '500': '#007849',
        '600': '#005e39',
        '700': '#00452a',
        '800': '#002b1a',
        '900': '#00120b',
        'A100': '#12ffa2',
        'A200': '#2bffac',
        'A400': '#45ffb6',
        'A700': '#000000'
      },
      BACKGROUND: {
          '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#f2f2f2',
        '400': '#e6e6e6',
        '500': '#D9D9D9',
        '600': '#cccccc',
        '700': '#bfbfbf',
        '800': '#b3b3b3',
        '900': '#a6a6a6',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#999999',
        'contrastDefaultColor': 'light'
      }
    })

}());
