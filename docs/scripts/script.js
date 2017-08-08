
function Stock(data, i) {
  return {
    key: i,
    name: data[0],
    servingUnit: data[1],
    water: [data[2], ''],
    carbon: [data[3], ''],
    calories: [data[4], ''],
    protein: [data[5], 'g'],
    fat: [data[6], 'g'],
    saturatedFat: [data[8], 'g'],
    sugar: [data[7], 'g'],
    sodium: [data[9], 'mg'],
    cholesterol: [data[10], 'mg'],
    lives: [data[11], ''],
    feed: [data[12], ''],
    meals: [data[13], ''],
    land: [data[14], ''],
    healthcare: [data[15], ''],
    unitsPerServing: data[16],
    group: data[17],
    icon: data[18]
  }
}
//console.log(stocks);
stocks = stocks.map(Stock)
stocksUs = stocksUs.map(Stock)
//console.log(stocks);

var $selects = $('.stockSelect') // input for meal
var $quantity = $('#numberOfStocks') // input for number of servings


function toLocale(num, dig) {
  var dig = typeof dig == "undefined" ? 2 : dig
  if (typeof num == 'number')
    return num.toLocaleString('en-US', {
      minimumFractionDigits: dig,
      maximumFractionDigits: dig
    })
}

function format(data, multiplier, digits, a, b, unit) {
  data = data.slice()

  digits = unit == "$" ? 2 : digits
  data[0] = toLocale(+(data[0] * multiplier), digits) //.toFixed(digits)).toLocaleString();
//  console.log(data[0])
  if (unit == "$") {
    data[0] = ["$", data[0]].join(" ");
  }

  if (a == "bad" && data[2] == " + ") {
    data[0] = "<span class='color-red'>" + data[2] + "  " + data[0] + "</span>"
  }

  if (a == "bad" && data[2] == " - ") {
    data[0] = "<span class='color-green'>" + data[2] + " " + data[0] + "</span>"
  }

  else if (a == "good" && data[2] == " - ") {
    data[0] = "<span class='color-red'>" + data[2] + " " + data[0] + "</span>"
  }
  else if (a == "good" && data[2] == " + ") {
    data[0] = "<span class='color-green'>" + data[2] + " " + data[0] + "</span>"
  }
  if (a == "bad" && data[2] == "use") {
    data[0] = "<span class='color-red'>" + data[2] + " " + data[0] + "</span>"
  }
  if (a == "bad" && data[2] == "save") {
    data[0] = "<span class='color-green'>" + data[2] + " " + data[0] + "</span>"
  }
  else if (a == "good" && data[2] == "save") {
    data[0] = "<span class='color-red'>" + data[2] + " " + data[0] + "</span>"
  }
  else if (a == "good" && data[2] == "use") {
    data[0] = "<span class='color-green'>" + data[2] + " " + data[0] + "</span>"
  }

  if (b == 'preserve') {
    var a = "<span class='color-green'>"
    var b = "<span class='color-red'>"

    if (data[0].indexOf(a) > -1) {
      data[0] = data[0].replace(a, b)
    } else {
      data[0] = data[0].replace(b, a)
    }
  }

  data[1] = "<span style='color:#212121'>" + data[1] + "</span>"
  var temp = [];
  temp = [data[0], data[1]];

  return temp.join(' ');
}

function Row(val, desc, c) {
  var one = (c.length > 2) ? c[0][0] * c[2] : 0,
    two = (c.length > 2) ? c[1][0] * c[2] : 0,
    one_s = one.toLocaleString(),
    two_s = two.toLocaleString()

  var td = `
      <tr>
        <td class="collapsing" style="white-space: nowrap; text-align:center">
          <div class="ui green basic button" data-first="${one}" data-second="${two}">
            <i class="vals">${val}</i>
          </div>
          <div class="sub-vals">${one_s} vs ${two_s}</div>
        </td>
        <td class="collapsing btn-item" style="width:100%; text-align:center" data-first="${one}" data-second="${two}">
          ${desc}
          <canvas></canvas>
        </td>
      </tr>
  `
  return td
  console.log(td);
}

