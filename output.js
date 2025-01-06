//Mon Jan 06 2025 08:13:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x242fed = new _0x4fe6ea("电信抢购"),
  _0x46879c = _0x242fed.isNode() ? require("./sendNotify") : "",
  _0x56bf78 = 1,
  _0x313bf = 0,
  _0x4591e0 = require("fs"),
  _0x1cd733 = require("path");
let _0x4cfec9 = "";
!(async () => {
  const _0x316c86 = _0x1cd733.join(__dirname, "dx.json");
  _0x4591e0.readFile(_0x316c86, {
    "encoding": "utf-8"
  }, (_0x59ee57, _0x3e7896) => {
    {
      if (_0x59ee57) {
        console.error("读取文件ticket失败");
        return;
      }
      const _0x512956 = JSON.parse(_0x3e7896);
      ticket = _0x512956.ticket;
    }
  });
  await _0x242fed.wait(1600);
  await _0x442834();
  await _0xbc178e();
  const _0x17b7d2 = require("node-rsa"),
    _0xa709dd = "-----BEGIN PUBLIC KEY-----\n    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB\n    -----END PUBLIC KEY-----";
  let _0x5e1faa = new _0x17b7d2(_0xa709dd);
  const _0xa278 = {
    "encryptionScheme": "pkcs1"
  };
  _0x5e1faa.setOptions(_0xa278);
  const _0x57c013 = "{\"phone\":\"" + userPhone + "\"}";
  encryptedText = _0x5e1faa.encrypt(_0x57c013, "hex");
  await _0x3f0302();
  const _0x5ce408 = "{\"phone\":\"" + userPhone + "\",\"rightsId\":\"" + id + "\"},\"receiveCount\":1";
  encrypte = _0x5e1faa.encrypt(_0x5ce408, "hex");
  const _0x156a1a = _0x10b100(),
    _0x25c006 = _0x156a1a - shijian - 1300;
  console.log("等待" + _0x25c006 / 1000 + "秒后抢购");
  await _0x242fed.wait(_0x25c006);
  for (var _0x1318f6 = 0; _0x1318f6 < 50; _0x1318f6++) {
    _0x5c4b72();
    const _0x30bf2a = _0x600010(100, 200);
    await _0x242fed.wait(_0x30bf2a);
  }
  await _0x242fed.wait(120000);
  await _0xf65356();
  await _0x881ce2(_0x4cfec9);
})().catch(_0x5cc3b0 => _0x242fed.logErr(_0x5cc3b0)).finally(() => _0x242fed.done());
async function _0x3f0302() {
  await _0x12f2f3();
  await _0x5ada46();
  await _0x2f1b0f();
}
async function _0x12f2f3() {
  let _0x5e2e81 = {
      "url": "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
      "headers": {
        "sign": sign,
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": "{\"para\":\n         \"" + encryptedText + "\"}"
    },
    _0x36d92d = await _0x5722cf(_0x5e2e81, "获取等级");
  try {
    {
      if (_0x36d92d.userInfo.paradiseDressup.level > 1) level = _0x36d92d.userInfo.paradiseDressup.level, console.log("当前云宝" + level + "级");else {
        console.log("等级小于3级取消兑换");
        process.exit(0);
      }
    }
  } catch (_0x303b1c) {}
}
async function _0x5ada46() {
  let _0x5ce115 = {
    "url": "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
    "headers": {
      "sign": sign,
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json;charset=utf-8"
    },
    "body": "{\"para\":\n         \"" + encryptedText + "\"}"
  };
  try {
    let _0x26f568 = await _0x5722cf(_0x5ce115, "获取id"),
      _0x5955b4 = "V" + level,
      _0x1fd08d = _0x26f568[_0x5955b4]?.["find"](_0x3c568f => _0x3c568f.name === "话费");
    if (_0x1fd08d && _0x1fd08d.id) {
      id = _0x1fd08d.id;
      id !== undefined && id !== null ? console.log("id获取成功") : (console.log("id获取失败等待5s重试"), await _0x242fed.wait(5000), await _0x5ada46());
    } else console.log("当前等级不存在可兑换话费"), process.exit(0);
  } catch (_0x2de7ef) {}
}
async function _0x2f1b0f() {
  let _0x1af608 = {
      "url": "https://f.m.suning.com/api/ct.do",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.72.1"
      }
    },
    _0x391b6e = await _0x2ffb91(_0x1af608, "获取网络时间");
  try {
    shijian = _0x391b6e.currentTime;
  } catch (_0x267a6b) {}
}
async function _0xbc178e() {
  let _0x346d95 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x30ef0f = await _0x2ffb91(_0x346d95, "ll");
  hqsjc = _0x30ef0f.ymsjc;
  gong = _0x30ef0f.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) {} else console.error(gong), process.exit();
}
async function _0x5c4b72() {
  let _0xfb1e3a = {
    "url": "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
    "headers": {
      "sign": sign,
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json;charset=utf-8"
    },
    "body": "{\"para\":\n         \"" + encrypte + "\"}"
  };
  _0x5722cf(_0xfb1e3a, "抢购");
}
async function _0xf65356() {
  let _0x2f9a67 = {
      "url": "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
      "headers": {
        "sign": sign,
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": "{\"para\":\n         \"" + encrypte + "\"}"
    },
    _0x5ccce5 = await _0x5722cf(_0x2f9a67, "抢购返回");
  try {
    console.log("" + _0x5ccce5.resoultMsg);
    _0x4cfec9 += "" + _0x5ccce5.resoultMsg;
  } catch (_0xa3786f) {}
}
async function _0x442834() {
  let _0x5c7fb8 = {
      "url": "https://wapside.189.cn:9001/jt-sign/ssoHomLogin?ticket=" + ticket + "",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.72.1"
      }
    },
    _0x15c799 = await _0x2ffb91(_0x5c7fb8, "sign");
  try {
    _0x15c799.resoultCode == 0 ? (sign = _0x15c799.sign, userPhone = _0x15c799.userPhone) : (console.log("ticket过期"), process.exit(0));
  } catch (_0x56d1d5) {}
}
async function _0x44088b(_0x3d0d87, _0xa9142c) {
  return new Promise(_0x451c1b => {
    let _0x2906b9 = [];
    if (_0x3d0d87) {
      if (_0x3d0d87.indexOf("@") !== -1) {
        _0x3d0d87.split("@").forEach(_0x4e9f1 => {
          _0x2906b9.push(_0x4e9f1);
        });
      } else _0x3d0d87.indexOf("\n") !== -1 ? _0x3d0d87.split("\n").forEach(_0x2a466e => {
        _0x2906b9.push(_0x2a466e);
      }) : _0x2906b9.push(_0x3d0d87);
      _0x451c1b(_0x2906b9);
    } else console.log("\n 【" + _0x242fed.name + "】：未填写变量 " + _0xa9142c);
  });
}
async function _0x881ce2(_0x23631) {
  if (!_0x23631) return;
  if (_0x56bf78 > 0) {
    if (_0x242fed.isNode()) {
      {
        let _0x6470d4 = require("./sendNotify");
        await _0x6470d4.sendNotify(_0x242fed.name, _0x23631);
      }
    } else {
      _0x242fed.msg(_0x23631);
    }
  } else console.log(_0x23631);
}
function _0x4726e9(_0x492322) {
  _0x492322 = _0x492322 || 32;
  let _0x6212cc = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x5cdd52 = _0x6212cc.length,
    _0x4962a8 = "";
  for (i = 0; i < _0x492322; i++) _0x4962a8 += _0x6212cc.charAt(Math.floor(Math.random() * _0x5cdd52));
  return _0x4962a8;
}
function _0x600010(_0x187f89, _0xe29e22) {
  return Math.round(Math.random() * (_0xe29e22 - _0x187f89) + _0x187f89);
}
function _0x10b100() {
  const _0x258ef3 = new Date(),
    _0x1f0415 = _0x258ef3.getHours(),
    _0x2b4cd4 = new Date(_0x258ef3.getFullYear(), _0x258ef3.getMonth(), _0x258ef3.getDate(), _0x1f0415 + 1, 0, 0, 0);
  return _0x2b4cd4.getTime();
}
function _0x3efb93() {
  return Math.round(new Date().getTime()).toString();
}
function _0x296309() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0x510031() {
  let _0x1b575a = new Date();
  h = _0x1b575a.getHours();
  return h;
}
function _0x5babca() {
  let _0x52435c = new Date();
  m = _0x52435c.getMinutes();
  return m;
}
function _0x9cb36d(_0xc191ef = new Date()) {
  let _0x67eebf = _0xc191ef.getFullYear().toString().padStart(4, "0"),
    _0x45842c = (_0xc191ef.getMonth() + 1).toString().padStart(2, "0"),
    _0x2bc35e = _0xc191ef.getDate().toString().padStart(2, "0"),
    _0x2be0c8 = _0xc191ef.getHours().toString().padStart(2, "0"),
    _0x5cb780 = _0xc191ef.getMinutes().toString().padStart(2, "0"),
    _0x89d24d = _0xc191ef.getSeconds().toString().padStart(2, "0");
  return "" + _0x67eebf + _0x45842c + _0x2bc35e + _0x2be0c8 + _0x5cb780 + _0x89d24d;
}
function _0x580a06(_0x141f17 = 3000) {
  return new Promise(_0x56f30f => {
    let _0x1b1cb7 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    _0x242fed.get(_0x1b1cb7, async (_0x270810, _0x5213cf, _0x13f692) => {
      try {
        _0x13f692 = JSON.parse(_0x13f692);
        console.log("\n 【网抑云时间】: " + _0x13f692.content + "  by--" + _0x13f692.music);
      } catch (_0x225d38) {
        _0x242fed.logErr(_0x225d38, _0x5213cf);
      } finally {
        _0x56f30f();
      }
    }, _0x141f17);
  });
}
async function _0x2ffb91(_0x1d9709, _0x4b05dc, _0x224b1e = 3000) {
  return new Promise(_0x2bd753 => {
    let _0x5580ad = _0x1d9709;
    if (!_0x4b05dc) {
      {
        let _0x2d8f4a = arguments.callee.toString(),
          _0x43e312 = /function\s*(\w*)/i,
          _0x4bc333 = _0x43e312.exec(_0x2d8f4a);
        _0x4b05dc = _0x4bc333[1];
      }
    }
    _0x313bf && (console.log("\n 【debug】=============== 这是 " + _0x4b05dc + " 请求 url ==============="), console.log(_0x5580ad));
    _0x242fed.get(_0x5580ad, async (_0x8a1d0d, _0x3a0c71, _0x374aa8) => {
      try {
        _0x313bf && (console.log("\n\n 【debug】===============这是 " + _0x4b05dc + " 返回data=============="), console.log(_0x374aa8), console.log("======"), console.log(JSON.parse(_0x374aa8)));
        let _0x574550 = JSON.parse(_0x374aa8);
        _0x2bd753(_0x574550);
      } catch (_0x12d583) {} finally {
        _0x2bd753();
      }
    }, _0x224b1e);
  });
}
async function _0x5722cf(_0x9be7e5, _0x252296, _0x592bce = 500) {
  return new Promise(_0x1281c3 => {
    {
      let _0x3ebb73 = _0x9be7e5;
      if (!_0x252296) {
        {
          let _0x404d28 = arguments.callee.toString(),
            _0x227047 = /function\s*(\w*)/i,
            _0x2b98b6 = _0x227047.exec(_0x404d28);
          _0x252296 = _0x2b98b6[1];
        }
      }
      _0x313bf && (console.log("\n 【debug】=============== 这是 " + _0x252296 + " 请求 url ==============="), console.log(_0x3ebb73));
      _0x242fed.post(_0x3ebb73, async (_0x2eee75, _0x44d977, _0xeb6730) => {
        try {
          if (_0x313bf) {
            console.log("\n\n 【debug】===============这是 " + _0x252296 + " 返回data==============");
            console.log(_0xeb6730);
            console.log("======");
            console.log(JSON.parse(_0xeb6730));
          }
          let _0x5d7544 = JSON.parse(_0xeb6730);
          _0x1281c3(_0x5d7544);
        } catch (_0xa4107d) {} finally {
          _0x1281c3();
        }
      }, _0x592bce);
    }
  });
}
function _0x470626(..._0x1e4ae3) {
  _0x313bf && console.log(..._0x1e4ae3);
}
function _0x30a6e9(_0x198d3b) {
  function _0x1f40e0(_0x3d6510, _0x3c8c99) {
    return _0x3d6510 << _0x3c8c99 | _0x3d6510 >>> 32 - _0x3c8c99;
  }
  function _0x378980(_0x2a462f, _0x20ac51) {
    var _0x2aae3d, _0x46732b, _0x57824a, _0x3902ed, _0x49f789;
    _0x57824a = 2147483648 & _0x2a462f;
    _0x3902ed = 2147483648 & _0x20ac51;
    _0x2aae3d = 1073741824 & _0x2a462f;
    _0x46732b = 1073741824 & _0x20ac51;
    _0x49f789 = (1073741823 & _0x2a462f) + (1073741823 & _0x20ac51);
    return _0x2aae3d & _0x46732b ? 2147483648 ^ _0x49f789 ^ _0x57824a ^ _0x3902ed : _0x2aae3d | _0x46732b ? 1073741824 & _0x49f789 ? 3221225472 ^ _0x49f789 ^ _0x57824a ^ _0x3902ed : 1073741824 ^ _0x49f789 ^ _0x57824a ^ _0x3902ed : _0x49f789 ^ _0x57824a ^ _0x3902ed;
  }
  function _0x14c92b(_0x3dcd53, _0x2ca070, _0x3d505d) {
    return _0x3dcd53 & _0x2ca070 | ~_0x3dcd53 & _0x3d505d;
  }
  function _0x37e0bc(_0x2c1de1, _0x4014cc, _0x52ea01) {
    return _0x2c1de1 & _0x52ea01 | _0x4014cc & ~_0x52ea01;
  }
  function _0x27bdac(_0x2792c2, _0x2ec046, _0x156fd7) {
    return _0x2792c2 ^ _0x2ec046 ^ _0x156fd7;
  }
  function _0x32d1f2(_0x137287, _0x497b0a, _0x526fc8) {
    return _0x497b0a ^ (_0x137287 | ~_0x526fc8);
  }
  function _0x16d986(_0x34accf, _0x455d17, _0x3486a0, _0x2f9d3a, _0x1442a7, _0x3bd06c, _0x207a6c) {
    _0x34accf = _0x378980(_0x34accf, _0x378980(_0x378980(_0x14c92b(_0x455d17, _0x3486a0, _0x2f9d3a), _0x1442a7), _0x207a6c));
    return _0x378980(_0x1f40e0(_0x34accf, _0x3bd06c), _0x455d17);
  }
  function _0x364adb(_0x52fc63, _0x765b1a, _0x392619, _0x436557, _0x624edd, _0x881736, _0x4946fc) {
    _0x52fc63 = _0x378980(_0x52fc63, _0x378980(_0x378980(_0x37e0bc(_0x765b1a, _0x392619, _0x436557), _0x624edd), _0x4946fc));
    return _0x378980(_0x1f40e0(_0x52fc63, _0x881736), _0x765b1a);
  }
  function _0x254c4b(_0x2a8029, _0xd1da80, _0x132424, _0x30872a, _0x2427de, _0x1cfd1d, _0x5c373d) {
    _0x2a8029 = _0x378980(_0x2a8029, _0x378980(_0x378980(_0x27bdac(_0xd1da80, _0x132424, _0x30872a), _0x2427de), _0x5c373d));
    return _0x378980(_0x1f40e0(_0x2a8029, _0x1cfd1d), _0xd1da80);
  }
  function _0x1ab3c6(_0x316713, _0x5a2a45, _0x1f4ea8, _0x2d80a5, _0x151f45, _0x29faa8, _0x5f7425) {
    _0x316713 = _0x378980(_0x316713, _0x378980(_0x378980(_0x32d1f2(_0x5a2a45, _0x1f4ea8, _0x2d80a5), _0x151f45), _0x5f7425));
    return _0x378980(_0x1f40e0(_0x316713, _0x29faa8), _0x5a2a45);
  }
  function _0x56dbdf(_0x54fc88) {
    {
      for (var _0x3ce12e, _0x541103 = _0x54fc88.length, _0x115d22 = _0x541103 + 8, _0x1effaa = (_0x115d22 - _0x115d22 % 64) / 64, _0x8ef2da = 16 * (_0x1effaa + 1), _0x171f25 = new Array(_0x8ef2da - 1), _0xa1a5e1 = 0, _0x5aecfb = 0; _0x541103 > _0x5aecfb;) _0x3ce12e = (_0x5aecfb - _0x5aecfb % 4) / 4, _0xa1a5e1 = _0x5aecfb % 4 * 8, _0x171f25[_0x3ce12e] = _0x171f25[_0x3ce12e] | _0x54fc88.charCodeAt(_0x5aecfb) << _0xa1a5e1, _0x5aecfb++;
      _0x3ce12e = (_0x5aecfb - _0x5aecfb % 4) / 4;
      _0xa1a5e1 = _0x5aecfb % 4 * 8;
      _0x171f25[_0x3ce12e] = _0x171f25[_0x3ce12e] | 128 << _0xa1a5e1;
      _0x171f25[_0x8ef2da - 2] = _0x541103 << 3;
      _0x171f25[_0x8ef2da - 1] = _0x541103 >>> 29;
      return _0x171f25;
    }
  }
  function _0x1718ad(_0x4b74cd) {
    var _0x26747c,
      _0x61f5ba,
      _0x541dbf = "",
      _0x52e888 = "";
    for (_0x61f5ba = 0; 3 >= _0x61f5ba; _0x61f5ba++) _0x26747c = _0x4b74cd >>> 8 * _0x61f5ba & 255, _0x52e888 = "0" + _0x26747c.toString(16), _0x541dbf += _0x52e888.substr(_0x52e888.length - 2, 2);
    return _0x541dbf;
  }
  function _0x2c910f(_0x29284f) {
    _0x29284f = _0x29284f.replace(/\r\n/g, "\n");
    for (var _0x250d1b = "", _0x3d5e9d = 0; _0x3d5e9d < _0x29284f.length; _0x3d5e9d++) {
      var _0x270b94 = _0x29284f.charCodeAt(_0x3d5e9d);
      128 > _0x270b94 ? _0x250d1b += String.fromCharCode(_0x270b94) : _0x270b94 > 127 && 2048 > _0x270b94 ? (_0x250d1b += String.fromCharCode(_0x270b94 >> 6 | 192), _0x250d1b += String.fromCharCode(63 & _0x270b94 | 128)) : (_0x250d1b += String.fromCharCode(_0x270b94 >> 12 | 224), _0x250d1b += String.fromCharCode(_0x270b94 >> 6 & 63 | 128), _0x250d1b += String.fromCharCode(63 & _0x270b94 | 128));
    }
    return _0x250d1b;
  }
  var _0x238397,
    _0x7956c4,
    _0x2d7c3d,
    _0x27eee5,
    _0x15e937,
    _0xc6995,
    _0xfe34b7,
    _0x294a6d,
    _0x137dd4,
    _0x3ac6a3 = [],
    _0x18a20a = 7,
    _0x1f4627 = 12,
    _0x3949f8 = 17,
    _0x4ca689 = 22,
    _0x489b41 = 5,
    _0x19af2b = 9,
    _0x175594 = 14,
    _0x1ecde7 = 20,
    _0x1c959a = 4,
    _0x386e9d = 11,
    _0x4a672b = 16,
    _0x35101c = 23,
    _0xf66ebb = 6,
    _0x34cc89 = 10,
    _0x369951 = 15,
    _0x2b81ba = 21;
  for (_0x198d3b = _0x2c910f(_0x198d3b), _0x3ac6a3 = _0x56dbdf(_0x198d3b), _0xc6995 = 1732584193, _0xfe34b7 = 4023233417, _0x294a6d = 2562383102, _0x137dd4 = 271733878, _0x238397 = 0; _0x238397 < _0x3ac6a3.length; _0x238397 += 16) _0x7956c4 = _0xc6995, _0x2d7c3d = _0xfe34b7, _0x27eee5 = _0x294a6d, _0x15e937 = _0x137dd4, _0xc6995 = _0x16d986(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 0], _0x18a20a, 3614090360), _0x137dd4 = _0x16d986(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 1], _0x1f4627, 3905402710), _0x294a6d = _0x16d986(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 2], _0x3949f8, 606105819), _0xfe34b7 = _0x16d986(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 3], _0x4ca689, 3250441966), _0xc6995 = _0x16d986(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 4], _0x18a20a, 4118548399), _0x137dd4 = _0x16d986(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 5], _0x1f4627, 1200080426), _0x294a6d = _0x16d986(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 6], _0x3949f8, 2821735955), _0xfe34b7 = _0x16d986(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 7], _0x4ca689, 4249261313), _0xc6995 = _0x16d986(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 8], _0x18a20a, 1770035416), _0x137dd4 = _0x16d986(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 9], _0x1f4627, 2336552879), _0x294a6d = _0x16d986(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 10], _0x3949f8, 4294925233), _0xfe34b7 = _0x16d986(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 11], _0x4ca689, 2304563134), _0xc6995 = _0x16d986(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 12], _0x18a20a, 1804603682), _0x137dd4 = _0x16d986(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 13], _0x1f4627, 4254626195), _0x294a6d = _0x16d986(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 14], _0x3949f8, 2792965006), _0xfe34b7 = _0x16d986(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 15], _0x4ca689, 1236535329), _0xc6995 = _0x364adb(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 1], _0x489b41, 4129170786), _0x137dd4 = _0x364adb(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 6], _0x19af2b, 3225465664), _0x294a6d = _0x364adb(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 11], _0x175594, 643717713), _0xfe34b7 = _0x364adb(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 0], _0x1ecde7, 3921069994), _0xc6995 = _0x364adb(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 5], _0x489b41, 3593408605), _0x137dd4 = _0x364adb(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 10], _0x19af2b, 38016083), _0x294a6d = _0x364adb(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 15], _0x175594, 3634488961), _0xfe34b7 = _0x364adb(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 4], _0x1ecde7, 3889429448), _0xc6995 = _0x364adb(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 9], _0x489b41, 568446438), _0x137dd4 = _0x364adb(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 14], _0x19af2b, 3275163606), _0x294a6d = _0x364adb(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 3], _0x175594, 4107603335), _0xfe34b7 = _0x364adb(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 8], _0x1ecde7, 1163531501), _0xc6995 = _0x364adb(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 13], _0x489b41, 2850285829), _0x137dd4 = _0x364adb(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 2], _0x19af2b, 4243563512), _0x294a6d = _0x364adb(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 7], _0x175594, 1735328473), _0xfe34b7 = _0x364adb(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 12], _0x1ecde7, 2368359562), _0xc6995 = _0x254c4b(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 5], _0x1c959a, 4294588738), _0x137dd4 = _0x254c4b(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 8], _0x386e9d, 2272392833), _0x294a6d = _0x254c4b(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 11], _0x4a672b, 1839030562), _0xfe34b7 = _0x254c4b(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 14], _0x35101c, 4259657740), _0xc6995 = _0x254c4b(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 1], _0x1c959a, 2763975236), _0x137dd4 = _0x254c4b(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 4], _0x386e9d, 1272893353), _0x294a6d = _0x254c4b(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 7], _0x4a672b, 4139469664), _0xfe34b7 = _0x254c4b(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 10], _0x35101c, 3200236656), _0xc6995 = _0x254c4b(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 13], _0x1c959a, 681279174), _0x137dd4 = _0x254c4b(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 0], _0x386e9d, 3936430074), _0x294a6d = _0x254c4b(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 3], _0x4a672b, 3572445317), _0xfe34b7 = _0x254c4b(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 6], _0x35101c, 76029189), _0xc6995 = _0x254c4b(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 9], _0x1c959a, 3654602809), _0x137dd4 = _0x254c4b(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 12], _0x386e9d, 3873151461), _0x294a6d = _0x254c4b(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 15], _0x4a672b, 530742520), _0xfe34b7 = _0x254c4b(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 2], _0x35101c, 3299628645), _0xc6995 = _0x1ab3c6(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 0], _0xf66ebb, 4096336452), _0x137dd4 = _0x1ab3c6(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 7], _0x34cc89, 1126891415), _0x294a6d = _0x1ab3c6(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 14], _0x369951, 2878612391), _0xfe34b7 = _0x1ab3c6(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 5], _0x2b81ba, 4237533241), _0xc6995 = _0x1ab3c6(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 12], _0xf66ebb, 1700485571), _0x137dd4 = _0x1ab3c6(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 3], _0x34cc89, 2399980690), _0x294a6d = _0x1ab3c6(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 10], _0x369951, 4293915773), _0xfe34b7 = _0x1ab3c6(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 1], _0x2b81ba, 2240044497), _0xc6995 = _0x1ab3c6(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 8], _0xf66ebb, 1873313359), _0x137dd4 = _0x1ab3c6(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 15], _0x34cc89, 4264355552), _0x294a6d = _0x1ab3c6(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 6], _0x369951, 2734768916), _0xfe34b7 = _0x1ab3c6(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 13], _0x2b81ba, 1309151649), _0xc6995 = _0x1ab3c6(_0xc6995, _0xfe34b7, _0x294a6d, _0x137dd4, _0x3ac6a3[_0x238397 + 4], _0xf66ebb, 4149444226), _0x137dd4 = _0x1ab3c6(_0x137dd4, _0xc6995, _0xfe34b7, _0x294a6d, _0x3ac6a3[_0x238397 + 11], _0x34cc89, 3174756917), _0x294a6d = _0x1ab3c6(_0x294a6d, _0x137dd4, _0xc6995, _0xfe34b7, _0x3ac6a3[_0x238397 + 2], _0x369951, 718787259), _0xfe34b7 = _0x1ab3c6(_0xfe34b7, _0x294a6d, _0x137dd4, _0xc6995, _0x3ac6a3[_0x238397 + 9], _0x2b81ba, 3951481745), _0xc6995 = _0x378980(_0xc6995, _0x7956c4), _0xfe34b7 = _0x378980(_0xfe34b7, _0x2d7c3d), _0x294a6d = _0x378980(_0x294a6d, _0x27eee5), _0x137dd4 = _0x378980(_0x137dd4, _0x15e937);
  var _0x189faa = _0x1718ad(_0xc6995) + _0x1718ad(_0xfe34b7) + _0x1718ad(_0x294a6d) + _0x1718ad(_0x137dd4);
  return _0x189faa.toLowerCase();
}
function _0x4fe6ea(_0x439518, _0x1e3b49) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x19612f {
    constructor(_0x1ac484) {
      this.env = _0x1ac484;
    }
    ["send"](_0x2cb098, _0x4c8bd4 = "GET") {
      {
        _0x2cb098 = "string" == typeof _0x2cb098 ? {
          "url": _0x2cb098
        } : _0x2cb098;
        let _0x4acf8e = this.get;
        "POST" === _0x4c8bd4 && (_0x4acf8e = this.post);
        return new Promise((_0x544809, _0x4943dd) => {
          _0x4acf8e.call(this, _0x2cb098, (_0x51b425, _0x146900, _0x206d67) => {
            _0x51b425 ? _0x4943dd(_0x51b425) : _0x544809(_0x146900);
          });
        });
      }
    }
    ["get"](_0x11a32c) {
      return this.send.call(this.env, _0x11a32c);
    }
    ["post"](_0xdaab96) {
      return this.send.call(this.env, _0xdaab96, "POST");
    }
  }
  return new class {
    constructor(_0x4da808, _0x3ba3ea) {
      this.name = _0x4da808;
      this.http = new _0x19612f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3ba3ea);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5a1658, _0xa3cab8 = null) {
      try {
        return JSON.parse(_0x5a1658);
      } catch {
        return _0xa3cab8;
      }
    }
    ["toStr"](_0x286570, _0x4bf5f1 = null) {
      try {
        return JSON.stringify(_0x286570);
      } catch {
        return _0x4bf5f1;
      }
    }
    ["getjson"](_0x6d118a, _0x78ef4f) {
      let _0x582a15 = _0x78ef4f;
      const _0x3af145 = this.getdata(_0x6d118a);
      if (_0x3af145) try {
        _0x582a15 = JSON.parse(this.getdata(_0x6d118a));
      } catch {}
      return _0x582a15;
    }
    ["setjson"](_0x4310e1, _0x5e28d1) {
      try {
        return this.setdata(JSON.stringify(_0x4310e1), _0x5e28d1);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x53b772) {
      return new Promise(_0x105201 => {
        this.get({
          "url": _0x53b772
        }, (_0x502c6b, _0x6706f5, _0x79b90d) => _0x105201(_0x79b90d));
      });
    }
    ["runScript"](_0x131a60, _0x5e78d8) {
      return new Promise(_0x1798bd => {
        let _0x23e511 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x23e511 = _0x23e511 ? _0x23e511.replace(/\n/g, "").trim() : _0x23e511;
        let _0x48521 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x48521 = _0x48521 ? 1 * _0x48521 : 20;
        _0x48521 = _0x5e78d8 && _0x5e78d8.timeout ? _0x5e78d8.timeout : _0x48521;
        const [_0x53d35e, _0x2834e5] = _0x23e511.split("@"),
          _0xbb57c1 = {
            "url": "http://" + _0x2834e5 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x131a60,
              "mock_type": "cron",
              "timeout": _0x48521
            },
            "headers": {
              "X-Key": _0x53d35e,
              "Accept": "*/*"
            }
          };
        this.post(_0xbb57c1, (_0x527c88, _0xe8a326, _0x100d78) => _0x1798bd(_0x100d78));
      }).catch(_0x35ef78 => this.logErr(_0x35ef78));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x27ffa1 = this.path.resolve(this.dataFile),
          _0x3a9cd1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x472606 = this.fs.existsSync(_0x27ffa1),
          _0x314301 = !_0x472606 && this.fs.existsSync(_0x3a9cd1);
        if (!_0x472606 && !_0x314301) return {};
        {
          const _0x5653f7 = _0x472606 ? _0x27ffa1 : _0x3a9cd1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5653f7));
          } catch (_0x323456) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x40334c = this.path.resolve(this.dataFile),
            _0x52e0cc = this.path.resolve(process.cwd(), this.dataFile),
            _0x26ea6b = this.fs.existsSync(_0x40334c),
            _0x2515dc = !_0x26ea6b && this.fs.existsSync(_0x52e0cc),
            _0x21879a = JSON.stringify(this.data);
          _0x26ea6b ? this.fs.writeFileSync(_0x40334c, _0x21879a) : _0x2515dc ? this.fs.writeFileSync(_0x52e0cc, _0x21879a) : this.fs.writeFileSync(_0x40334c, _0x21879a);
        }
      }
    }
    ["lodash_get"](_0x33defe, _0x217576, _0x5d9d5f) {
      {
        const _0x21fc86 = _0x217576.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x12babe = _0x33defe;
        for (const _0x27ce9e of _0x21fc86) if (_0x12babe = Object(_0x12babe)[_0x27ce9e], undefined === _0x12babe) return _0x5d9d5f;
        return _0x12babe;
      }
    }
    ["lodash_set"](_0x538750, _0x5458bf, _0x538248) {
      return Object(_0x538750) !== _0x538750 ? _0x538750 : (Array.isArray(_0x5458bf) || (_0x5458bf = _0x5458bf.toString().match(/[^.[\]]+/g) || []), _0x5458bf.slice(0, -1).reduce((_0x4d3671, _0x186ad4, _0x52c2e4) => Object(_0x4d3671[_0x186ad4]) === _0x4d3671[_0x186ad4] ? _0x4d3671[_0x186ad4] : _0x4d3671[_0x186ad4] = Math.abs(_0x5458bf[_0x52c2e4 + 1]) >> 0 == +_0x5458bf[_0x52c2e4 + 1] ? [] : {}, _0x538750)[_0x5458bf[_0x5458bf.length - 1]] = _0x538248, _0x538750);
    }
    ["getdata"](_0x43b4d4) {
      {
        let _0x3f2103 = this.getval(_0x43b4d4);
        if (/^@/.test(_0x43b4d4)) {
          const [, _0x9672aa, _0x3d5445] = /^@(.*?)\.(.*?)$/.exec(_0x43b4d4),
            _0x5eae46 = _0x9672aa ? this.getval(_0x9672aa) : "";
          if (_0x5eae46) try {
            const _0x3de117 = JSON.parse(_0x5eae46);
            _0x3f2103 = _0x3de117 ? this.lodash_get(_0x3de117, _0x3d5445, "") : _0x3f2103;
          } catch (_0x4e4345) {
            _0x3f2103 = "";
          }
        }
        return _0x3f2103;
      }
    }
    ["setdata"](_0x1768da, _0x19a30f) {
      {
        let _0xaf68cc = false;
        if (/^@/.test(_0x19a30f)) {
          const [, _0x5d54b2, _0x5102cd] = /^@(.*?)\.(.*?)$/.exec(_0x19a30f),
            _0x7b7110 = this.getval(_0x5d54b2),
            _0x3ad90a = _0x5d54b2 ? "null" === _0x7b7110 ? null : _0x7b7110 || "{}" : "{}";
          try {
            {
              const _0x89f7fb = JSON.parse(_0x3ad90a);
              this.lodash_set(_0x89f7fb, _0x5102cd, _0x1768da);
              _0xaf68cc = this.setval(JSON.stringify(_0x89f7fb), _0x5d54b2);
            }
          } catch (_0x1ed228) {
            {
              const _0x4d1f80 = {};
              this.lodash_set(_0x4d1f80, _0x5102cd, _0x1768da);
              _0xaf68cc = this.setval(JSON.stringify(_0x4d1f80), _0x5d54b2);
            }
          }
        } else _0xaf68cc = this.setval(_0x1768da, _0x19a30f);
        return _0xaf68cc;
      }
    }
    ["getval"](_0xaede17) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xaede17) : this.isQuanX() ? $prefs.valueForKey(_0xaede17) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xaede17]) : this.data && this.data[_0xaede17] || null;
    }
    ["setval"](_0x83ab32, _0x21ff19) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x83ab32, _0x21ff19) : this.isQuanX() ? $prefs.setValueForKey(_0x83ab32, _0x21ff19) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x21ff19] = _0x83ab32, this.writedata(), true) : this.data && this.data[_0x21ff19] || null;
    }
    ["initGotEnv"](_0x30827c) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x30827c && (_0x30827c.headers = _0x30827c.headers ? _0x30827c.headers : {}, undefined === _0x30827c.headers.Cookie && undefined === _0x30827c.cookieJar && (_0x30827c.cookieJar = this.ckjar));
    }
    ["get"](_0x1c70ac, _0x28b64c = () => {}) {
      _0x1c70ac.headers && (delete _0x1c70ac.headers["Content-Type"], delete _0x1c70ac.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1c70ac.headers = _0x1c70ac.headers || {}, Object.assign(_0x1c70ac.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x1c70ac, (_0x4836c1, _0x1293df, _0x397136) => {
        !_0x4836c1 && _0x1293df && (_0x1293df.body = _0x397136, _0x1293df.statusCode = _0x1293df.status);
        _0x28b64c(_0x4836c1, _0x1293df, _0x397136);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1c70ac.opts = _0x1c70ac.opts || {}, Object.assign(_0x1c70ac.opts, {
        "hints": false
      })), $task.fetch(_0x1c70ac).then(_0x37ae95 => {
        {
          const {
            statusCode: _0x1ef4f4,
            statusCode: _0x46218f,
            headers: _0x628ec4,
            body: _0x3d7ad3
          } = _0x37ae95;
          _0x28b64c(null, {
            "status": _0x1ef4f4,
            "statusCode": _0x46218f,
            "headers": _0x628ec4,
            "body": _0x3d7ad3
          }, _0x3d7ad3);
        }
      }, _0x422b8e => _0x28b64c(_0x422b8e))) : this.isNode() && (this.initGotEnv(_0x1c70ac), this.got(_0x1c70ac).on("redirect", (_0x1ddfc1, _0x150690) => {
        try {
          if (_0x1ddfc1.headers["set-cookie"]) {
            const _0x3302d3 = _0x1ddfc1.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x3302d3 && this.ckjar.setCookieSync(_0x3302d3, null);
            _0x150690.cookieJar = this.ckjar;
          }
        } catch (_0x3066a2) {
          this.logErr(_0x3066a2);
        }
      }).then(_0x2ba125 => {
        const {
          statusCode: _0x6c201a,
          statusCode: _0x37674d,
          headers: _0x2ceb36,
          body: _0x349031
        } = _0x2ba125;
        _0x28b64c(null, {
          "status": _0x6c201a,
          "statusCode": _0x37674d,
          "headers": _0x2ceb36,
          "body": _0x349031
        }, _0x349031);
      }, _0x3bf79b => {
        const {
          message: _0x4ae22a,
          response: _0x31eae5
        } = _0x3bf79b;
        _0x28b64c(_0x4ae22a, _0x31eae5, _0x31eae5 && _0x31eae5.body);
      }));
    }
    ["post"](_0x249991, _0x27822a = () => {}) {
      {
        if (_0x249991.body && _0x249991.headers && !_0x249991.headers["Content-Type"] && (_0x249991.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x249991.headers && delete _0x249991.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x249991.headers = _0x249991.headers || {}, Object.assign(_0x249991.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(_0x249991, (_0x49a42c, _0x6bfded, _0x562f66) => {
          !_0x49a42c && _0x6bfded && (_0x6bfded.body = _0x562f66, _0x6bfded.statusCode = _0x6bfded.status);
          _0x27822a(_0x49a42c, _0x6bfded, _0x562f66);
        });else {
          if (this.isQuanX()) _0x249991.method = "POST", this.isNeedRewrite && (_0x249991.opts = _0x249991.opts || {}, Object.assign(_0x249991.opts, {
            "hints": false
          })), $task.fetch(_0x249991).then(_0x4ae13d => {
            {
              const {
                statusCode: _0x24cf1e,
                statusCode: _0x50c341,
                headers: _0x10b0bf,
                body: _0x22cd2c
              } = _0x4ae13d;
              _0x27822a(null, {
                "status": _0x24cf1e,
                "statusCode": _0x50c341,
                "headers": _0x10b0bf,
                "body": _0x22cd2c
              }, _0x22cd2c);
            }
          }, _0x4dab85 => _0x27822a(_0x4dab85));else {
            if (this.isNode()) {
              this.initGotEnv(_0x249991);
              const {
                url: _0x2364fc,
                ..._0x4fb65c
              } = _0x249991;
              this.got.post(_0x2364fc, _0x4fb65c).then(_0x54e737 => {
                {
                  const {
                    statusCode: _0x1e9ba8,
                    statusCode: _0x5c63a0,
                    headers: _0x4fbe21,
                    body: _0x1371a0
                  } = _0x54e737;
                  _0x27822a(null, {
                    "status": _0x1e9ba8,
                    "statusCode": _0x5c63a0,
                    "headers": _0x4fbe21,
                    "body": _0x1371a0
                  }, _0x1371a0);
                }
              }, _0x3b5a44 => {
                {
                  const {
                    message: _0x4a6a85,
                    response: _0x235882
                  } = _0x3b5a44;
                  _0x27822a(_0x4a6a85, _0x235882, _0x235882 && _0x235882.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](_0x61fe91, _0x384d54 = null) {
      const _0x518d67 = _0x384d54 ? new Date(_0x384d54) : new Date();
      let _0x589269 = {
        "M+": _0x518d67.getMonth() + 1,
        "d+": _0x518d67.getDate(),
        "H+": _0x518d67.getHours(),
        "m+": _0x518d67.getMinutes(),
        "s+": _0x518d67.getSeconds(),
        "q+": Math.floor((_0x518d67.getMonth() + 3) / 3),
        "S": _0x518d67.getMilliseconds()
      };
      /(y+)/.test(_0x61fe91) && (_0x61fe91 = _0x61fe91.replace(RegExp.$1, (_0x518d67.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2290be in _0x589269) new RegExp("(" + _0x2290be + ")").test(_0x61fe91) && (_0x61fe91 = _0x61fe91.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x589269[_0x2290be] : ("00" + _0x589269[_0x2290be]).substr(("" + _0x589269[_0x2290be]).length)));
      return _0x61fe91;
    }
    ["msg"](_0x293126 = _0x439518, _0x545fed = "", _0x1e9414 = "", _0x1cc2c4) {
      const _0x34550a = _0x4b95f3 => {
        if (!_0x4b95f3) return _0x4b95f3;
        if ("string" == typeof _0x4b95f3) return this.isLoon() ? _0x4b95f3 : this.isQuanX() ? {
          "open-url": _0x4b95f3
        } : this.isSurge() ? {
          "url": _0x4b95f3
        } : undefined;
        if ("object" == typeof _0x4b95f3) {
          {
            if (this.isLoon()) {
              {
                let _0x33d302 = _0x4b95f3.openUrl || _0x4b95f3.url || _0x4b95f3["open-url"],
                  _0x147dce = _0x4b95f3.mediaUrl || _0x4b95f3["media-url"];
                return {
                  "openUrl": _0x33d302,
                  "mediaUrl": _0x147dce
                };
              }
            }
            if (this.isQuanX()) {
              {
                let _0x599a68 = _0x4b95f3["open-url"] || _0x4b95f3.url || _0x4b95f3.openUrl,
                  _0x1b780e = _0x4b95f3["media-url"] || _0x4b95f3.mediaUrl;
                return {
                  "open-url": _0x599a68,
                  "media-url": _0x1b780e
                };
              }
            }
            if (this.isSurge()) {
              {
                let _0x51cb5d = _0x4b95f3.url || _0x4b95f3.openUrl || _0x4b95f3["open-url"];
                return {
                  "url": _0x51cb5d
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x293126, _0x545fed, _0x1e9414, _0x34550a(_0x1cc2c4)) : this.isQuanX() && $notify(_0x293126, _0x545fed, _0x1e9414, _0x34550a(_0x1cc2c4))), !this.isMuteLog) {
        {
          let _0x17f403 = ["", "==============📣系统通知📣=============="];
          _0x17f403.push(_0x293126);
          _0x545fed && _0x17f403.push(_0x545fed);
          _0x1e9414 && _0x17f403.push(_0x1e9414);
          console.log(_0x17f403.join("\n"));
          this.logs = this.logs.concat(_0x17f403);
        }
      }
    }
    ["log"](..._0x582fa9) {
      _0x582fa9.length > 0 && (this.logs = [...this.logs, ..._0x582fa9]);
      console.log(_0x582fa9.join(this.logSeparator));
    }
    ["logErr"](_0x2fefbc, _0x510f61) {
      {
        const _0xc53d94 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0xc53d94 ? this.log("", "❗️" + this.name + ", 错误!", _0x2fefbc.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2fefbc);
      }
    }
    ["wait"](_0x36637c) {
      return new Promise(_0x4a1331 => setTimeout(_0x4a1331, _0x36637c));
    }
    ["done"](_0x2d96d1 = {}) {
      const _0x79243c = new Date().getTime(),
        _0xbf2d07 = (_0x79243c - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0xbf2d07 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x2d96d1);
    }
  }(_0x439518, _0x1e3b49);
}