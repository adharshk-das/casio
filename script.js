
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  
  
  import { Input, initMDB } from "mdb-ui-kit";
  
  initMDB({ Input });
  
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
  });