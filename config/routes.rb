Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :code_blocks
    resources :examples
    resources :urls
  end

  get '*path',
      to: "application#fallback_index_html",
      constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
