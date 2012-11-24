class Comment < ActiveRecord::Base
  attr_accessible :body, :issue_id
  belongs_to :issue
end
