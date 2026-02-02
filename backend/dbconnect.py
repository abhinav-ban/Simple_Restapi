import mysql.connector as mys
def connect():
    #print("hafualvalv")
    return mys.connect(host="localhost",user="root",password="****",database="app")
