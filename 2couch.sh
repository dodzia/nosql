#!/bin/bash
clear

# Importuje dane typu .json z pliku do bazy couchdb
# Sposob uzycia skryptu
function help() {
	echo "";
	echo "How to use:" 
	echo "[file_name.sh] http://localhost:[port] [collection] [database_file]"
	echo "For instance:"
	echo "./2couch.sh http://localhost:5984 series baza_seriali.json"
	echo "";
  exit 1
}

#parametry
#$1-host
#$2-nazwa_bazy


#sprawdzanie parametrow
if [ $# -ne 3 ]; then
help

	else

echo "Deleting the database: " $1"/"$2

	curl -X DELETE  $1"/"$2


echo "Creating new database: "$1"/"$2
	curl -X PUT  $1"/"$2

	while read line 
	do
		curl -d "$line" -X POST -H "Content-Type: application/json" $1"/"$2 
	done < $3;
	echo "Completed successfully  ! "

fi

exit 0
