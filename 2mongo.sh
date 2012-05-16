#!/bin/bash
clear

# Importuje dane typu .json z pliku do bazy mongodb
# Sposob uzycia skryptu
function help() {
	echo "";
	echo "How to use:" 
	echo "[file_name.sh] [database] [collection]"
	echo "For instance:"
	echo "./2mongo.sh test series"
	echo "";
  exit 1
}
#$1-nazwa_bazy
#$2-nazwa_kolekcji


# sprawdzanie ilosci parametrow
if [ "$#" -ne 2 ]
	then
		help
	elif [ ! -f  baza_seriali.json ] 
	then
		echo "Error. There is no such file!"
	else
		echo "Import to the database $1 and the collection $2"
		mongoimport --file  baza_seriali.json --db $1 --collection $2
		echo "Completed successfully ! "
fi
