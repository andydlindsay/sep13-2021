num = 13

if num == 5 || num < 0
  puts "that's bigger than 5"
elsif num > 10
  puts "that's greater than 10"
else
  puts "that's not a good number"
end

username = 'jstamos'

unless username == 'alice'
  puts "choose a better username"
end

puts

hour = 7
puts "it's getting late" if hour > 5

raining = false
puts "it's a nice day outside" unless raining

puts raining ? 'not raining' : 'it is raining'
