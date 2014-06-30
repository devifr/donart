class Backend::StaticPagesController < Backend::ApplicationController
  defaults :resource_class => StaticPage, :collection_name => 'static_pages', :instance_name => 'static_page'
end
