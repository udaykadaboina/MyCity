class Issue < ActiveRecord::Base
  attr_accessible :category, :description, :title, :image
  mount_uploader :image, ImageUploader
  has_many :comments
  def self.categories
   [["public art","public art"], ["ABQ Parks","ABQ Parks"]].freeze
  end
end
