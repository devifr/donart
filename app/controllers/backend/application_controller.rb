class Backend::ApplicationController < ActionController::Base
  layout 'application_backend'
  protect_from_forgery with: :exception
  before_filter :authenticate_backend_admin!
end
