class CreateCodeBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :code_blocks do |t|
      t.references :example, foreign_key: true
      t.text :block
      t.text :description
      t.string :location
      t.integer :order

      t.timestamps
    end
  end
end