function format2(data, multiplier, digits, a, b, unit) {
  data = data.slice()
  data[0] = (+(data[0] * multiplier).toFixed(digits)).toLocaleString();
//  console.log(data[0]);
  if (a == "use" && data[2] == " + ") {
    data[0] = "<span class='color-red'>" + data[0] + "</span>"
  }
  if (a == "use" && data[2] == " - ") {
    data[0] = "<span class='color-green'>" + data[0] + "</span>"
  }
  else if (a == "emit" && data[2] == "use") {
    data[0] = "<span class='color-green'>" + data[0] + "</span>"
  }
  else if (a == "emit" && data[2] == "save") {
    data[0] = "<span class='color-red'>" + data[0] + "</span>"
  }
  if (a == "consumegood" && data[2] == "more") {
    data[0] = "<span class='color-green'>" + data[0] + "</span>"
  }
  if (a == "consumegood" && data[2] == "less") {
    data[0] = "<span class='color-red'>" + data[0] + "</span>"
  }
  var temp = [];
  if (unit == "$") {
    temp = [data[2], "$", data[0], data[1]];
  } else {
    temp = [data[2], data[0], data[1]];
  }
  return temp.join(' ');
}

function stockFacts(stock, quantity, d) {
//  console.log('stockFacts', stock);
  return [
    format(stock.water, quantity, 2, "bad", "use") + ' gallons of water<br>' +
    format(stock.carbon, quantity, 2, "bad", "emit") + ' pounds of carbon dioxide and methane equivalents <br>' +
    format(stock.calories, quantity, 2, "bad", "consume") + ' calories<br>' +
    format(stock.protein, quantity, 2, "good", "consumegood") + ' of protein<br>' +
    format(stock.fat, quantity, 3, "bad", "consume") + ' of fat<br>' +
    format(stock.saturatedFat, quantity, 2, "bad", "consume") + ' of saturated fat<br>' +
    format(stock.sugar, quantity, 2, "bad", "consume") + ' of sugar<br>' +
    format(stock.sodium, quantity, 2, "bad", "consume") + ' of sodium<br>' +
    format(stock.cholesterol, quantity, 2, "bad", "consume") + ' of cholesterol<br>' +
    format(stock.lives, quantity, 5, "bad", "save") + ' animal lives<br>' +
    format(stock.feed, quantity, 2, "bad", "require") + ' pounds of feed<br>' +
    format(stock.meals, quantity, 2, "bad", "preserve") + ' meals made from feed<br>' +
    format(stock.land, quantity, 2, "bad", "require") + ' square feet of land needed<br>' +
    format(stock.healthcare, quantity, 2, "bad", "save", "$") + ' in projected healthcare costs<br>'
  ]
}

function stockFactsEnv(stock, quantity, d) {
//  console.log('stockFactsEnv', stock);
  return [
    `${Row(format(stock.water, quantity, 2, "bad", "use"), "gallons of water", [d[0].water, d[1].water, quantity])}` +
    `${Row(format(stock.carbon, quantity, 2, "bad", "emit"), "pounds of carbon dioxide and methane equivalents", [d[0].carbon, d[1].carbon, quantity])}` +
    `${Row(format(stock.land, quantity, 2, "bad", "require"), "square feet of land needed", [d[0].land, d[1].land, quantity])}`
  ]
}

function stockFactsHealth(stock, quantity, d) {
//  console.log('stockFactsHealth', stock);
  return [
    `${Row(format(stock.calories, quantity, 2, "bad", "consume"), "calories", [d[0].calories, d[1].calories, quantity])}` +
    `${Row(format(stock.protein, quantity, 2, "good", "consumegood"), "of protein", [d[0].protein, d[1].protein, quantity])}` +
    `${Row(format(stock.fat, quantity, 3, "bad", "consume"), "of fat", [d[0].fat, d[1].fat, quantity])}` +
    `${Row(format(stock.saturatedFat, quantity, 2, "bad", "consume"), "of saturated fat", [d[0].saturatedFat, d[1].saturatedFat, quantity])}` +
    `${Row(format(stock.sugar, quantity, 2, "bad", "consume"), "of sugar", [d[0].sugar, d[1].sugar, quantity])}` +
    `${Row(format(stock.sodium, quantity, 2, "bad", "consume"), "of sodium", [d[0].sodium, d[1].sodium, quantity])}` +
    `${Row(format(stock.cholesterol, quantity, 2, "bad", "consume"), "of cholesterol", [d[0].cholesterol, d[1].cholesterol, quantity])}` +
    `${Row(format(stock.healthcare, quantity, 2, "bad", "save", "$"), "in projected healthcare costs", [d[0].healthcare, d[1].healthcare, quantity])}`
  ]
}

