// 1. Load sample notes on "notes.html"
const sampleNotes = [
  { title: "Computer Fundamentals - Sem 1", link: "#" },
  { title: "Data Structures - Sem 2", link: "#" },
  { title: "DBMS - Sem 3", link: "#" },
  { title: "Networking - Sem 4", link: "#" },
];

function loadNotes() {
  const container = document.querySelector(".notes-list");
  if (container) {
    sampleNotes.forEach(note => {
      const div = document.createElement("div");
      div.className = "note-card";
      div.innerHTML = `
        <h3>${note.title}</h3>
        <a href="${note.link}" target="_blank">Download PDF</a>
      `;
      container.appendChild(div);
    });
  }
}

// 2. Handle Upload Form (UI Only)
function handleUploadForm() {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const title = form.querySelector("input[type='text']").value;
      const file = form.querySelector("input[type='file']").files[0];

      if (!title || !file) {
        alert("Please enter title and choose a PDF file.");
        return;
      }

      // Simulate successful upload
      alert("✅ Note uploaded successfully (demo only).");
      form.reset();
    });
  }
}

// 3. Execute functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadNotes();
  handleUploadForm();
});


// Upload Notes Functionality
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uploadForm");
  const notesList = document.getElementById("notesList");

  if (form && notesList) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("noteTitle").value;
      const fileInput = document.getElementById("noteFile");
      const file = fileInput.files[0];

      if (title && file) {
        const listItem = document.createElement("li");
        listItem.textContent = ${title} – ${file.name};
        notesList.appendChild(listItem);

        form.reset();
      } else {
        alert("Please provide both a title and a file.");
      }
    });
  }
});


  const cards = document.querySelectorAll('.highlight-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => {
    observer.observe(card);
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const storySection = document.querySelector('.story-flex-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          storySection.classList.add('show');
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(storySection);
  });



