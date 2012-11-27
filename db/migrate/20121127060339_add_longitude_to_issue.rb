class AddLongitudeToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :longitude, :float
  end
end
