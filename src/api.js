const server = 'http://localhost:3030/'

// single tag, search front and back
// http://localhost:3030/flashcards?$or[0][front.tags]=spanish&$or[1][back.tags]=spanish

const toLower = (x) => x.toLowerCase()

function getQueryForTags(tags) {
  tags = tags.map(toLower)
  if (tags.length) {
    const [tag] = tags
    return `?$or[0][front.tags]=${tag}&$or[1][back.tags]=${tag}`
  }
  return ''
}

export async function loadFlashCards(tags) {
  const query = getQueryForTags(tags)
  return await fetch(`${server}flashcards${query}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}
