from flask import Flask, render_template

app = Flask(__name__)

# Main Home Page
@app.route("/")
def home():
    return render_template("index.html")

# "How Can I Help You" Page (Previously Question1)
@app.route("/how-can-i-help")
def how_can_i_help():
    return render_template("how_can_i_help.html")

# QA Page (Previously Answer Page)
@app.route("/qa/<int:question_num>")
def qa_page(question_num):
    questions = {
        1: {"question": "What services do you offer?", "answer": "We provide digital marketing, web development, and more."},
        2: {"question": "How do I contact support?", "answer": "You can reach us via email or phone."},
        3: {"question": "Do you offer custom solutions?", "answer": "Yes, we tailor our services to your needs."},
        4: {"question": "What is your pricing model?", "answer": "Our pricing depends on your project scope."},
        5: {"question": "Do you provide training?", "answer": "Yes, we offer various skill-based training programs."}
    }

    if question_num in questions:
        next_question = question_num + 1 if question_num < len(questions) else None
        return render_template("qa.html", question=questions[question_num]["question"], answer=questions[question_num]["answer"], next_question=next_question)
    else:
        return "Question not found", 404

if __name__ == "__main__":
    app.run(debug=True)
