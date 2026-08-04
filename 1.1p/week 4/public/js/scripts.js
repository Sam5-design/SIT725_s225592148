const submitForm = () => {
  let formData = {};
  formData.plant_name = $('#plant_name').val();
  formData.care_level = $('#care_level').val();
  formData.notes = $('#notes').val();

  console.log("Form Data Submitted: ", formData);

  // Clear the form and close the modal after submit
  $('#plant_name').val('');
  $('#care_level').val('');
  $('#notes').val('');
  $('#modal1').modal('close');
}

const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' + item.description + '</p>' +
      '</div></div></div>';
    $("#card-section").append(itemToAppend);
  });
}

const loadPlants = () => {
  fetch('/api/plants')
    .then(res => res.json())
    .then(response => {
      if (response.statusCode === 200) {
        addCards(response.data);
      }
    })
    .catch(err => console.error('Error fetching plants:', err));
}

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#formSubmit').click(() => {
    submitForm();
  });

  loadPlants();
});