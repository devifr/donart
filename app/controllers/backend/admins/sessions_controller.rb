class Backend::Admins::SessionsController < ::Devise::SessionsController
  skip_before_filter :authenticate_backend_admin!
  layout 'login'
end
