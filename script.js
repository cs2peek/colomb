var _0x53a645 = _0x28d8;
(function(_0x1cb60a, _0x348293) {
    var _0x4d4ef2 = _0x28d8
      , _0x1c9a1f = _0x1cb60a();
    while (!![]) {
        try {
            var _0x4741e8 = parseInt(_0x4d4ef2(0x1ce)) / 0x1 * (-parseInt(_0x4d4ef2(0x329)) / 0x2) + parseInt(_0x4d4ef2(0x2e6)) / 0x3 + -parseInt(_0x4d4ef2(0x2a0)) / 0x4 * (-parseInt(_0x4d4ef2(0x29b)) / 0x5) + -parseInt(_0x4d4ef2(0x2ae)) / 0x6 * (parseInt(_0x4d4ef2(0x1b8)) / 0x7) + -parseInt(_0x4d4ef2(0x256)) / 0x8 + parseInt(_0x4d4ef2(0x20d)) / 0x9 + parseInt(_0x4d4ef2(0x2cf)) / 0xa * (-parseInt(_0x4d4ef2(0x2b0)) / 0xb);
            if (_0x4741e8 === _0x348293)
                break;
            else
                _0x1c9a1f['push'](_0x1c9a1f['shift']());
        } catch (_0x231424) {
            _0x1c9a1f['push'](_0x1c9a1f['shift']());
        }
    }
}(_0xf0f6, 0xcb047),
window[_0x53a645(0x225)] = [],
window['started'] = ![],
window['start'] = () => {
    var _0x327871 = _0x53a645;
    // PATCH: Refresh sonrası temizlik - eski botları ve durumu sıfırla
    if (window[_0x327871(0x1f7)]) {
        // Eski botların WebSocket bağlantılarını kapat
        if (window[_0x327871(0x225)] && window[_0x327871(0x225)].length > 0) {
            window[_0x327871(0x225)].forEach(_bot => {
                try {
                    if (_bot.ws && _bot.ws.readyState !== WebSocket.CLOSED) {
                        _bot.ws.close();
                    }
                    if (_bot[_0x327871(0x17e)]) {
                        clearInterval(_bot[_0x327871(0x17e)]);
                    }
                    if (_bot[_0x327871(0x320)]) {
                        clearTimeout(_bot[_0x327871(0x320)]);
                    }
                } catch(e) {}
            });
        }
        // Bot listesini temizle
        window[_0x327871(0x225)] = [];
        // Durumu sıfırla
        window[_0x327871(0x1f7)] = ![];
        window['count'] = 0x0;
        // reCAPTCHA'nın temizlenmesi için kısa bekleme
        return new Promise(_resolve => {
            setTimeout(() => {
                _resolve();
                window['start']();
            }, 500);
        });
    }
    // PATCH END
    window[_0x327871(0x1f7)] = !![],
    window['count'] = 0x1;
    class _0x22f999 {
        constructor(_0x53f296, _0x3cfa09) {
            var _0x3f7202 = _0x327871;
            this['token'] = _0x3cfa09,
            this[_0x3f7202(0x27a)](_0x53f296);
        }
        [_0x327871(0x27a)](_0x12448d) {
            var _0x337a80 = _0x327871;
            this[_0x337a80(0x263)] = !![],
            this[_0x337a80(0x2ec)] = _0x12448d,
            this['ws'] = new WebSocket(_0x12448d),
            this['ws'][_0x337a80(0x261)] = _0x337a80(0x205),
            this['ws']['onmessage'] = this[_0x337a80(0x290)][_0x337a80(0x2ab)](this),
            this['ws']['onopen'] = this[_0x337a80(0x1aa)]['bind'](this),
            this['ws'][_0x337a80(0x2f1)] = this[_0x337a80(0x19e)][_0x337a80(0x2ab)](this),
            this['ws'][_0x337a80(0x215)] = this['onError']['bind'](this);
        }
        [_0x327871(0x290)](_0x138ab0) {
            var _0x99c6a0 = _0x327871
              , _0x9437e8 = new DataView(_0x138ab0['data'])
              , _0x301a6b = 0x0;
            0xf0 == _0x9437e8[_0x99c6a0(0x267)](_0x301a6b) && (_0x301a6b += 0x5);
            var _0xc97bdc = _0x9437e8['getUint8'](_0x301a6b++);
            switch (_0xc97bdc) {
            case 0x10:
                window[_0x99c6a0(0x266)](_0x9437e8, _0x301a6b);
                break;
            }
        }
        [_0x327871(0x1a7)]() {
            var _0x5f1c85 = this['Buffer'](0x1);
            _0x5f1c85['setUint8'](0x0, 0x1),
            this['send'](_0x5f1c85);
        }
        [_0x327871(0x181)](_0x570c78) {
            return new Promise(_0x23ecaf => setTimeout(_0x23ecaf, _0x570c78));
        }
        [_0x327871(0x2c2)](_0x2b8dc1) {
            var _0x4d25bd = _0x327871
              , _0x310d23 = this[_0x4d25bd(0x26f)](0x1 + 0x2 * _0x2b8dc1[_0x4d25bd(0x2ca)]);
            _0x310d23[_0x4d25bd(0x25c)](0x0, 0x32);
            for (var _0xd7697e = 0x0; _0xd7697e < _0x2b8dc1[_0x4d25bd(0x2ca)]; ++_0xd7697e) {
                _0x310d23[_0x4d25bd(0x25b)](0x1 + 0x2 * _0xd7697e, _0x2b8dc1[_0x4d25bd(0x316)](_0xd7697e), !![]);
            }
            this[_0x4d25bd(0x20a)](_0x310d23);
        }
        ['onOpen']() {
            var _0x1959b5 = _0x327871
              , _0x1992dd = this[_0x1959b5(0x26f)](0x5);
            _0x1992dd[_0x1959b5(0x25c)](0x0, 0xfe),
            _0x1992dd['setUint32'](0x1, 0x4, !![]),
            this['send'](_0x1992dd);
            var _0x1992dd;
            _0x1992dd = this[_0x1959b5(0x26f)](0x5),
            _0x1992dd[_0x1959b5(0x25c)](0x0, 0xff),
            _0x1992dd[_0x1959b5(0x243)](0x1, 0x4f676172, !![]),
            this[_0x1959b5(0x20a)](_0x1992dd),
            this['cap'](this['token']),
            this[_0x1959b5(0x17e)] = setInterval( () => {
                var _0x5058a6 = _0x1959b5
                  , _0x376158 = this[_0x5058a6(0x26f)](0x5);
                _0x376158['setUint8'](0x0, 0x5a),
                _0x376158[_0x5058a6(0x243)](0x1, 0x75bcd15, !![]),
                this[_0x5058a6(0x20a)](_0x376158);
            }
            , 0x3e8),
            // PATCH: Timeout'u kaydet
            this[_0x1959b5(0x320)] = setTimeout(async () => {
                var _0x1497ba = _0x1959b5;
                for (let _0x37acf5 = 0x0; _0x37acf5 < window[_0x1497ba(0x1c3)]; _0x37acf5++) {
                    this[_0x1497ba(0x1a7)](),
                    await this['sleep'](0x64);
                }
                console[_0x1497ba(0x2b8)](window[_0x1497ba(0x1c3)] + '.\x20izleniyor!'),
                window[_0x1497ba(0x1c3)]++;
            }
            , 0x7d0);
            // PATCH END
        }
        ['onClose'](_0x4cca7d) {
            var _0x3f3e30 = _0x327871;
            // PATCH: WebSocket'i güvenli kapat
            try {
                if (this['ws'] && this['ws'].readyState !== WebSocket.CLOSED) {
                    this['ws']['close']();
                }
            } catch(e) {}
            // PATCH END
            clearInterval(this[_0x3f3e30(0x17e)]),
            clearTimeout(this[_0x3f3e30(0x320)]),
            console[_0x3f3e30(0x2b8)](_0x3f3e30(0x16c) + _0x4cca7d);
        }
        [_0x327871(0x2bb)]() {}
        [_0x327871(0x1b0)](_0x56c8f1) {
            var _0xcbdb77 = _0x327871;
            let _0x2c705b = this['Buffer'](0x1);
            _0x2c705b[_0xcbdb77(0x25c)](0x0, _0x56c8f1),
            this[_0xcbdb77(0x20a)](_0x2c705b);
        }
        get[_0x327871(0x219)]() {
            var _0x5bd090 = _0x327871;
            return this['ws'] && this['ws'][_0x5bd090(0x322)] === WebSocket['OPEN'];
        }
        [_0x327871(0x26f)](_0x2b3a47) {
            return new DataView(new ArrayBuffer(!_0x2b3a47 ? 0x1 : _0x2b3a47));
        }
        [_0x327871(0x20a)](_0x3c591f) {
            var _0x2fdf99 = _0x327871;
            this[_0x2fdf99(0x219)] && this['ws'][_0x2fdf99(0x20a)](_0x3c591f['buffer']);
        }
    }
    var _0x394253 = document[_0x327871(0x1ad)](_0x327871(0x1d9))['value'];
    localStorage[_0x327871(0x24b)]('gameMode', _0x394253);
    // PATCH: reCAPTCHA spam koruması - her bot için delay ekle
    for (let _0xed40a7 = 0x0; _0xed40a7 < 0xa; _0xed40a7++) {
        setTimeout( () => {
            var _0x1321b6 = _0x327871;
            // PATCH: Tekrarlayan çağrıları önle
            if (typeof grecaptcha === 'undefined' || !grecaptcha.execute) {
                console[_0x1321b6(0x2b8)]('reCAPTCHA yüklenmedi, bot atlanıyor');
                return;
            }
            // PATCH END
            grecaptcha[_0x1321b6(0x196)](function() {
                var _0x224c69 = _0x1321b6;
                grecaptcha[_0x224c69(0x172)](_0x224c69(0x310), {
                    'action': _0x224c69(0x321)
                })[_0x224c69(0x277)](function(_0x48abc0) {
                    var _0x3c130d = _0x224c69;
                    // PATCH: Bot oluşturmadan önce token kontrolü
                    if (!_0x48abc0 || _0x48abc0.length < 10) {
                        console[_0x3c130d(0x2b8)]('Geçersiz reCAPTCHA token, bot atlanıyor');
                        return;
                    }
                    // PATCH END
                    window[_0x3c130d(0x225)][_0x3c130d(0x282)](new _0x22f999(_0x3c130d(0x2c8) + _0x394253,_0x48abc0));
                });
            });
        }
        , 0x1f4 * _0xed40a7);
    }
    // PATCH END
}
,
document[_0x53a645(0x30e)]('keydown', function(_0x509101) {
    var _0x569dfa = _0x53a645;
    if (_0x509101['key'] === '\x22') {
        if (window[_0x569dfa(0x1f7)] === !![])
            return;
        window['start']();
    }
    _0x509101[_0x569dfa(0x226)] === 'b' && (document['querySelector'](_0x569dfa(0x26c))[_0x569dfa(0x32e)][_0x569dfa(0x224)] = _0x569dfa(0x227),
    window['xa']()),
    _0x509101['key'] === _0x569dfa(0x1f9) && (document[_0x569dfa(0x2a5)](_0x569dfa(0x26c))['style'][_0x569dfa(0x224)] = '');
}));
function _0xf0f6() {
    var _0xfae6bc = ['setUint32', 'stroke', 'moveTo', '88ZIoPTz', 'Freeze\x20Mode\x20enabled', 'scrollHeight', '18', 'CONNECTING', 'setItem', 'showLeaderboard', '35', 'replace', 'mousemove', 'isSameOrigin', 'none', 'Skin\x20saklama\x20durumu:', 'cellNames', 'rotate', 'then', 'querySelector', 'birdekiçoklu', 'floor', '675624JjQEcL', 'getContext', 'split', 'onkeyup', 'onError', 'leaderboard', 'map', 'arc', '40', 'getUint16', 'src', 'loadImg', 'ready', 'Server', 'getOwnPropertyDescriptor', 'height', 'keys', 'src:', 'getItem', '11px\x20Ubuntu', 'message1', 'hidden', 'keyup', 'visible', 'fillStyle', 'value', 'log', 'call', 'undefined', 'onError:', 'Unnamed\x20Bot', 'mousedown', 'DOMContentLoaded', 'font', 'join', 'bind', 'mouseup', '35px\x20Ubuntu', '18px\x20Ubuntu', 'onMessage', 'count', 'createPattern', 'getElementById', 'test', 'black', 'lineTo', 'PI', 'shadowBlur', 'skins/', '#f2fbff', 'white', 'darkMode', '#000000', 'Connection\x20closed:', 'hideSkins', 'globalAlpha', 'rgb(111,\x20111,\x20111)', 'window', 'scrollTop', 'connect', 'length', '#ffffff', '13px\x20Ubuntu', 'Skin\x20gizleme\x20geçişi\x20yapıldı,\x20yeni\x20durum:', 'error', 'data', 'abs', '#aaaaaa', 'createLinearGradient', 'addEventListener', 'globalCompositeOperation', 'getElementsByTagName', 'protocol', 'readyState', 'beginPath', 'focus', '2493712sTNFvh', 'execute', 'save', 'clip', 'addColorStop', 'sleep', 'textAlign', 'gameMode', '13230lQRrNF', '5px\x20Ubuntu', 'push', 'connected', '#cccccc', '11280VwGYIJ', 'onopen', 'requestAnimationFrame', 'body', '2pIoVJy', 'restore', 'closePath', 'checked', '250986TAmSQG', '#333333', 'fillText', 'binaryType', 'keydown', 'cos', 'cap', 'forEach', 'userAgent', '4188970fTXrBm', 'wss://127.0.0.1/game?gameMode=', '6MChRua', 'getUint8', 'sendChat', '170aMaWSu', 'sin', 'Buffer', 'setUint16', 'showMinimapIcons', 'https://agar.io/', '#666666', 'fill', '#111111', 'bots', 'key', 'none', 'getTime', 'onMessage:', '#999999', '6UfVVqz', 'setUint8', 'isConnected', 'min', '1485504SrHvWM', 'opacity', 'strokeText', 'send', '1494225UIqeDu', 'onClose', 'arraybuffer', 'round', 'color', 'Unnamed\x20bot', 'center', 'sqrt', 'started', 'onmessage', 'backgroundColor', '6e8v3VaTPv90bYww3J1RIU2FBKrr4nWzuOUKXn2v', 'drawImage', 'canvas', 'fillRect', 'rgb(0,\x2022,\x200)', 'max', 'top', 'backgroundcolor', 'Skinler\x20gösteriliyor', 'onClose:', 'trim', '60px\x20Ubuntu', 'canvas1', 'username', 'onOpen', 'style', 'onload', '10px\x20Ubuntu', '9819552Qngglm'];
    _0xf0f6 = function() {
        return _0xfae6bc;
    }
    ;
    return _0xf0f6();
}
function _0x28d8(_0xa3d71d, _0x25b730) {
    var _0xf0f69c = _0xf0f6();
    return _0x28d8 = function(_0x28d8fb, _0x3e7e7c) {
        _0x28d8fb = _0x28d8fb - 0x16c;
        var _0x154301 = _0xf0f69c[_0x28d8fb];
        return _0x154301;
    }
    ,
    _0x28d8(_0xa3d71d, _0x25b730);
}
var _0x1f6e83 = _0x53a645;
!function(_0x276d36, _0x8f80a1) {
    var _0x2ec550 = _0x28d8
      , _0x1b187e = _0x53a645
      , _0x42850c = _0x28d8;
    _0x1b187e(0x1c0);
    const _0x162823 = _0x276d36[_0x2ec550(0x167)];
    var _0x162823, _0x4ce088 = !0x1, _0x1da959 = function(_0x120eaa) {
        var _0x37c1f4 = _0x1b187e;
        _0x162823(_0x37c1f4(0x229) + _0x120eaa),
        _0x276d36[_0x37c1f4(0x219)] && (_0x276d36[_0x37c1f4(0x167)] = _0x162823);
    }, _0x215d01 = !0x1, _0x147c50 = function(_0xdb7f6b) {
        var _0x22bb4d = _0x1b187e
          , _0x4a1c4d = _0x2ec550;
        document[_0x4a1c4d(0x1ab)](_0x22bb4d(0x22b))[_0x22bb4d(0x233)][_0x22bb4d(0x176)] = _0xdb7f6b,
        _0x276d36[_0x22bb4d(0x219)] && (_0x276d36['message1'] = _0x147c50);
    }, _0x563755 = function(_0x27d7ed) {
        var _0x3e2eb2 = _0x1b187e
          , _0x30d92c = _0x2ec550;
        document[_0x30d92c(0x1ab)](_0x3e2eb2(0x22b))[_0x3e2eb2(0x233)][_0x3e2eb2(0x28c)] = _0x27d7ed,
        _0x276d36[_0x3e2eb2(0x219)] && (_0x276d36[_0x3e2eb2(0x22b)] = _0x563755);
    }, _0xd6c522 = function(_0x2cbbcd) {
        var _0x1e2b18 = _0x2ec550;
        _0x2cbbcd[_0x1e2b18(0x24e)] = !0x0,
        _0x4ce088 || (_0x162823('1'),
        _0x1da959(0x11));
    }, _0x3d7f1c = function(_0x5c4a94) {
        var _0x58eb42 = _0x2ec550;
        _0x5c4a94['preventDefault'](),
        _0x4ce088 || (_0x162823('2'),
        _0x1da959(0x12));
    }, _0x20058a = function(_0x1bc02d) {
        var _0x5e7e35 = _0x2ec550;
        _0x1bc02d[_0x5e7e35(0x24e)] = !0x0;
    }, _0x3ca065 = function(_0x1e64bd) {
        _0x4ce088 || (0x0 < _0x1e64bd['deltaY'] ? _0x162823('3') : _0x162823('4'),
        _0x1da959(0x15));
    };
    var _0x151e56 = function() {
        var _0x54a87f = _0x1b187e
          , _0x4aaa07 = _0x2ec550;
        _0x4a6df6[_0x4aaa07(0x199)] = _0x276d36[_0x4aaa07(0x217)],
        _0x4a6df6[_0x54a87f(0x199)] = _0x276d36[_0x54a87f(0x217)],
        _0x1db943[_0x54a87f(0x199)] = _0x276d36[_0x54a87f(0x217)],
        _0x1db943['height'] = _0x276d36[_0x54a87f(0x217)],
        _0x276d36[_0x54a87f(0x219)] && (_0x276d36[_0x54a87f(0x2a7)] = _0x151e56);
    }, _0x1db943 = document[_0x1b187e(0x1ad)](_0x1b187e(0x20b)), _0x420c83 = _0x1db943[_0x2ec550(0x27c)]('2d'), _0x4a6df6 = document[_0x2ec550(0x1ab)](_0x2ec550(0xfc)), _0x364dc2 = _0x4a6df6[_0x1b187e(0x27c)]('2d'), _0x147fa8 = 'ontouchstart'in _0x276d36, _0x4035cb = function(_0x4f1f33) {
        return _0x4f1f33 = _0x4f1f33[_0x1b187e(0x24d)]()[_0x1b187e(0x27d)]('\x20'),
        0x64 < _0x4f1f33[_0x2ec550(0xc2)] && (_0x4f1f33 = _0x4f1f33[_0x2ec550(0x1be)](0x0, 0x64)),
        _0x4f1f33;
    };
    _0x162823 = function(_0x120eaa) {
        var _0x26fb14 = _0x2ec550;
        _0x276d36[_0x26fb14(0x219)] && (_0x276d36['sendChat'] = _0x162823);
    }
    ;
    var _0x579384 = 0x0;
    _0x1db943[_0x2ec550(0x197)] = function(_0x244c23) {
        var _0x5a6dc8 = _0x2ec550;
        if (!_0x4ce088 && _0x147fa8) {
            var _0x1c20ba = _0x244c23[_0x5a6dc8(0x1e0)][0x0]
              , _0x172771 = _0x1c20ba[_0x42850c(0x136)]
              , _0x42ca81 = _0x1c20ba[_0x42850c(0x1b4)];
            new Date()[_0x42850c(0x112)]() - _0x579384 > 0x1388 && _0x172771 >= 0x0 && _0x172771 <= 0x0 + _0x5719c2 && _0x42ca81 >= -0xf - _0x312664 && _0x42ca81 <= -0xf && (_0x162823(_0x120eaa),
            _0x579384 = new Date()[_0x42850c(0x112)]());
        }
    }
    ,
    _0x147fa8 && (_0x1db943[_0x2ec550(0x233)](_0x2ec550(0x24f), _0xd6c522, !0x1),
    _0x1db943[_0x2ec550(0x233)](_0x2ec550(0x192), _0x3d7f1c, !0x1),
    _0x1db943[_0x2ec550(0x233)](_0x2ec550(0x14a), _0x20058a, !0x1)),
    _0x1db943['onmouseup'] = function() {}
    ,
    /firefox/i[_0x2ec550(0x168)](navigator[_0x2ec550(0x145)]) ? document[_0x2ec550(0x233)](_0x1b187e(0x19f), _0x3ca065, !0x1) : document[_0x2ec550(0x137)][_0x2ec550(0x109)] = _0x3ca065,
    _0x1db943[_0x2ec550(0x1a6)] = function() {
        _0x4ce088 = !0x1;
    }
    ,
    document[_0x2ec550(0x1ed)](_0x2ec550(0x11d))[_0x2ec550(0xf7)] = function() {
        _0x4ce088 = !0x1;
    }
    ,
    document[_0x2ec550(0x1ed)]('chat_textbox')[_0x2ec550(0x1a6)] = function() {
        _0x4ce088 = !0x0;
    }
    ;
    var _0xb962ad = !0x1
      , _0x55e49c = !0x1
      , _0x58de2b = !0x1;
    _0x276d36[_0x2ec550(0x1b9)] = function(_0x5c048d) {
        var _0x22fb4d = _0x1b187e
          , _0x544189 = _0x2ec550
          , _0x10d297 = document[_0x544189(0x1ed)](_0x544189(0xb5))[_0x544189(0x15b)][_0x544189(0xa1)];
        switch (_0x5c048d[_0x22fb4d(0x1fc)]) {
        case 0x20:
            _0xb962ad || _0x4ce088 || _0x10d297 != _0x544189(0xd6) || (_0x21b2b4(),
            _0x1da959(0x11),
            _0xb962ad = !0x0);
            break;
        case 0x51:
            _0x55e49c || _0x10d297 != _0x544189(0xd6) || (_0x1da959(0x12),
            _0x55e49c = !0x0);
            break;
        case 0x57:
            _0x58de2b || _0x4ce088 || _0x22fb4d(0x252) != _0x10d297 || (_0x21b2b4(),
            _0x1da959(0x15),
            _0x58de2b = !0x0);
            break;
        case 0x46:
            _0x4ce088 || (!0x1 == Sfreeze ? (Sfreeze = !0x0,
            _0x147c50(_0x544189(0x247))) : (Sfreeze = !0x1,
            _0x147c50(_0x544189(0x1ef))));
            break;
        case 0x43:
            _0x4ce088 || _0x162823(_0x544189(0x1ad));
            break;
        case 0x1b:
            _0x563755(_0x544189(0x23a)),
            _0x276d36[_0x544189(0x1c4)] = !0x1;
            break;
        case 0xd:
            _0x4ce088 ? (_0x4ce088 = !0x1,
            document[_0x544189(0x1ed)](_0x544189(0x11d))[_0x544189(0xef)](),
            (_0x621ac1 = _0x4035cb(document[_0x544189(0x1ed)](_0x544189(0x11d))[_0x544189(0xac)]))[_0x544189(0xc2)] > 0x0 && _0x162823(_0x621ac1),
            document[_0x544189(0x1ed)](_0x544189(0x11d))[_0x544189(0xac)] = '') : _0x215d01 || (document[_0x22fb4d(0x1ad)](_0x544189(0x11d))[_0x22fb4d(0x15d)](),
            _0x4ce088 = !0x0);
        }
    }
    ,
    _0x276d36[_0x1b187e(0x2ba)] = function(_0x3c4aab) {
        var _0x275c2d = _0x1b187e;
        switch (_0x3c4aab[_0x275c2d(0x1fc)]) {
        case 0x20:
            _0xb962ad = !0x1;
            break;
        case 0x57:
            _0x58de2b = !0x1;
            break;
        case 0x51:
            _0x55e49c && (_0x1da959(0x13),
            _0x55e49c = !0x1);
        }
    }
    ,
    _0x276d36[_0x1b187e(0x15f)] = function() {
        _0x58de2b = _0x55e49c = _0xb962ad = !0x1;
    }
    ,
    _0x276d36['onresize'] = _0x151e56,
    _0x151e56(),
    _0x276d36[_0x2ec550(0x219)] ? _0x276d36[_0x1b187e(0x283)](_0x320c82) : setInterval(_0x420c83, 0x3e8 / 0x3c),
    document[_0x2ec550(0x1ed)](_0x2ec550(0xb5))[_0x2ec550(0x15b)][_0x2ec550(0xa1)] = _0x2ec550(0x209),
    document[_0x2ec550(0x1ed)](_0x2ec550(0xfc))[_0x2ec550(0x15b)][_0x2ec550(0xa1)] = _0x2ec550(0xd6);
}(window, window[_0x1f6e83(0x202)]),
(function() {
    var _0x378f4f = _0x1f6e83
      , _0x4a7508 = function(_0x1ad080) {
        var _0x5566a8 = _0x392b;
        if (0x11 === _0x1ad080[_0x5566a8(0x20a)]) {
            for (var _0x1ab00e = 0x0; _0x1ab00e < 0x4; ++_0x1ab00e)
                setTimeout(function() {
                    var _0x4f1ebb = _0x28d8
                      , _0x155909 = _0x5566a8;
                    window[_0x4f1ebb(0x2eb)]({
                        'keyCode': 0x20
                    }),
                    window[_0x155909(0xab)]({
                        'keyCode': 0x20
                    });
                }, 0x32 * _0x1ab00e);
        }
    };
    window[_0x378f4f(0x233)](_0x378f4f(0x197), _0x4a7508);
}());
function setServer(_0x38f942) {
    var _0x499083 = _0x53a645;
    const _0x5423f2 = _0x38f942[_0x499083(0x188)];
    localStorage['setItem'](_0x499083(0x2a9), _0x5423f2),
    console['log'](_0x499083(0x197), _0x5423f2);
}
function setDarkTheme() {
    var _0x19a7ef = _0x53a645;
    const _0x216066 = document[_0x19a7ef(0x1ad)](_0x19a7ef(0x2d3))[_0x19a7ef(0x239)];
    localStorage[_0x19a7ef(0x24b)](_0x19a7ef(0x2d3), _0x216066),
    _0x216066 ? (document[_0x19a7ef(0x214)][_0x19a7ef(0x32e)][_0x19a7ef(0x2e3)] = _0x19a7ef(0x1cd),
    document[_0x19a7ef(0x214)][_0x19a7ef(0x32e)][_0x19a7ef(0x23e)] = _0x19a7ef(0x28f)) : (document[_0x19a7ef(0x214)][_0x19a7ef(0x32e)][_0x19a7ef(0x2e3)] = '',
    document[_0x19a7ef(0x214)][_0x19a7ef(0x32e)]['color'] = '');
}
function setHideSkins() {
    var _0x1108e3 = _0x53a645;
    const _0x35e34f = document[_0x1108e3(0x1ad)](_0x1108e3(0x1ed));
    if (!_0x35e34f)
        return;
    const _0x4d0a18 = _0x35e34f[_0x1108e3(0x239)];
    localStorage[_0x1108e3(0x24b)](_0x1108e3(0x2db), _0x4d0a18);
    const _0x1f4870 = document[_0x1108e3(0x32a)]('img');
    _0x1f4870['forEach'](_0x284304 => {
        var _0x2c60d8 = _0x1108e3;
        try {
            _0x284304[_0x2c60d8(0x19b)] && _0x284304[_0x2c60d8(0x19b)]['includes'](_0x2c60d8(0x28e)) && (_0x284304[_0x2c60d8(0x32e)]['display'] = _0x4d0a18 ? _0x2c60d8(0x227) : '');
        } catch (_0xb30c00) {
            console[_0x2c60d8(0x1df)](_0x2c60d8(0x2b3), _0xb30c00);
        }
    }
    ),
    console['log'](_0x1108e3(0x307), _0x4d0a18 ? 'gizlendi' : _0x1108e3(0x238));
}
window[_0x53a645(0x30e)](_0x53a645(0x315), () => {
    var _0x165be9 = _0x53a645;
    const _0x8eacc5 = document['getElementById'](_0x165be9(0x1ed));
    if (_0x8eacc5) {
        const _0x2ecc8e = localStorage[_0x165be9(0x228)](_0x165be9(0x2db)) === 'true';
        _0x8eacc5[_0x165be9(0x239)] = _0x2ecc8e,
        setHideSkins();
    }
}
);
