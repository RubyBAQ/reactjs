class PostsController < ApplicationController

  def index
    @posts = Post.sort_by_created_at
    @form = {
      action: posts_path,
      csrf_param: request_forgery_protection_token,
      csrf_token: form_authenticity_token
    }
  end

  def create
    @post = Post.create(post_params)
    if request.xhr?
      render :json => @post
    else
      redirect_to posts_path
    end
  end

  private

  def post_params
    params.require(:post).permit(:author, :contents, :title)
  end

end
