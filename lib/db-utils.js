export async function signUp(emailData, passwordData) {
  return await fetch(
    // authentication firebase,
    {
      method: "POST",
      body: JSON.stringify({
        email: emailData,
        password: passwordData,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return true;
    } else {
      return res.json().then((data) => {
        alert(data.error.message);
      });
    }
  });
}
