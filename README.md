TECHNOLOGIE NOSQL
=================

Projekt wykonany na potrzeby przedmiotu Technologie NoSql.


1. Dane
Dane zawarte są w pliku baza_seriali.json, który składa się ze rankingu 100 najlepiej ocenionych seriali amerykańskich według serwisu filmweb z dnia 14 maja 2012 w formacie .json.

Każdy rekord złożony jest z pól:
* Title - tytuł w języku polskim
* Original title - oryginalny tytuł
* Year - rok rozpoczęcia serialu
* Genre - gatunek serialu
* AverageRate - średnia ocena
* Votes - liczba głosów

2. Skrypty:

a) 2mongo.sh
Skrypt zapisuje dane z pliku baza_seriali.json do bazy MongoDB

Przykładowe wywołanie: `./2mongo.sh test series`

Przykładowe sprawdzenie: `db.series.find()`

b) 2couch.sh
Skrypt zapisuje dane z pliku baza_seriali.json do bazy CouchDB

Przykładowe wywołanie: `./2couch.sh http://localhost:5984 sitcoms baza_seriali.json`

Przykładowe sprawdzenie: `http://localhost:5984/_utils`

c)mongo2couch.sh
Skrypt kopiuje dane z bazy MongoDB do bazy CouchDB

Korzysta ze skryptu:
export.rb

Przykładowe wywołanie: `./mongo2couch.sh 27017 test series baza_seriali.json`

Przykładowe sprawdzenie: `http://localhost:5984/_utils`

3. Map Reduce:
mapReduceRate.js (do bazy MongoDB)
Wylicza ile seriali dostało taką samą ocenę, kolejność wypisywana jest od największej ilości seriali o tej samej ocenie 
	
Przykładowe wywołanie: `mongo mapReduceRate.js --shell`, następnie `db.odp.find().sort({value: -1})`

Wyniki: `{ "_id" : "7.840", "value" : 6 }
{ "_id" : "7.843", "value" : 6 }
{ "_id" : "7.886", "value" : 6 }
{ "_id" : "7.916", "value" : 6 }
{ "_id" : "7.930", "value" : 6 }
{ "_id" : "7.968", "value" : 6 }
{ "_id" : "8.095", "value" : 6 }
{ "_id" : "7,890", "value" : 3 }
{ "_id" : "7.788", "value" : 3 }
{ "_id" : "7.792", "value" : 3 }
{ "_id" : "7.798", "value" : 3 }
{ "_id" : "7.813", "value" : 3 }
{ "_id" : "7.818", "value" : 3 }
{ "_id" : "7.821", "value" : 3 }
{ "_id" : "7.822", "value" : 3 }
{ "_id" : "7.830", "value" : 3 }
{ "_id" : "7.831", "value" : 3 }
{ "_id" : "7.836", "value" : 3 }
{ "_id" : "7.838", "value" : 3 }
{ "_id" : "7.846", "value" : 3 }`

