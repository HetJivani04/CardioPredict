from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

# Load the trained model
with open('cardio_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Ensure the data is received as JSON
        if not request.is_json:
            return jsonify({'error': 'Invalid input, expected JSON'}), 400

        data = request.json
        print("Received data:", data)

        # Extract features from the incoming JSON data
        chestpain = int(data.get('chestpain', 0))
        restingBP = float(data.get('restingBP', 0))
        fastingbloodsugar = int(data.get('fastingbloodsugar', 0))
        restingrelectro = int(data.get('restingrelectro', 0))
        slope = int(data.get('slope', 0))
        noofmajorvessels = int(data.get('noofmajorvessels', 0))

        features = np.array([[chestpain, restingBP, fastingbloodsugar, restingrelectro, slope, noofmajorvessels]])
        print("Features for prediction:", features)

        prediction = model.predict(features)[0]
        return jsonify({'risk_score': int(prediction)})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
