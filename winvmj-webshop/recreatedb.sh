#!/bin/sh

dbname=$1

if [ -f "$1.db" ]; then rm $dbname.db; fi
if [ -f "$1.db-journal" ]; then rm $dbname.db-journal; fi

sqlite3 $dbname.db
