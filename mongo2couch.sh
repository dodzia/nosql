#!/bin/bash
clear

# Importuje dane typu .json z bazy mongodb do bazy couchdb
# Sposob uzycia skryptu
function help() {
	echo "";
	echo "How to use:" 
	echo "[file_name.sh] http://localhost:[port] [database] [collection]"
	echo "For instance:"
	echo "./mongo2couch.sh http://localhost:5984 test sitcom"
	echo "";
  exit 1
}

#parametry
#$1- host
#$2- nazwa_bazy
#$3- nazwa_kolecji

#sprawdzanie parametrow
if [ $# -ne 3 ]; then
	help
else

		echo "Export data from the database" $2 "and the collection" $3
		mongoexport --db $2 --collection $3 --out mongoData1.json
		
		echo "Preparing data"
		cat mongoData1.json | sed -e 's/"_id[^\}]*\},//g' > mongoData2.json

		echo "Import to Couchdb:" $1"/"$2
		./2couch.sh $1 $2 mongoData2.json
		rm mongoData1.json
		rm mongoData2.json
fi
