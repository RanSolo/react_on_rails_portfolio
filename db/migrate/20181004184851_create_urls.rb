class CreateUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :urls do |t|
      t.references :example, foreign_key: true
      t.references :code_block, foreign_key: true
      t.string :actual
      t.string :description
      t.integer :url_type

      t.timestamps
    end
    add_index :urls, :url_type
  end
end
