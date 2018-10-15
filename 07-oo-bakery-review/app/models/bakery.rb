require "pry"

class Bakery
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    self.class.all << self
  end

  def ingredients
    #find desserts for this bakery
    # find the ingredients for those desserts
    self.desserts.collect do |dessert|
      dessert.ingredients
    end.flatten
  end

  def desserts
    Dessert.all.select do |dessert|
      dessert.bakery == self
    end
  end

  def self.all
    @@all
  end

end
