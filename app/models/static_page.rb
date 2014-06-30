class StaticPage < ActiveRecord::Base
  attr_accessible :title, :description, :slug
end
