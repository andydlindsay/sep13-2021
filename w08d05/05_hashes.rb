# JS objects === Ruby hashes

user = {
  'username' => 'jstamos',
  'password' => '1234'
}

# my_key = 'username'
# puts user[my_key]

user = {
  :username => 'jstamos',
  :password => '1234'
}

# my_key = :username
# user[:password]
# p user[my_key]

user = {
  username: 'jstamos',
  password: '1234'
}

p user[:username]
