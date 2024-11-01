fetch("https://whatyearisit-backend-omega-one.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("year").textContent = data.year;
  });
