//Dynamic pray the rosary buttontah
const link = document.getElementById("rosary-button");

if (link) {
    const today = new Date();
    const day = today.getDay();
    if (day == 0 || day == 3) {
        link.href = "https://www.youtube.com/watch?v=hSYGWGFl-W8";
    }
    else if (day == 1 || day == 6) {
        link.href = "https://www.youtube.com/watch?v=gdZuweae75M";
    }
    else if  (day == 2 || day == 5) {
        link.href ="https://www.youtube.com/watch?v=fucgiDu-Fd0";
    }
    else {
        link.href = "https://www.youtube.com/watch?v=11dVyWAm_GM";
    }
}
// Fills in Navbar placeholder
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });
