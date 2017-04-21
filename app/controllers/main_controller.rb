class MainController < ApplicationController

  @@itemsdata = JSON.parse(File.read('lib/assets/items-data.json'))
  @@productdata = JSON.parse(File.read('lib/assets/product-data.json'))

  def index
    @items = @@itemsdata['Content']
  end

  def show
    @product = @@productdata['product'][0]
  end

end