function stockFactsSocial(stock, quantity, d) {
//  console.log('stockFactsSocial', stock);
  return [
    `${Row(format(stock.lives, quantity, 5, "bad", "save"), "animal lives", [d[0].lives, d[1].lives, quantity])}` +
    `${Row(format(stock.feed, quantity, 2, "bad", "require"), "pounds of feed", [d[0].feed, d[1].feed, quantity])}` +
    `${Row(format(stock.meals, quantity, 2, "bad", "preserve"), "meals made from feed", [d[0].meals, d[1].meals, quantity])}`
  ]
}

function stockFacts2(stock, quantity, d) {
//  console.log('stockFacts2', stock);
  return [
    `${Row(format(stock.water, (quantity / 50), 2, "bad", "use"), "bathtubs worth of water used", [d[0].water, d[1].water, (quantity / 50)])}` +
    `${Row(format(stock.carbon, (quantity * 23.6 / (20)), 2, "bad", "emit"), "miles worth of carbon dioxide driven in a car", [d[0].carbon, d[1].carbon, (quantity * 23.6 / (20))])}` +
    `${Row(format(stock.calories, quantity, 2, "bad", "consume"), "calories", [d[0].calories, d[1].calories, quantity])}` +
    `${Row(format(stock.protein, quantity, 2, "good", "consumegood"), "of protein", [d[0].protein, d[1].protein, quantity])}` +
    `${Row(format(stock.fat, quantity, 3, "bad", "consume"), "of fat", [d[0].fat, d[1].fat, quantity])}` +
    `${Row(format(stock.saturatedFat, quantity, 2, "bad", "consume"), "of saturated fat", [d[0].saturatedFat, d[1].saturatedFat, quantity])}` +
    `${Row(format(stock.sugar, quantity, 2, "bad", "consume"), "of sugar", [d[0].sugar, d[1].sugar, quantity])}` +
    `${Row(format(stock.sodium, quantity, 2, "bad", "consume"), "of sodium", [d[0].sodium, d[1].sodium, quantity])}` +
    `${Row(format(stock.cholesterol, quantity, 2, "bad", "consume"), "of cholesterol", [d[0].cholesterol, d[1].cholesterol, quantity])}` +
    `${Row(format(stock.lives, quantity, 5, "bad", "save"), "animal lives needed", [d[0].lives, d[1].lives, quantity])}` +
    `${Row(format(stock.feed, quantity, 2, "bad", "require"), "pounds of feed required", [d[0].feed, d[1].feed, quantity])}` +
    `${Row(format(stock.meals, (quantity / 365 / 3), 2, "bad", "preserve"), "people who can be fed for an entire year", [d[0].meals, d[1].meals, (quantity / 365 / 3)])}` +
    `${Row(format(stock.land, (quantity / 43560), 2, "bad", "require"), "acres of land needed", [d[0].land, d[1].land, (quantity / 43560)])}` +
    `${Row(format(stock.healthcare, quantity, 2, "bad", "save", "$"), "in projected healthcare costs", [d[0].healthcare, d[1].healthcare, quantity])}`
  ]
}

function stockFacts3(stock, quantity, d) {
//  console.log('stockFacts3', stock);
  return [
    `${Row(format(stock.water, (quantity / 660430), 2, "bad", "use"), "Olympic swimming pools worth of water", [d[0].water, d[1].water, (quantity / 660430)])}` +
    `${Row(format(stock.carbon, (quantity / 12000), 2, "bad", "emit"), "cars worth of carbon dioxide", [d[0].carbon, d[1].carbon, (quantity / 12000)])}` +
    `${Row(format(stock.lives, quantity, 2, "bad", "save"), "animal lives", [d[0].lives, d[1].lives, quantity])}` +
    `${Row(format(stock.meals, (quantity / 3 / 365), 2, "bad", "preserve"), "people who can be fed for an entire year", [d[0].meals, d[1].meals, (quantity / 3 / 365)])}` +
    `${Row(format(stock.land, (quantity / 43560), 2, "bad", "require"), "acres of land required", [d[0].land, d[1].land, (quantity / 43560)])}` +
    `${Row(format(stock.healthcare, quantity, 2, "bad", "save", "$"), "in projected healthcare costs", [d[0].healthcare, d[1].healthcare, quantity])}`
  ]
}

