fetch("C:/programming\\Web\\Test\\people.json")
  .then(response => response.json())
  .then(value => console.log(value))
  .catch(error => console.error(error));

