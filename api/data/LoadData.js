/* Imported data ------------------------------------------------------------------------------------------------------------ */
var TestScriptData;

/*  Load the the UseCaseData ------------------------------------------------------------------------------------------------ */
function LoadData(path) {
	LoadJSON(path + 'UseCaseData.json', 'Use case data loaded successfully.', function(response) {
		TestScriptData = JSON.parse(response);
	});
}
/* Load JSON ---------------------------------------------------------------------------------------------------------------- */
function LoadJSON( filePath, message, callback ) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', filePath, true);
	xobj.onload = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
			PrintToConsole('LoadJSON', message);
			FetchFlowData();
		} else {
			PrintToConsole('LoadJSON', 'Data could not be loaded.');
		}
	};
	xobj.send(null);
}