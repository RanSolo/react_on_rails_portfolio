class UrlsController < ApiController
  # GET /urls
  def index
    @urls = Url.select("description, id, url_type,
                        example_id, code_block_id").all
    render json: @urls.to_json(
      :include => { :example => { :only => [:id, :description] },
                    :code_block => { :only => [:id, :location, :order] } })
  end

  # GET /urls/1
  def show
    @url = Url.find(params[:id])
    render json: @url.to_json(
      :include => { :example => { :only => [:id, :description] },
                    :code_block => { :only => [:id, :location, :order] } })
  end
end
