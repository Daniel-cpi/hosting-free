// Ambil elemen HTML
const serverStatus = document.getElementById("server-status");
const cpuUsage = document.getElementById("cpu-usage");
const ramUsage = document.getElementById("ram-usage");
const diskUsage = document.getElementById("disk-usage");

const startButton = document.getElementById("start-server");
const stopButton = document.getElementById("stop-server");

// Fungsi untuk memperbarui status server
async function updateServerStatus() {
  const response = await fetch("/api/server");
  const data = await response.json();

  serverStatus.textContent = data.status;
  serverStatus.style.color = data.status === "Running" ? "green" : "red";
  cpuUsage.textContent = data.cpuUsage;
  ramUsage.textContent = data.ramUsage;
  diskUsage.textContent = data.diskUsage;
}

// Mulai server
startButton.addEventListener("click", async () => {
  await fetch("/api/server/start", { method: "POST" });
  updateServerStatus();
});

// Hentikan server
stopButton.addEventListener("click", async () => {
  await fetch("/api/server/stop", { method: "POST" });
  updateServerStatus();
});

// Perbarui status server saat halaman dimuat
updateServerStatus();
