//   1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).
//   */

fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    const img = document.createElement("img")
    img.src = data.results[0].picture.large
    document.body.append(img)
      console.log(data.results[0].picture.large)
      
      const fName = document.createElement("h1")
      fName.textContent = data.results[0].name.first
      document.body.append(fName)

      const lName = document.createElement("h1")
      lName.textContent = data.results[0].name.last
      document.body.append(lName)

      const age = document.createElement("h1")
      age.textContent = `${data.results[0].dob.age} years old`; 
      document.body.append(age)
      
      const email = document.createElement("h2")
      email.textContent = data.results[0].email
      document.body.append(email)
      
      console.log(data.results[0])
})
  .catch(e => console.log(e.message))
