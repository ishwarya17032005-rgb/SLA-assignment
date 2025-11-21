async function fetchGitHubUser() {
  try {
    const response = await fetch("https://github.com/ishwarya17032005-rgb/SLA-assignment.git");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Login:", data.login);
    console.log("Public Repos:", data.public_repos);
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error.message);
  }
}

fetchGitHubUser();