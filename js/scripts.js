$(document).ready(function() {
    $("#formOne").submit(function(event) {
      const person1Input = $("input#person1").val();
      const person2Input = $("input#person2").val();
      const animalInput= $("input#animal").val();
      const exclamationInput = $("input#exclamation").val();
      const verbInput = $("input#verb").val();
      const nounInput = $("input#noun").val();
      const scaryAnimalInput = $("input#x1").val();
      const bigThingInput = $("input#x2").val();
      const throwInput = $("input#x3").val();
      const valuableInput = $("input#x4").val();
      const placeInput = $("input#x5").val();
  
      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);
      $(".x1").text(scaryAnimalInput);
      $(".x2").text(bigThingInput);
      $(".x3").text(throwInput);
      $(".x4").text(valuableInput);
      $(".x5").text(placeInput);
  
      $("#story").show();
  
      event.preventDefault();
    });
  }); 
