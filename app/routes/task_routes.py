from flask import request, jsonify
from app.models import db
from app.models.task import Task
from app.routes import task_bp

# GET /tasks - Fetch all tasks
@task_bp.route('/', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks]), 200

# POST /tasks - Add a new task
@task_bp.route('/', methods=['POST'])
def add_task():
    data = request.get_json()
    if not data or not data.get("title"):
        return jsonify({"error": "Title is required"}), 400
    
    new_task = Task(title=data["title"], description=data.get("description"))
    db.session.add(new_task)
    db.session.commit()

    return jsonify(new_task.to_dict()), 201

# PUT /tasks/<id> - Update an existing task
@task_bp.route('/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    data = request.get_json()
    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    
    db.session.commit()
    return jsonify(task.to_dict()), 200

# DELETE /tasks/<id> - Delete a task
@task_bp.route('/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"}), 200
