from flask import Blueprint, request, jsonify
from . import db
from .models import User, Transaction
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

bp = Blueprint('routes', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    user = User(username=username, password_hash=password)  # Use password hashing in real implementation
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    user = User.query.filter_by(username=username).first()
    if user and user.password_hash == password:  # Replace with password hash verification
        access_token = create_access_token(identity={'username': user.username})
        return jsonify(access_token=access_token), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@bp.route('/transactions', methods=['GET', 'POST'])
@jwt_required()
def manage_transactions():
    if request.method == 'POST':
        data = request.get_json()
        amount = data['amount']
        category = data['category']
        user_id = get_jwt_identity()['id']
        transaction = Transaction(amount=amount, category=category, user_id=user_id)
        db.session.add(transaction)
        db.session.commit()
        return jsonify({'message': 'Transaction added successfully'}), 201
    else:
        user_id = get_jwt_identity()['id']
        transactions = Transaction.query.filter_by(user_id=user_id).all()
        return jsonify([t.as_dict() for t in transactions]), 200

@bp.route('/')
def index():
    return jsonify({'message': 'Welcome to the Personal Finance Tracker API!'})