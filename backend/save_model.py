import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

# Load the data
df = pd.read_csv('Cardiovascular_Disease_Dataset.csv')

# Prepare the features and target
factors = df[['chestpain', 'restingBP', 'fastingbloodsugar', 'restingrelectro', 'slope', 'noofmajorvessels']]
target = df['target']

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(factors, target, test_size=0.3, random_state=42)

# Initialize the StandardScaler to scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train the Logistic Regression model
lr_model = LogisticRegression(max_iter=200)
lr_model.fit(X_train_scaled, y_train)

# Predict and evaluate Logistic Regression model
lr_model_predictions = lr_model.predict(X_test_scaled)
print("Logistic Regression Accuracy = ", accuracy_score(y_test, lr_model_predictions))
print("Classification Report: ", classification_report(y_test, lr_model_predictions))
print("Confusion Matrix: ", confusion_matrix(y_test, lr_model_predictions))

# Save the Logistic Regression model to a file
with open('/Users/hetjivani/Projects/CardioPredict/cardiopredict/backend/cardio_model.pkl', 'wb') as f:
    pickle.dump(lr_model, f)

print("Logistic Regression Model saved successfully!")

# Train Random Forest model
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train_scaled, y_train)
y_pred_rf = rf_model.predict(X_test_scaled)
print("Random Forest Accuracy:", accuracy_score(y_test, y_pred_rf))
print(classification_report(y_test, y_pred_rf))

# Optionally, if you want to tune Logistic Regression with GridSearchCV
param_grid = {
    'C': [0.001, 0.1, 1, 10, 100],
    'penalty': ['l1', 'l2'],
    'solver': ['liblinear']
}

grid_search = GridSearchCV(estimator=lr_model, param_grid=param_grid, cv=5, scoring='accuracy')
grid_search.fit(X_train_scaled, y_train)

print("Best Parameters: ", grid_search.best_params_)
print("Best Score: ", grid_search.best_score_)

# Save the best model (chosen via Grid Search)
best_model = grid_search.best_estimator_
with open('/Users/hetjivani/Projects/CardioPredict/cardiopredict/backend/best_cardio_model.pkl', 'wb') as f:
    pickle.dump(best_model, f)

print("Best Model saved successfully!")
