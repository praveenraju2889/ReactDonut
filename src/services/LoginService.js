export async function login(userName, password) {
  try {
    const response = await fetch('http://localhost:8080/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
}
