require "pry"
class Ingredient
  attr_reader :name, :calorie_count, :dessert

  @@all = []

  def initialize(calorie_count, name, dessert)
    @name = name
    @calorie_count = calorie_count
    @dessert = dessert
    self.class.all << self
  end

  def self.all
    @@all
  end

end
