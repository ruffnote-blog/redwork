function loadOptions() {
  chrome.storage.sync.get('rooms', function(items) {
    if (!items.rooms) {
      return
    }
    document.querySelector('#rooms').value = items.rooms 
  })
}

function saveOptions(e) {
  chrome.storage.sync.set({
    rooms: e.target.value
  })
}

document.addEventListener('DOMContentLoaded', loadOptions)
document.querySelector('#rooms').addEventListener('input', saveOptions)
