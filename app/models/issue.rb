class Issue < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  attr_accessible :category, :description, :title, :image, :latitude, :longitude, :user_id
  
  has_many :comments
  def self.categories
   [["public art","public art"], ["ABQ Parks","ABQ Parks"]].freeze
  end

  belongs_to :users
end
