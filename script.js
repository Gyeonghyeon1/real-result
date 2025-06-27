const sheetUrl = "https://docs.google.com/spreadsheets/d/1jTOurtDad_WpwH7bXLqxPcxRvgN-0bhzqMRajfqD9Zw/export?format=csv&gid=1731172628";

fetch(sheetUrl)
  .then(res => res.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(row => row.split(","));
    const lastRow = rows[rows.length - 1];
    let finalValue = "0이 아닌 값 없음";
    for (let i = lastRow.length - 1; i >= 0; i--) {
      const cell = lastRow[i].trim();
      if (cell !== "0" && cell !== "") {
        finalValue = cell;
        break;
      }
    }
    document.getElementById("finalValue").textContent = finalValue;
  })
  .catch(() => {
    document.getElementById("finalValue").textContent = "불러오기 실패";
  });
