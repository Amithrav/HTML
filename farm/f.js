const cropData = {
  rice: {
    days: 120,
    tip: "Needs warm weather and lots of water.",
    plantingMonths: [6, 7, 8]

    
  },
  wheat: {
    days: 100,
    tip: "Grows best in cool, dry climates.",
    plantingMonths: [10, 11, 12]
  },
  tomato: {
    days: 75,
    tip: "Requires sunlight and regular watering.",

    plantingMonths: [2, 3, 4]
  },
  potato: {
    days: 90,
    tip: "Prefers loose, well-drained soil.",
    plantingMonths: [9, 10, 11]
  
  },
  maize: {
    days: 110,
    tip: "Thrives in warm climates with moderate rainfall.",
    plantingMonths: [5, 6, 7]
  },
  sugarcane: {
    days: 300,
    tip: "Requires tropical climate and abundant water.",
    plantingMonths: [1, 2, 3]
  },
  cotton: {
    days: 180,
    tip: "Needs warm weather and dry conditions.",
    plantingMonths: [4, 5, 6]
  },
  soybean: {
    days: 100,
    tip: "Grows well in warm, moist conditions.",
    plantingMonths: [6, 7, 8]
  },
  onion: {
    days: 90,
    tip: "Prefers cool weather and well-drained soil.",
    plantingMonths: [11, 12, 1]
  }
};

function calculateHarvest() {

   


  const crop = document.getElementById("cropSelect").value;
  const dateInput = document.getElementById("plantDate").value;
  const resultBox = document.getElementById("resultBox");
  const cropInfo = document.getElementById("cropInfo");
  const harvestDate = document.getElementById("harvestDate");
  const growthBar = document.getElementById("growthBar");
  const seasonTip = document.getElementById("seasonTip");
  const plantDateDisplay = document.getElementById("plantDateDisplay");
  const harvestDateDisplay = document.getElementById("harvestDateDisplay");
  const daysElapsedDisplay = document.getElementById("daysElapsedDisplay");
  const totalDaysDisplay = document.getElementById("totalDaysDisplay");
  const plantingWindow = document.getElementById("plantingWindow");

  if (!crop || !dateInput) {
    alert("Please select a crop and planting date.");
    return;
  }

  const plantDate = new Date(dateInput);
  const today = new Date();
  const daysToHarvest = cropData[crop].days;
  const harvest = new Date(plantDate.getTime() + daysToHarvest * 24 * 60 * 60 * 1000);

  const daysElapsed = Math.floor((today - plantDate) / (1000 * 60 * 60 * 24));
  const growthPercent = Math.min(100, Math.floor((daysElapsed / daysToHarvest) * 100));
  growthBar.style.width = `${growthPercent}%`;
  growthBar.textContent = `${growthPercent}%`;

  plantDateDisplay.textContent = plantDate.toDateString();
  harvestDateDisplay.textContent = harvest.toDateString();
  daysElapsedDisplay.textContent = daysElapsed;
  totalDaysDisplay.textContent = daysToHarvest;

  const currentMonth = today.getMonth() + 1;
  const isIdealMonth = cropData[crop].plantingMonths.includes(currentMonth);
  seasonTip.textContent = isIdealMonth
    ? "✅ This is a good month to plant this crop."
    : "⚠️ This month is not ideal for planting this crop.";

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const readableMonths = cropData[crop].plantingMonths.map(m => monthNames[m - 1]).join(", ");
  plantingWindow.textContent = `Recommended Planting Months: ${readableMonths}`;

  cropInfo.textContent = `Crop: ${crop.charAt(0).toUpperCase() + crop.slice(1)} — ${cropData[crop].tip}`;
  harvestDate.textContent = `Estimated Harvest Date: ${harvest.toDateString()}`;
  document.body.style.backgroundImage = `url('${cropData[crop].background}')`;
  resultBox.classList.remove("d-none");
}
