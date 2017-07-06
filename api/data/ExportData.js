/* Export CSV --------------------------------------------------------------------------------------------------------------- */
function ExportCSV(data) {
    var csvContent = 'data:text/csv;charset=utf-8,';
    data.forEach(function(infoArray, index) {
        dataString = infoArray.join(';');
        csvContent += dataString + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}