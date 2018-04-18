#!/usr/bin/python
import MySQLdb

class db_conector():
    db = ''
    def connect(self):
        db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                             user="root",         # your username
                             passwd="kikelol13",  # your password
                             port=3306,
                             db="mexico_vegano")        # name of the data base


    def execute(self,query):
        # you must create a Cursor object. It will let
        #  you execute all the queries you need
        cur = db.cursor()
        # Use all the SQL you like
        cur.execute(query)
        # print all the first cell of all the rows
        for row in cur.fetchall():
            print row[0]

    def close(self):
        db.close()
