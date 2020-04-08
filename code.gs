function doGet(request) {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate();
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1dowxgMfluw2q37b6DJKakqJzcAum-IGGKrnK5n6pk7M/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([formObject.Nama,
                formObject.Alamat,
                formObject.Jeniskelamin,
                formObject.Tanggal_lahir,
                formObject.Nomor_hp,
                formObject.Email]);
}
