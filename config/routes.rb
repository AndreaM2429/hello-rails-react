Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  root 'root#index'

  # get "up" => "rails/health#show", as: :rails_health_check
end
