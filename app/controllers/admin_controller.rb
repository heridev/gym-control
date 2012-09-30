class AdminController < ApplicationController
  before_filter :authenticate_admin!

  def index
    render
  end
end
