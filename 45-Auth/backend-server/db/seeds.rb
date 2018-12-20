15.times do
  User.create(
    username: Faker::Friends.character, password: 'hi', user_type: 'user', avatar: Faker::Fillmurray.image, bio: Faker::Friends.quote
  )
end
