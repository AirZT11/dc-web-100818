require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

bakery1 = Bakery.new("Magnolia")
bakery2 = Bakery.new("Sprinkles")
bakery3 = Bakery.new("Georgetown Cupcakes")
bakery4 = Bakery.new("Baked & Wired")


dessert1 = Dessert.new("Chocolate cake", bakery1)
dessert2 = Dessert.new("Chocolate ice cream", bakery3)
dessert3 = Dessert.new("Carrot cake", bakery2)
dessert4 = Dessert.new("Funfetti cake", bakery4)
dessert5 = Dessert.new("Cheesecake", bakery1)

ing1 = Ingredient.new(100, "chocolate bar", dessert1)
ing2 = Ingredient.new(150, "heavy cream", dessert2)
ing3 = Ingredient.new(40, "carrot", dessert3)
ing4 = Ingredient.new(200, "eggs", dessert4)
ing5 = Ingredient.new(50000, 'cheese', dessert5)

puts "bakery1.ingredients =>"
puts bakery1.ingredients

Pry.start
