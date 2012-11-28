class AddSourceLinkToDataset < ActiveRecord::Migration
  def change
    add_column :datasets, :source_link, :string
  end
end
