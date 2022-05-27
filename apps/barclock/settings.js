(function(back) {
  let s = require('Storage').readJSON("barclock.settings.json", true) || {};

  function saver(key) {
    return value => {
      s[key] = value;
      require('Storage').writeJSON("barclock.settings.json", s);
    }
  }

  const menu = {
    "": {"title": /*LANG*/"Bar Clock"},
    /*LANG*/"< Back": back,
    /*LANG*/"Show date": require("ClockFace_menu").showDate(s.showDate, saver('showDate')),
    /*LANG*/"Load widgets": require("ClockFace_menu").loadWidgets(s.loadWidgets, saver('loadWidgets')),
  }

  E.showMenu(menu);
});
