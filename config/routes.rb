Donart::Application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  namespace :backend do
    get '/',                  to: 'home#index'
    devise_for :admins, :controllers => { sessions: "backend/admins/sessions" }
    resources :static_pages
  end
  root 'home#index'

end
