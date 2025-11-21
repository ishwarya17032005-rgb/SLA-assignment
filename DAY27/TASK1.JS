fetch()
  .then(response => response.json("https://github.com/ishwarya17032005-rgb/SLA-assignment.git"))
  .then(data => {
    console.log("GitHub Profile Data:", data);
  })
  .catch(error => {
    console.error("Error fetching GitHub profile:", error);
  });