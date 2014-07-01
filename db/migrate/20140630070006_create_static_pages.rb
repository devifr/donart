class CreateStaticPages < ActiveRecord::Migration
  def change
    create_table :static_pages do |t|
      t.string :code
      t.string :title
      t.text :description
      t.string :slug
    end
  end
end
