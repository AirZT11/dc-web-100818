require "pry"

class Dessert
  attr_reader :name, :bakery

  @@all = []

  def initialize(name, bakery)
    @name = name
    @bakery = bakery
    self.class.all << self
  end

  def self.all
    @@all
  end

  def ingredients
    #Go through all Ingredients, find my Ingredients
    Ingredient.all.select {|ing| ing.dessert == self}
  end

end
