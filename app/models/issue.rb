class Issue < ActiveRecord::Base
  attr_accessible :category, :description, :title

  def self.categories
   [["public art","public art"], ["ABQ Parks","ABQ Parks"]].freeze
  end
end
