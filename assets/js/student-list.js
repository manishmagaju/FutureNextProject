
    const searchInput = document.getElementById('search');
    const filterClass = document.getElementById('filter-class');
    const students = document.querySelectorAll('.student-card');

    function filterStudents() {
      const searchText = searchInput.value.toLowerCase();
      const selectedClass = filterClass.value;
      students.forEach(student => {
        const name = student.getAttribute('data-name').toLowerCase();
        const studentClass = student.getAttribute('data-class');
        const matchesSearch = name.includes(searchText);
        const matchesClass = selectedClass === '' || studentClass === selectedClass;
        student.style.display = matchesSearch && matchesClass ? 'block' : 'none';
      });
    }

    searchInput.addEventListener('input', filterStudents);
    filterClass.addEventListener('change', filterStudents);