require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AppNamePlaceholder
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    $stdout.sync = true
    config.log_tags = {
      request_id: :request_id,
      remote_ip: :remote_ip,
      subdomain: :subdomain,
    }

    if Rails.env.staging? || Rails.env.production?
      config.rails_semantic_logger.add_file_appender = false
      config.rails_semantic_logger.format = :json
      config.semantic_logger.application = 'AppNamePlaceholder'
      config.semantic_logger.add_appender(io: $stdout,
                                          level: config.log_level,
                                          formatter: config.rails_semantic_logger.format)
    else
      config.semantic_logger.add_appender(file_name: "log/#{Rails.env}.json", formatter: :json)
    end
  end
end
