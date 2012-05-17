//wylicza ile seriali dostalo taka sama ocene, kolejnosc wypisywana jest od najwieksze ilosci seriali o tej samej ocenie -- mapReduce na MongoDB

m = function() {    // map - odpowiedzialna za wypisanie wszystkich ocen
	emit(this.AverageRate, 1);
};

r = function(key, values) {  // reduce - zlicza ilosci danych ocen
	var result = 0;
	values.forEach(function(count) {
		result += count;
	});
	return result;
};	 

res = db.series.mapReduce(m, r, {out: "odp"});
printjson(res);
