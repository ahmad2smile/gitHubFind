appMainModule.filter("langFilter",function() {
	return function(input, lang) {
		if (Object.prototype.toString.call(input) !== "[object Array]") {
			return input;
		}else {
			return input.filter((x)=> {
				if (x.usedLangs && lang !== "" && lang !== undefined) {
					return x.usedLangs.includes(lang);
				}else{
					return true;
				}
			});
		}
	}
})
