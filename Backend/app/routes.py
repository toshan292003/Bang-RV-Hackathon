from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .models import User, Question, Answer, TestAttempt, db
from werkzeug.security import generate_password_hash, check_password_hash
from .utils import grade_answer



main = Blueprint('main', __name__)

@main.route('/register', methods=['POST'])
def register():
    try:
        print("Attempting to register a user...")
        data = request.get_json()
        print("Data received:", data)

        if not data:
            return jsonify({'message': 'No input data provided'}), 400

        hashed_password = generate_password_hash(data['password'])
        print("Password hashed.")

        new_user = User(username=data['username'], password=hashed_password, is_lecturer=data.get('is_lecturer', False))
        
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'Internal Server Error'}), 500



@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token})
    return jsonify({'message': 'Invalid credentials'}), 401

@main.route('/add_question', methods=['POST'])
@jwt_required()
def add_question():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    if not user.is_lecturer:
        return jsonify({'message': 'Permission denied'}), 403

    data = request.get_json()
    new_question = Question(question_text=data['question_text'], answer_key=data['answer_key'], lecturer_id=current_user)
    db.session.add(new_question)
    db.session.commit()
    return jsonify({'message': 'Question added successfully'})

@main.route('/questions', methods=['GET'])
@jwt_required()
def get_questions():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    if user.is_lecturer:
        questions = Question.query.filter_by(lecturer_id=current_user).all()
    else:
        questions = Question.query.all()
    
    output = []
    for question in questions:
        question_data = {
            'id': question.id,
            'question_text': question.question_text
        }
        output.append(question_data)
    
    return jsonify({'questions': output})

@main.route('/submit_answer', methods=['POST'])
@jwt_required()
def submit_answer():
    current_user = get_jwt_identity()
    data = request.get_json()
    question = Question.query.get(data['question_id'])
    print(question)
    if not question:
        return jsonify({'message': 'Question not found'}), 404

    existing_attempt = TestAttempt.query.filter_by(student_id=current_user, question_id=data['question_id']).first()
    if existing_attempt:
        return jsonify({'message': 'You have already attempted this test'}), 403

    new_answer = Answer(answer_text=data['answer_text'], question_id=data['question_id'], student_id=current_user)
    db.session.add(new_answer)
    db.session.commit()

    new_attempt = TestAttempt(student_id=current_user, question_id=data['question_id'])
    db.session.add(new_attempt)
    db.session.commit()

    # Call the grading function here
    grade = grade_answer(new_answer.answer_text, question.answer_key)
    new_answer.grade = grade
    new_answer.is_graded = True
    db.session.commit()

    return jsonify({'message': 'Answer submitted and graded successfully', 'grade': grade})

@main.route('/grades', methods=['GET'])
@jwt_required()
def get_grades():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    if user.is_lecturer:
        answers = Answer.query.all()
    else:
        answers = Answer.query.filter_by(student_id=current_user).all()
    
    output = []
    for answer in answers:
        answer_data = {
            'id': answer.id,
            'answer_text': answer.answer_text,
            'question_id': answer.question_id,
            'grade': answer.grade,
            'submitted_at': answer.submitted_at
        }
        output.append(answer_data)
    
    return jsonify({'grades': output})

@main.route('/grade_answer', methods=['POST'])
@jwt_required()
def grade_answer_route():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    if not user.is_lecturer:
        return jsonify({'message': 'Permission denied'}), 403

    data = request.get_json()
    answer = Answer.query.get(data['answer_id'])
    if not answer:
        return jsonify({'message': 'Answer not found'}), 404

    answer.grade = data['grade']
    answer.is_graded = True
    db.session.commit()

    return jsonify({'message': 'Answer graded successfully'})
