function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

var updateBackstagePassesQuality = function(item){
  if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') return;

  if (item.sell_in <= 10) {
    item.quality = item.quality + 1
  }

  if (item.sell_in <= 5) {
    item.quality = item.quality + 1
  }
};


var increaseQuality = function(item){
  if(!isItemThatIncreasesQuality(item)) return;
  if (item.quality === 50) return;

  item.quality = item.quality + 1
  updateBackstagePassesQuality(item);
}

var isItemThatIncreasesQuality = function(item){
  return (item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert');
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (!isItemThatIncreasesQuality(items[i])) {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    }

    increaseQuality(items[i]);

    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
          items[i].quality = items[i].quality + 1
      }
    }
  }
}
