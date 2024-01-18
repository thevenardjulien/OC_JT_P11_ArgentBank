export async function fetchLogin(email, password) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok && response.status === 200) {
      console.log("Connexion réussie");
      return response;
    }
  } catch (error) {
    console.error("Une erreur est survenue. Impossible de se connecter");
  }
}
