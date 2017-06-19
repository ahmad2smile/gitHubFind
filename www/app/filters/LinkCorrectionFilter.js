appMainModule.filter("linkCorrectionFilter", function() {
	return function(input) {
		if (typeof input === 'string' || input instanceof String) {
			if(input.startsWith("http")) return input;
			return "https://" + input;
		}else {
			return input;
		}
	}
})