function getStock(key) {
  var ori = stocks[+key]
//  console.log('getStock', ori);
  var newObj = {}
  for (var k in ori) {
    if (ori.hasOwnProperty(k)) {
      if (ori[k] instanceof Array) {
        newObj[k] = ori[k].slice()
      } else if (ori[k] instanceof Object) {
        newObj[k] = Object.assign({}, ori[k])
      } else {
        newObj[k] = ori[k]
      }
    }
  }
  return newObj
}

function updateAmount(isMeal) {

  var quantity = +$quantity.val()
//  console.log('quantity', quantity)
  var selected = []
  isMeal = isMeal || false
//  console.log('isMeal', isMeal)
//  console.log('selects', $selects)

  $selects.each(function (i, elm) {
    var id = $(elm).attr("id")
//    console.log('id', id)

    var $amount = $(this).prev().find('.servingUnit').empty()
//    console.log('amount', $amount)
    var list = []
    var dummy = ""

    var accStock = {}
    console.log('accStock', accStock)
//    console.log('app', app)

    if (id === 's1') {
      list = app.one.slice()
    } else if (id === "s2") {
      list = app.two.slice()
    } else {
      list = app.three.slice()
    }
    //console.log('list', list)
    //console.log(1, stocks[0].name, stocks[0].calories[0])
    if (list.length == 0) return
    for (var i = 0; i < list.length; i++) {
      var key = list[i]
      var stock = getStock(key)
//      console.log('stock', stock)
      if (!stock) continue

      var amount = (quantity * stock.unitsPerServing).toFixed(2)
//      console.log('amount', amount)
      dummy += " & " + amount + ' ' + stock.servingUnit + ' of ' + stock.name
//      console.log('dummy', dummy)

      function isSumable(prop) {
        return typeof (prop) !== 'object' ? false : typeof prop[0] === 'number'
      }

      for (var key in stock) {
        if (stock.hasOwnProperty(key)) {
          var old = accStock[key]
          accStock[key] = isSumable(accStock[key]) ? ([accStock[key][0] + stock[key][0], stock[key][1]]) : stock[key]
          // console.log(key, 'old: ' + old, ' --- new: ' + accStock[key])
        }
//        console.log('accStock', accStock)
      }
      //console.log(2, stocks[0].name, stocks[0].calories[0])
    }

    dummy = '(' + dummy.substr(3) + ')'
    $amount.text(dummy)

//    console.log('accStock', accStock)
    selected.push(accStock)

  })

//  console.log('selected', selected)

//  console.log('submit', $('#submit-meal'))
  if (($('#submit').length > 0 && $('#submit').attr('disabled') !== 'disabled') || ($('#submit-meal').length > 0 && $('#submit-meal').attr('disabled') !== 'disabled')) {
    return;
  }


  if ((!isMeal && (!selected[0] || !selected[1])) || (isMeal && (!selected[0] || !selected[1] || !selected[2]))) {
    toggleSegmentHideMe(true)
    //$comparisonResult.html(stockFacts(diff, quantity));
    $('#env_result').html('');
    $('#health_result').html('');
    $('#soc_result').html('');
    $('#year_result').html('');
    $('#US_result').html('');
    return
  }

  if (isMeal) {

    accStock = {}
    console.log('accStock', accStock)
    for (var i = 0; i < selected.length; i++) {

      var stock = selected[i]
//      console.log('stock', stock)

      function isSumable(prop) {
        return typeof (prop) !== 'object' ? false : typeof prop[0] === 'number'
      }

      for (var key in stock) {
//        console.log('stock', stock)
        if (stock.hasOwnProperty(key)) {
          var old = accStock[key]
//          console.log('accStock', accStock)
          accStock[key] = isSumable(accStock[key]) ? ([accStock[key][0] + stock[key][0], stock[key][1]]) : stock[key]
//            console.log('stock[key][1]', stock[key][1])
//            console.log('stock[key][0]', stock[key][0])
//          console.log(key, 'old: ' + old, ' --- new: ' + accStock[key])
//          console.log('accStock', accStock)
        }
      }
    }
//    console.log('accStock', accStock)
    selected[0] = accStock
//    console.log('selected[0]', selected[0])
    selected[1] = stocksUs[0]
//    console.log('selected[1]', selected[1])
    selected[2] = stocksUs[1]
//    console.log('selected[2]', selected[2])
  }

  var difference = {};
  var diff = {};
  var diff2 = {};
  var d1 = [];

  Object.keys(selected[0]).forEach(function (k) {
    if (/^(key|name|servingUnit|unitsPerServing|group|icon)$/.test(k)) return

//    console.log('selected[0]', selected[0])
//    console.log('k', k)
    var first = selected[0][k]
//    console.log('first', first)
    first[0] *= selected[0].unitsPerServing

    var second = selected[1][k]
//    console.log('second', second)
    second[0] *= selected[1].unitsPerServing


    difference[k] = [Math.abs(first[0] - second[0]), first[1], first[0] > second[0] ? 'save' : 'use'];
//    console.log('k', k)
//    console.log('difference[k]', difference[k])

    if (k.toLowerCase() === "meals") {
      diff[k] = [Math.abs(first[0] - second[0]), first[1], first[0] < second[0] ? ' + ' : ' - ']
    } else {
      diff[k] = [Math.abs(first[0] - second[0]), first[1], first[0] > second[0] ? ' + ' : ' - ']
    }

    if (isMeal) {
      var third = selected[2][k]
//      console.log('third', third)
      third[0] *= selected[2].unitsPerServing

      if (k.toLowerCase() === "meals") {
        diff2[k] = [Math.abs(first[0] * 323148587 - third[0]), first[1], first[0] * 323148587 < third[0] ? ' + ' : ' - ']
      } else {
        diff2[k] = [Math.abs(first[0] * 323148587 - third[0]), first[1], first[0] * 323148587 > third[0] ? ' + ' : ' - ']
      }
    }
    // console.log('%c key, val1, val2', 'color:blue', k, first,second, diff[k])
  })

  d1.push(Object.assign({}, selected[0]))
  d1.push(Object.assign({}, selected[1]))
  //console.log(3, stocks[0].name, stocks[0].calories[0])
  toggleSegmentHideMe(false)
//  console.log('d1', d1)
  console.log('diff2', diff2)

  $('#env_result').html(stockFactsEnv(diff, quantity, d1));
  $('#health_result').html(stockFactsHealth(diff, quantity, d1));
  $('#soc_result').html(stockFactsSocial(diff, quantity, d1));
  $('#year_result').html(stockFacts2(diff, quantity * 365, d1));

  if(isMeal) {
    $('#US_result').html(stockFacts3(diff2, quantity, d1));
  } else {
    $('#US_result').html(stockFacts3(diff, quantity, d1));
  }

  btnItemListener()
}

