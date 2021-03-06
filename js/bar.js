var search = document.getElementsByClassName('query-input')[0]
var searchTerm = $('input.query-input')

search.addEventListener('keypress', function (e) {
  var query = e.target.value
  var key = e.which || e.keyCode
  if (key === 13) {
    e.preventDefault()

    
    window.location.href = './search.html?search=' + query
  }


  // var results = document.getElementById('results')
  // results.classList = query === "" ? "" : "active"

// searchLibrary(query)
})

//
//
search.addEventListener('focus', function (e) {
  var main = document.getElementsByClassName('main')[0]
  main.classList = 'main'
})

// cancel on X click or ESC
var cancel = document.getElementsByClassName('cancel')[0]
cancel.addEventListener('click', cancelInput)

document.onkeydown = function (e) {
  e = e || window.event
  var isEscape = false
  if ('key' in e) {
    isEscape = e.key === 'Escape'
  } else {
    isEscape = e.keyCode === 27
  }
  if (isEscape) cancelInput()
}

function cancelInput () {
  var main = document.getElementsByClassName('main')[0]
  main.classList.add('inactive')
  search.value = ''
  document.getElementById('results').classList = ''
  search.blur()
}
