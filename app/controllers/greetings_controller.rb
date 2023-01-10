class GreetingsController < ApplicationController
    def index; end

    def show
        @greeting = Greeting.all.sample
        render json: @greeting
      end

  
end