var groups = ((s) => {
  var temp = [], obj = {}
  s.map((opt) => {
    opt.group = (opt.group || "").trim()
    if (!(temp.indexOf(opt.group) > -1))
      temp.push(opt.group)
  })

  var l = temp.length

  for (var i = 0; i < l; i++) {
    temp.sort((a, b) => {
      if (a.toLowerCase().indexOf('legumes') > -1)
        return -1
      if (b.toLowerCase().indexOf('legumes') > -1)
        return 1
      return 0
    })
  }
  obj['s1'] = temp.slice()
  for (var i = 0; i < l; i++) {
    temp.sort((a, b) => {
      if (a.toLowerCase().indexOf('meat') > -1)
        return -1
      if (b.toLowerCase().indexOf('meat') > -1)
        return 1
      if (a.toLowerCase().indexOf('grain') > -1 && b.toLowerCase().indexOf('meat') == -1)
        return -1
      if (b.toLowerCase().indexOf('grain') > -1 && a.toLowerCase().indexOf('meat') > -1)
        return -1
      if (b.toLowerCase().indexOf('grain') > -1)
        return 1
      return 0
    })
  }
  obj['s2'] = temp.slice()
  return obj
})(stocks)

var he = 0
function SubMenu(opt, id, grp) {
  he = he + 45;
  var sub = `<div class="item" data-value="${opt.key}">
  <i data-id=${id} data-group="${grp}" class=""><img src="${opt.icon}" width="20px" height="20px"></i>
  ${opt.name}</div>`
  return sub
}

