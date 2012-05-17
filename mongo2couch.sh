#!/bin/bash
clear

# Importuje dane typu .json z bazy mongodb do bazy couchdb
# Sposob uzycia skryptu
function help() {
	echo "";
	echo "How to use:" 
	echo "[file_name.sh] [port] [database] [collection] [database_file]"
	echo "For instance:"
	echo "./mongo2couch.sh 27017 test series baza_seriali.json"
	echo "";
  exit 1
}


#parametry
#$1- host
#$2- nazwa_bazy
#$3- nazwa_kolecji


if [ $# -eq 4 ]; then
  port=$1
  shift
fi

: ${port:=27017}
# sprawdzanie parametrow
if [ $# -ne 3 ]; then
  help
  exit 1
else
 mongoexport -d $1 -c $2 -o $3 --host localhost:$port
 echo ""
 echo "Data export from Mongodb to $3 [file] success!"
 echo ""
 echo "Please specify the port on which the Couchdb server is running: "
 read port_couchdb
 ruby export.rb $3 $2 $port_couchdb
 echo ""
 exit 0
fi

