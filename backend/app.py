from rockdb import database
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    s="i ma home"
    return s
@app.route("/get",methods=['GET'])
def get():
    db=database()
    data=db.getinfo()
    db.close()
    return jsonify(data)
@app.route("/post",methods=['POST'])
def post():
    da=request.json
    d=database()
    dat=d.addinfo(da['name'],da['email'])
    d.close
    return jsonify({"status":"user ok"})

app.run(debug=True)