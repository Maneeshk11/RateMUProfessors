from flask import Flask, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb+srv://maneeshkolli:8OPPKrK2s2eYBdSc@profsdata.culo9rf.mongodb.net/profsDetails?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route("/profs/all", methods=["GET"])
def get_all_profs():
    profs = mongo.db.profs.find()
    return jsonify([prof for prof in profs])

@app.route("/profs/ecsoe", methods=["GET"])
def get_ecsoe_profs():
    profs = mongo.db.profs.find({"school": "ECSoE"})
    return jsonify([prof for prof in profs])

@app.route("/profs/sol", methods=["GET"])
def get_sol_profs():
    profs = mongo.db.profs.find({"school": "SOL"})
    return jsonify([prof for prof in profs])

@app.route("/profs/som", methods=["GET"])
def get_som_profs():
    profs = mongo.db.profs.find({"school": "SOM"})
    return jsonify([prof for prof in profs])

@app.route("/profs/imsoe", methods=["GET"])
def get_imsoe_profs():
    profs = mongo.db.profs.find({"school": "IMSOE"})
    return jsonify([prof for prof in profs])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
