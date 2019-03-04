(function() {

const TEXTAREA_ID = '#_chatText'
const RETRY_LIMIT = 5

function makeRed() {
  const roomId = location.hash.match(/rid(\d+)/)[1]
  chrome.storage.sync.get('rooms', function(items) {
    if (!items.rooms) {
      return
    }
    const color = items.rooms.split('\n').includes(roomId) ? '#FF8A80' : null
    document.querySelector(TEXTAREA_ID).style.backgroundColor = color
  })
}

function waitTextarea(retryCount) {
  if (retryCount > RETRY_LIMIT) {
    return
  }

  if (document.querySelector(TEXTAREA_ID)) {
    makeRed()
  } else {
    setTimeout(function() { waitTextarea(retryCount + 1) }, 1000)
  }
}

window.addEventListener('hashchange', makeRed)
waitTextarea(1)

})()
