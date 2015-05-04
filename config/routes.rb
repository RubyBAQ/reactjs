Rails.application.routes.draw do
  resources :posts, only: [:index, :create]
  root to: 'posts#index'
end
