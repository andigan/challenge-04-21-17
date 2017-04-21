Rails.application.routes.draw do

  get '/', to: "main#index"
  get '/product', to: "main#show"

end