function SubMenus(grp, id) {
  var menus = [];
  if (grp.length == 0) {
    menus = stocks.filter((opt) => typeof opt.group == 'undefined' || opt.group.trim().length == 0)
  } else {
    menus = stocks.filter((opt) => opt.group == grp)
  }

  var temp = []
  menus.forEach((m, i) => {
    temp.push(SubMenu(m, id, grp))
  })
  return temp.join(' ')
}

function SubDropDown(grp, id) {
  var t = `<div class="item">
      <i class="dropdown icon"></i>
      ${grp}
      <div class="menu sub">
        ${SubMenus(grp, id)}
      </div>
    </div>`
  return t
}

function GroupMenu(grp, id) {
  var group =
    `<div class="divider"></div>
    <div class="header" data-group-header="${grp}" data-pos=${he}>
      <i class="tags icon"></i>
      ${grp}
    </div>
      ${SubMenus(grp, id)}
    `
  return group
}

function DropDown(id) {
  var temp = [],
    text = 'Pick a food!',
    grps = []
  if (id === "s1") {
    grps = groups.s1
  } else {
    grps = groups.s2
  }

  he = 0;
  grps.forEach((grp) => {
    if (grp.length == 0) {
      temp.push(SubMenus(grp, id))
    } else {
      //temp.push(SubDropDown(grp, id))
      temp.push(GroupMenu(grp, id))
    }
  })

  var template = `
  <div class="ui multiple search selection dropdown">
    <i class="dropdown icon"></i>
    <div class="default text">${text}</div>
    <div class="menu sub">
      ${temp.join(' ')}
    </div>
  </div>
  `
  return template

}

$('.stockSelect').each((i, elm) => {
  var id = $(elm).attr("id")
  $(elm).append(DropDown(id))
})

function submitReady() {
  $('#submit, #submit-meal').prop('disabled', false)
  updateAmount()
}

$('.ui.dropdown').dropdown({
  onChange: (list, val, text) => {
    list = list || ""
    var id = $(val).data('id') || $(text).data('id')
    if (id === 's1') {
      app.one = list.split(',').filter((i) => i)
    } else if (id === 's2') {
      app.two = list.split(',').filter((i) => i)
    } else {
      app.three = list.split(',').filter((i) => i)
    }

    syncGroupHeaderHeight(id);
    submitReady()
  },

  onAdd: function (list, val, text) {
    var grp = $(val).data('group') || $(text).data('group')
    var $g = $(this).find('[data-group-header="' + grp + '"]').eq(0)
    var $ng = $g.nextAll('[data-group-header]').eq(0)
    if ($ng.length > 0) {
      var pos = $ng.data('pos')
      $('.menu.sub.transition.visible').animate({ scrollTop: pos }, 1000)
    } else {
      $('.menu.sub.transition.visible').animate({ scrollTop: 0 }, 1000)
    }
  }
})


$quantity.on('input', submitReady)

//global var
var app = { one: [], two: [], three: [] };

function toggleSegmentHideMe(b) {
  var $seg = $('.ui.segment, .result');
  if (b && !($seg.is(':hidden'))) {
    $seg.slideUp(1000)
    $('.box-1').animate({
      paddingTop: "0.3in"
    }, 500);
    $('.result').hide()
  } else if (!b && $seg.is(':hidden')) {
    $('.result').css('display', 'flex')
    $seg.slideDown(1000)
    $('.box-1').animate({
      paddingTop: "0"
    }, 500);
  }
}

toggleSegmentHideMe(true)

//set default height of each column
var adjustBoxHeight = (function () {
  var box = $('.ui.segment, .main-form').not('.ads'),
    h = $(window).height(),
    box2 = $('#main-form2')
  box.css({
    'min-height': h
  })
  box2.css({
    'min-height': '1000px'
  })
})()

