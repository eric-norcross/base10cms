class Compilation < ActiveRecord::Base
  attr_accessible 							:name, 
  															:title,

  															# belongs_to ##
 																:skin_id,
                                :collection_id,
                                :component_id,
                                :subcomponent_id,

                                ## has_many ##
																:product_ids,

                                ## nested attributes ##
                                :images_attributes

  belongs_to                    :component
  belongs_to                    :subcomponent
  belongs_to                    :collection
  belongs_to                    :skin           

  has_many                      :images, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :images, reject_if: proc { |attrs| attrs['asset'].blank? && attrs['asset_cache'].blank? }, allow_destroy: true

	has_many                      :products

	validates_presence_of         :title
  validates_presence_of         :collection
  validates_presence_of         :skin

	before_save                   :create_name

	private

  def create_name
    self.name = title.parameterize
  end                             
end

# class Product < ActiveRecord::Base
#   default_scope order('products.id ASC')
  
#   attr_accessible               :name, 
#                                 :title,
#                                 :features, 
#                                 :style,
#                                 :video,

#                                 ## belongs_to ##
#                                 :component_id,
#                                 :subcomponent_id,
#                                 :collection_id,
#                                 :skin_id,

#                                 ## has_many ##

#                                 ## nested attributes ##
#                                 :skus_attributes,
#                                 :dimensions_attributes,
#                                 :images_attributes
                        

#   belongs_to                    :component
#   belongs_to                    :subcomponent
#   belongs_to                    :collection
#   belongs_to                    :skin

#   has_many                      :dimensions, dependent: :destroy
#   accepts_nested_attributes_for :dimensions, reject_if: lambda { |a| a[:width].blank? || a[:height].blank? || a[:depth].blank? }, allow_destroy: true

#   has_many                      :skus, dependent: :destroy
#   accepts_nested_attributes_for :skus, reject_if: lambda { |a| a[:title].blank? }, allow_destroy: true
  
#   has_many                      :images, as: :imageable, dependent: :destroy
#   accepts_nested_attributes_for :images, reject_if: proc { |attrs| attrs['asset'].blank? && attrs['asset_cache'].blank? }, allow_destroy: true

#   validates_presence_of         :title
#   validates_presence_of         :collection
#   validates_presence_of         :skin

#   before_save                   :create_name

#   private
  
#   def create_name
#     self.name = title.parameterize
#     # self.name = component.title.parameterize
#   end
# end
