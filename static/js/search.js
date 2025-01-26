document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let table = document.querySelector('table');
    let tr = table.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
      let tdTitle = tr[i].getElementsByTagName('td')[0];
      let tdDesc = tr[i].getElementsByTagName('td')[1];
      if (tdTitle || tdDesc) {
        let txtValueTitle = tdTitle.textContent || tdTitle.innerText;
        let txtValueDesc = tdDesc.textContent || tdDesc.innerText;
        if (txtValueTitle.toUpperCase().indexOf(filter) > -1 || txtValueDesc.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          tr[i].classList.add('highlight');
        } else {
          tr[i].style.display = "none";
          tr[i].classList.remove('highlight');
        }
      }
    }
  });