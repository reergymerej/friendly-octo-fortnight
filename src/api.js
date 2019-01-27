const server = 'http://localhost:3030/'

export async function loadFlashCards() {
  return await fetch(`${server}flashcards`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}
