export default function apiGet<T> (url: string): Promise<T> {
  return fetch(`http://localhost:3000/api${url}`).then(response => {
    return response.json();
  });
}
