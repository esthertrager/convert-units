var metric
  , imperial;

metric = {
  ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kilolitre'
    , plural: 'Kilolitres'
    }
  , to_anchor: 1000
  }
}

imperial = {
smidgen: {
    name: {
      singular: 'Smidgen'
    , plural: 'Smidgens'
    }
  , to_anchor: 1/192
  }
, pinch: {
    name: {
      singular: 'Pinch'
    , plural: 'Pinches'
    }
  , to_anchor: 1/96
  }
, dash: {
    name: {
      singular: 'Dash'
    , plural: 'Dashes'
    }
  , to_anchor: 1/48
  }
, tad: {
    name: {
      singular: 'Tad'
    , plural: 'Tads'
    }
  , to_anchor: 1/24
  }
, tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};
