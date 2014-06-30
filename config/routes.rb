Donart::Application.routes.draw do

  namespace :backend do
    get '/',                  to: 'home#index'
    devise_for :admins, :controllers => { sessions: "backend/admins/sessions" }
  end
  root 'home#index'

end
