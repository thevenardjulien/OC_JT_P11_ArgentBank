export async function fetchProfile(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok && response.status === 200) {
      return response.json();
    }
  } catch (error) {
    console.error("Unexpected error. Can't access to profile.");
  }
}

export async function fetchEditProfile(userName, token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
        "content-type": "application.json",
      },
      body: JSON.stringify({ userName: userName }),
    });
    if (response.ok && response.status === 200) {
      return response.json();
    }
  } catch (error) {
    console.error("Unexpected error. Can't edit profile.");
  }
}
