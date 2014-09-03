Keyboards.mm = {
  label: 'မြန်မာဘာသာ',
  shortLabel: 'En',
  imEngine: 'myanmar',
  types: ['text', 'url', 'email', 'password'],

  menuLabel: 'မြန်မာဘာသာ',
  alt: {
    a: 'áàâäåãāæ',
    c: 'çćč',
    e: 'éèêëēę€ɛ',
    i: 'ïíìîīį',
    o: 'öõóòôōœøɵ',
    u: 'üúùûū',
    s: 'ßśš$',
    S: 'ŚŠ$',
    n: 'ñń',
    l: 'ł£',
    y: 'ÿ¥',
    z: 'žźż',
    '.': ',?!;:'
  },
  keys: [
    [
      { value: '&#x1006;' }, { value: '&#x1010;' }, { value: '&#x1014;' }, { value: '&#x1019;' },
      { value: '&#x1021;' }, { value: '&#x1000;' }, { value: '&#x1015;' }, { value: '&#x1004;' },
      { value: '&#x101E;' }, { value: '&#x1005;' }
    ], [
      { value: '&#x1031;' }, { value: '&#x103A;' }, { value: '&#x102D;' }, { value: '&#x1039;' },
      { value: '&#x102B;' }, { value: '&#x1037;' }, { value: '&#x103B;' }, { value: '&#x102F;' },
      { value: '&#x1030;' }
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: '&#x1016;' }, { value: '&#x1011;' }, { value: '&#x1001;' }, { value: '&#x101C;' },
      { value: '&#x1018;' }, { value: '&#x100A;' }, { value: '&#x102C;' },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '1': ['¹', '1st'],
      '2': ['²', '2nd'],
      '3': ['³', '3rd'],
      '4': ['⁴', '4th'],
      '5': ['⁵', '5th'],
      '6': ['⁶', '6th'],
      '7': ['&#x101B;', '&#x101B;'],
      '8': ['&#x1002;', '&#x1002;'],
      '9': ['⁹', '9th'],
      '0': ['⁰', 'º'],
      '$': ['¥', '€', '£', '¢', '₠'],
      '?': ['¿'],
      '!': ['¡']
    },
    keys: [
      [
        { value: '&#x1041;' }, { value: '&#x1042;' }, { value: '&#x1043;' }, { value: '&#x1044;' },
        { value: '&#x1045;' }, { value: '&#x1046;' }, { value: '&#x1047;' }, { value: '&#x1048;' },
        { value: '&#x1041;' }, { value: '&#x1040;' }
      ], [
        { value: '@' }, { value: '#' },
        { value: '$', className: 'alternate-indicator' }, { value: '&#x101B;' },
        { value: '*' }, { value: '-' }, { value: '_' }, { value: '/' },
        { value: '(' }, { value: ')' }
      ], [
        { value: 'Alt', ratio: 1.5,
          keyCode: KeyEvent.DOM_VK_ALT,
          className: 'page-switch-key'
        },
        { value: '+',
          supportsSwitching: {
            value: ','
          }
        }, { value: '&#x1002;' }, { value: '&#x1038;' }, { value: '"' },
        { value: '\'' }, { value: '?' }, { value: '!' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  }
};
