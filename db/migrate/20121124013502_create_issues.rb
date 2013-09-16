class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.string :category
      t.text :description
      t.integer :user_id
      t.timestamps
    end
  end
end