function scrollToEnv() {
  window.EVN_HASH = window.EVN_HASH || $('#environmental-impact').offset().top - 50

  $("#main-container").animate({ scrollTop: window.EVN_HASH + "px" }, 1500);
}

$('#submit, #submit-meal').click((e) => {
  $(e.target).prop('disabled', true);
  if ($(e.target).attr('id') === 'submit-meal') {
    updateAmount(true);
  } else {
    updateAmount();
  }

  window.aTop = $('#side-ads').offset().top;

  scrollToEnv();
  e.preventDefault()
})


function syncGroupHeaderHeight(id) {
  var list = [];
  if (id === 's1') {
    list = app.one.map((i) => Number(i))
  } if (id === 's2') {
    list = app.two.map((i) => Number(i))
  } else {
    list = app.three.map((i) => Number(i))
  }
  $selects.each((i, elm) => {
    if ($(elm).attr('id') === id) {
      $(elm).find('.menu.sub.transition').each((i, ul) => {
        var hi = 0;
        $(ul).find('.item, .header').each((i, li) => {
          var val = $(li).data('value');
          //console.log(list, val)
          if (!(list.indexOf(val) > -1)) {
            if ($(li).hasClass('header')) {
              var t = $(li).data('pos')
              $(li).data('pos', hi)
              //console.log(li, 'from', t, $(li).data('pos'))
            }
            hi = hi + 45
          }
        })
      })
    }
  })
}


function insertBar(elm, a, b) {
  var h = a > b ? a : b,
    step = parseInt(h / 3),
    w = $(window).width(),
    fSize = fSize,
    barWidth = 90,
    padd = 50,
    categoryPercentage = 0.9,
    barPercentage = 0.8,
    bZero = true;

  $(elm).css({ width: "300px!important", height: "200px!important" })

  if ((a + b) == 0) {
    bZero = true
  }

  if (w < 700) {
    fSize = 12
    barWidth = 30
    padd = 5
    categoryPercentage = 1,
      barPercentage = 1.0;

    $(elm).css({ width: "50px!important", height: "150px!important" })

    if (h > 1000) {
      barWidth = 15
    }
  }
  var ctx = elm;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1st", "2nd"],
      datasets: [{
        data: [a, b],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      layout: {
        padding: 12
      },
      scales: {
        margin: {
          left: 12,
          right: 12
        },
        yAxes: [{
          ticks: {
            responsive: false,
            beginAtZero: bZero,
            scaleOverride: true,
            max: h,
            min: 0,
            stepSize: step,

            fontSize: fSize,
            padding: padd,

            userCallback: function (label, index, labels) {
              if (Math.floor(label) === label) {
                return label.toLocaleString();
              }

            },
          }
        }],
        xAxes: [{
          display: false,

          categoryPercentage: categoryPercentage,
          barPercentage: barPercentage,
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,

      },
      hover: { mode: null },
      scaleLabel: function (label) {
        return Number(label.value).toFixed(2).replace('.', ',');
      },

    }
  });

}

function btnItemListener() {
  $('tbody tr').off('click').on('click', function (e) {
    var target = $(e.target).closest('tr').find('td.btn-item').eq(0)
    target1 = $(target),
      target2 = target1.find('canvas')

    if (target2.length > 0) {
      var a = target1.data('first'),
        b = target1.data('second')
      target2.eq(0).css({ 'display': 'block' })

      var v = $(e.target).closest('tr').find('.sub-vals')
      if (v.length > 0) {
        if (!v.eq(0).hasClass('on')) {
          v.eq(0).addClass('on')
        }
      }

      insertBar(target2[0], a, b)
    }
  })

  var start = (function () {
    $('canvas').hide()

  })()
}

function scroller() {
  clearTimeout(window.isWaiting)
  window.isWaiting = setTimeout(() => {
    togglePos()
  }, 100)

}

function togglePos() {
  var aTop = window.aTop
  if ($("#main-container").scrollTop() >= aTop) {
    $('#side-ads').css("position", "fixed");
    $('#side-ads').css({ "top": "19%", right: "12px" });
  } else {
    $('#side-ads').css("position", "relative");
  }
}

$(function () {
  $("#main-container").scroll(function (e) {
    scroller()
  });
});
