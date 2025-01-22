from flask import Flask
from app.config import Config
from app.models import db
from app.routes.task_routes import task_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)  # Initialize SQLAlchemy
    app.register_blueprint(task_bp, url_prefix='/tasks')  # Register routes

    return app
