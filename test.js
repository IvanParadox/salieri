function search(value) {
  let data = 'first'

  if (data.search(value) != -1 ) {
    console.log(value);
  } else {
    console.log('dont match');
  }
}

search("tr");
