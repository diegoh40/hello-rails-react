module V1
  class HomeController < ApplicationController
    def index
      @greeting = Greeting.all.sample
      render json: @greeting
    end
  end
end
