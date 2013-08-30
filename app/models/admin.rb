class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable

  if Rails.env.production?
    devise  :database_authenticatable, 
            :recoverable, 
            :rememberable, 
            :trackable, 
            :validatable
  else
    devise  :database_authenticatable, 
            :recoverable, 
            :rememberable, 
            :trackable, 
            :validatable, 
            :registerable #registerable on dev and test
  end

  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
end
