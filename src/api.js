const server = 'http://localhost:3030/'

const toLower = (x) => x.toLowerCase()

const getOrForTag = (i, tag) => {
  return `$or[${i}][front.tags]=${tag}&$or[${i + 1}][back.tags]=${tag}`
}

export function getQueryForTags(tags) {
  tags = tags.map(toLower)
  if (tags.length) {
    const ors = tags.map((tag, i) => getOrForTag(i * 2, tag)).join('&')
    return `?${ors}`
  }
  return ''
}

export async function loadFlashCards(tags) {
  const query = getQueryForTags(tags)
  return await fetch(`${server}flashcards${query}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

export async function deleteFlashCard(id) {
  return await fetch(`${server}flashcards/${id}`, {
    method: 'DELETE',
  })
    .then(resp => resp.json())
}
