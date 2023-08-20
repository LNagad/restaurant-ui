export const verifySession = async () => {
  const sessionString = sessionStorage.getItem('session');

  if (!sessionString) {
    return null;
  }

  try {
    const session = JSON.parse(sessionString);
    const currentTime = new Date().getTime();

    if (currentTime >= session.expiration) {
      sessionStorage.removeItem('session');
      return null;
    }

    if (!session.token) {
      sessionStorage.removeItem('session');
      return null;
    }

    const response = await fetch('import.meta.env.VITE_BACKEND_API/auth/verify-token', {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
      method: 'POST',
    });

    const result = await response.json();

    if (!result.ok) {
      sessionStorage.removeItem('session');
      return null;
    }

    const user = {
      uid: session.uid,
      email: session.email,
      name: session.name,
      role: session.role,
      token: session.token,
    };

    return user;
  } catch (error) {
    sessionStorage.removeItem('session');
    return null;
  }
};
