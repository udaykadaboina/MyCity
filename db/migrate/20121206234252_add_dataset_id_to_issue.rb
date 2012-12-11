class AddDatasetIdToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :dataset_id, :integer
  end
end
