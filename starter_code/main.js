$("#submit-btn").click(function(event){
  var city = $('#city-type').val();
  city = city.trim();
  event.preventDefault();

  if (city === "New York" || city === "NY" || city=== "new york" || city=== "ny") {
    $('body').addClass('nyc');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  }

  else if (city === "San Francisco" || city === "SF" || city=== "sf" || city=== "san francisco") {
    $('body').addClass('sf');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  }

  else if (city === "Los Angeles" || city === "LA" || city=== "la" || city=== "los angeles") {
    $('body').addClass('la');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  }

  else if (city === "Austin" || city === "austin" || city=== "ATX" || city=== "atx") {
    $('body').addClass('austin');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  }

  else if (city === "Sydney" || city === "sydney" || city=== "SYD" || city=== "syd") {
    $('body').addClass('sydney');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  }

  $('#city-type').val('');
})
