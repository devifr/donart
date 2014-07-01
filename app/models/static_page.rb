class StaticPage < ActiveRecord::Base
  attr_accessible :code, :title, :description, :slug
end
