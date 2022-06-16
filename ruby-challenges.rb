# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def words_sing string, array
    outArr = []
    array.each do |word|
        if word.downcase.include? string
            outArr << word
        end
    end
   outArr
end

p words_sing letter_o, beverages_array
p words_sing letter_t, beverages_array



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.


nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def addArray array
    array.sum
end

p addArray nums_array1
p addArray nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_reader :model
    def initialized model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
    def pedal_faster value
        @current_speed = @current_speed += value
    end
def brake value
    @current_speed = @current_speed -= value
    @current_speed <= -1 ? 0 :@current_speed  
end    
end

Huffy = Bike.new 'Huffy'
p Huffy.pedal_faster(12)
p Huffy.pedal_faster(20)
p Huffy.brake(5)
p Huffy.brake(25)
p Huffy.bike_info  

    # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
    attr_reader :current_speed
    def initialize(model, wheels=2, current_speed=0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
    def pedal_faster int
        @current_speed += int
    end
    def brake int
        @current_speed -= int 
        @current_speed = 0 if @current_speed < 0
    end
end

trek = Bike.new('Trek')
trek.bike_info
trek.pedal_faster(1000)
trek.bike_info
trek.brake(1200)
trek.