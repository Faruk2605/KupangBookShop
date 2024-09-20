fetch("./assets/books/books.json")
  .then((res) => {
    return res.json();
  })
  .then((books) => {
    const fiction = books[0].fiksi;
    const philoshopy = books[1].filsafat;

    const convertToRupiah = (value) => {
      const formatter = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      });
      return formatter.format(value);
    };

    const isDiscount = (discount, basePrice) => {
      if (discount !== "" && basePrice !== "") {
        return "active";
      } else {
        return "";
      }
    };

    // recomendadation books
    const recomendedBookFiction = fiction.slice(0, 5);
    const recomendedBookPhiloshopy = philoshopy.slice(0, 5);

    const recomendationBooks = [
      ...recomendedBookFiction,
      ...recomendedBookPhiloshopy,
    ];

    recomendationBooks.map((book) => {
      const recomendedBooksDisplay = `
          <div class="card">
            <picture class="image-wrapper">
              <img
                src="${book.image}"
                alt=""
              />
            </picture>
            <span class="discount ${isDiscount(
              book.discount,
              book["base-price"]
            )}">${book.discount}</span>
            <div class ="text-content">
              <p class="author">${book.author}</p>
              <h3 class="title">${book.title}</h3>
              <h2 class="price">${convertToRupiah(book.price)}</h2>
              <h2 class="base-price ${isDiscount(
                book.discount,
                book["base-price"]
              )}">${convertToRupiah(book["base-price"])}</h2>
            </div>
            </div>
      `;

      document
        .querySelector(".container")
        .insertAdjacentHTML("beforeend", recomendedBooksDisplay);
    });

    // philoshopy books
    const selectAllPhiloshopy = philoshopy.slice(5, 20);

    selectAllPhiloshopy.map((book) => {
      const displayBooksPhiloshopy = `
      <div data-aos="fade-up" data-aos-duration="1000" class="card">
            <picture class="image-wrapper">
              <img
                src="${book.image}"
                alt=""
              />
            </picture>
            <span class="discount ${isDiscount(
              book.discount,
              book["base-price"]
            )}">${book.discount}</span>
            <div class ="text-content">
              <p class="author">${book.author}</p>
              <h3 class="title">${book.title}</h3>
              <h2 class="price">${convertToRupiah(book.price)}</h2>
              <h2 class="base-price ${isDiscount(
                book.discount,
                book["base-price"]
              )}">${convertToRupiah(book["base-price"])}</h2>
            </div>
            </div>      
      `;

      document
        .querySelector(".display-philoshopy-books .container-grid")
        .insertAdjacentHTML("beforeend", displayBooksPhiloshopy);
    });

    const selectAllFiction = fiction.slice(5, 20);

    selectAllFiction.map((book) => {
      const displayBooksFiction = `
      <div data-aos="fade-up" data-aos-duration="1000" class="card">
            <picture class="image-wrapper">
              <img
                src="${book.image}"
                alt=""
              />
            </picture>
            <span class="discount ${isDiscount(
              book.discount,
              book["base-price"]
            )}">${book.discount}</span>
            <div class ="text-content">
              <p class="author">${book.author}</p>
              <h3 class="title">${book.title}</h3>
              <h2 class="price">${convertToRupiah(book.price)}</h2>
              <h2 class="base-price ${isDiscount(
                book.discount,
                book["base-price"]
              )}">${convertToRupiah(book["base-price"])}</h2>
            </div>
            </div>      
      `;

      document
        .querySelector(".display-fiction-books .container-grid")
        .insertAdjacentHTML("beforeend", displayBooksFiction);
    });
  });
