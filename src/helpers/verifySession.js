export const verifySession = async () => {
  const sessionString = localStorage.getItem('session');

  if (!sessionString) {
    return null;
  }

  try {
    const session = JSON.parse(sessionString);
    const currentTime = new Date().getTime();

    if (currentTime >= session.expiration) {
      localStorage.removeItem('session');
      return null;
    }

    if (!session.token) {
      localStorage.removeItem('session');
      return null;
    }

    const response = await fetch('http://localhost:3000/auth/verify-token', {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
      method: 'POST',
    });

    const result = await response.json();

    if (!result.ok) {
      localStorage.removeItem('session');
      return null;
    }

    const user = {
      userId: session.userId,
      email: session.email,
      name: session.name,
      role: session.role,
      token: session.token,
    };

    return user;
  } catch (error) {
    localStorage.removeItem('session');
    return null;
  }
};
