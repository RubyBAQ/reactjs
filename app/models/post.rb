class Post < ActiveRecord::Base
  scope :sort_by_created_at, ->{ order(created_at: :desc) }

  def created_at
    super.strftime("%d-%m-%Y")
  end
end
