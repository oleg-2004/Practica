document.getElementById('searchInput').addEventListener('input', function() {
    var filter = this.value.toLowerCase();
    var works = document.querySelectorAll('.work');
    var found = false;

    works.forEach(function(work) {
        var title = work.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            work.style.display = '';
            if (!found) {
                work.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true; // Прекращаем поиск после первой найденной картины
            }
        } else {
            work.style.display = 'none';
        }
    });
});

