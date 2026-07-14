document.addEventListener("DOMContentLoaded", () => {


  // =========================
  // 🌙 Dark Mode Toggle
  // =========================

  const themeButton = document.getElementById("theme-button");

  if (themeButton) {

    themeButton.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

    });

  }


  // =========================
  // 🎓 Graduate Search
  // =========================


  const searchButton = document.getElementById("search-graduates");


  if (searchButton) {


    searchButton.addEventListener("click", () => {


      const selectedYear = document.getElementById("year").value;

      const selectedSchool = document.getElementById("school").value;


      const container = document.getElementById("graduate-container");



      if (!selectedYear || !selectedSchool) {

        container.innerHTML =
          "<p>Please select both a graduation year and school.</p>";

        return;

      }


      fetch("graduates.json")

        .then(response => response.json())

        .then(graduates => {



          const filteredGraduates = graduates.filter(student => {


            return (

              student.year === selectedYear &&

              student.school === selectedSchool

            );


          });



          container.innerHTML = "";



          if (filteredGraduates.length === 0) {


            container.innerHTML =
              "<p>No graduates found for this selection.</p>";


            return;

          }


          filteredGraduates.forEach(student => {


            const card = document.createElement("div");


            card.className = "graduate-card";



            card.innerHTML = `

                        <h3>🎓 ${student.name}</h3>

                        <p><strong>Class:</strong> ${student.year}</p>

                        <p><strong>School:</strong> ${student.school}</p>

                        <p><strong>Rank:</strong> ${student.rank}</p>

                        <p><strong>College:</strong> ${student.college}</p>

                        <p><strong>Major:</strong> ${student.major}</p>

                        <p><strong>Honors:</strong> ${student.honors}</p>

                        <p>${student.bio}</p>

                    `;



            container.appendChild(card);



          });



        })


        .catch(error => {


          console.log("Error loading graduates:", error);


          container.innerHTML =
            "<p>Unable to load graduate data.</p>";


        });

    });


  }


  // =========================
  // ✍️ Share Your Story Form
  // =========================



  const storyForm = document.getElementById("story-form");


  if (storyForm) {


    storyForm.addEventListener("submit", (event) => {


      event.preventDefault();


      const name = document.getElementById("story-name").value;


      const year = document.getElementById("story-year").value;


      const school = document.getElementById("story-school").value;


      const college = document.getElementById("college").value;


      const major = document.getElementById("major").value;


      const story = document.getElementById("story").value;



      alert(

        `Thank you ${name}! 🎓\n\nYour graduation story has been submitted.`

      );


      storyForm.reset();


    });


  }


});