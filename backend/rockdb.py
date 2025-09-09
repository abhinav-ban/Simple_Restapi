from dbconnect import connect


class database:
    def __init__(self):
        self.con = connect()
        self.cursor = self.con.cursor(dictionary=True)
    def getinfo(self):
        self.cursor.execute("select * from users")
        return self.cursor.fetchall()
    def addinfo(self,name,email):
        self.cursor.execute("insert into users(name,email) values(%s,%s)",(name,email))
        self.con.commit()
        return True
    def close(self):
        self.cursor.close
        self.con.close

        