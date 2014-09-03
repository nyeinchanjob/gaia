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
      { value: 'q' }, { value: 'w' }, { value: 'e' }, { value: 'r' },
      { value: 't' }, { value: '&#x1000' }, { value: 'u' }, { value: 'i' },
      { value: 'o' }, { value: 'p' }
    ], [
      { value: 'a' }, { value: 's' }, { value: 'd' }, { value: 'f' },
      { value: 'g' }, { value: 'h' }, { value: 'j' }, { value: 'k' },
      { value: 'l' }
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'z' }, { value: 'x' }, { value: '&#x1001' }, { value: 'v' },
      { value: 'b' }, { value: 'n' }, { value: 'm' },
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
      '7': ['⁷', '7th'],
      '8': ['&#x1002', '&#x1002'],
      '9': ['⁹', '9th'],
      '0': ['⁰', 'º'],
      '$': ['¥', '€', '£', '¢', '₠'],
      '?': ['¿'],
      '!': ['¡']
    },
    keys: [
      [
        { value: '&#x1041' }, { value: '&#x1042' }, { value: '&#x1043' }, { value: '&#x1044' },
        { value: '&#x1045' }, { value: '&#x1046' }, { value: '&#x1047' }, { value: '&#x1048' },
        { value: '&#x1041' }, { value: '&#x1040' }
      ], [
        { value: '@' }, { value: '#' },
        { value: '$', className: 'alternate-indicator' }, { value: '&' },
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
        }, { value: ':' }, { value: ';' }, { value: '"' },
        { value: '\'' }, { value: '?' }, { value: '!' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  }
};
