class PagesController < ApplicationController
  def home
    @datasets = Dataset.all
    @datasetcheckvaues = [];
  end

  def contact
    @datasets = Dataset.all
  end

  def about
    @datasets = Dataset.all

  end
end
