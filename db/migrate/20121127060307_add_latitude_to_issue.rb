class AddLatitudeToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :latitude, :float
  end
end
