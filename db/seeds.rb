# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)

datasets = Dataset.create(:name => 'Parks', :source_link => 'http://data.cabq.gov/community/parksandrec/parks/CityParks.kmz')
datasets = Dataset.create(:name => 'Open Spaces', :source_link => 'http://data.cabq.gov/community/openspace/CityOpenSpace.kmz')
datasets = Dataset.create(:name => 'Bike Paths', :source_link => 'http://data.cabq.gov/community/bikepaths/BikePaths.kmz')
datasets = Dataset.create(:name => 'Neighborhoods', :source_link => 'http://data.cabq.gov/community/neighborhoods/NeighborhoodAssociations.kmz')
datasets = Dataset.create(:name => 'City Limits', :source_link => 'http://data.cabq.gov/government/citylimits/abqcitylimits.kmz')
datasets = Dataset.create(:name => 'Police Beats', :source_link => 'http://data.cabq.gov/publicsafety/policebeats/APD_BCSO_Beats.kmz')
datasets = Dataset.create(:name => 'Transit Routes', :source_link => 'http://data.cabq.gov/transit/routesandstops/transitroutes.kmz')
datasets = Dataset.create(:name => 'Transit Stop', :source_link => 'http://data.cabq.gov/transit/routesandstops/transitstops.kmz')
datasets = Dataset.create(:name => 'Registered Historic Places', :source_link => 'http://data.cabq.gov/community/reghistplaces/RegisteredHistoricPlaces.kmz')
datasets = Dataset.create(:name => 'FEMA Exemptions', :source_link => 'http://data.cabq.gov/FEMA/FEMA_exemptions_CABQ.kmz')
datasets = Dataset.create(:name => 'Public Art', :source_link => 'http://data.cabq.gov/community/art/publicart/PublicArt.kmz')
