console.log('hello world');

// $(document).ready(() => {});
$(() => {

  const loadProducts = () => {
    $.get('/api/products')
      .then((products) => {
        console.log(products);
        renderProductElements(products);
      });
  };

  loadProducts();

  const createProductElement = (product) => {
    const $productElement = $(`
      <div style="border: 1px solid magenta;" id="${product.id}">
        <h2>Product name: ${product.product_name} (${product.id})</h2>
        <h2>Price: $${product.price}</h2>
      </div>
    `);

    const $editProductForm = $(`
      <form>
        <label>New product name:</label>
        <input name="productName" value="${product.product_name}" />
        <br/>
        <label>New price:</label>
        <input name="price" value="${product.price}"/>
        <br/>
        <input type="checkbox" name="my-checkbox" />
        <button type="submit">Edit!!</button>
      </form>
    `);

    $editProductForm.on('submit', (event) => {
      event.preventDefault();
      const data = $editProductForm.serialize();
      console.log(data);
      
      // $.post(`/products/${product.id}`, data)
      //   .then(() => {
      //     loadProducts();
      //   });

      $.ajax({
        url: `/api/products/${product.id}`,
        data: data,
        method: 'PATCH'
      })
        .then(() => {
          loadProducts();
        });
    });

    $productElement.append($editProductForm);

    const $deleteButton = $('<button>Delete</button>');

    $deleteButton.on('click', () => {
      $.ajax({
        method: 'DELETE',
        url: `/api/products/${product.id}`
      })
        .then(() => {
          loadProducts();
        });
    });

    $productElement.append($deleteButton);

    return $productElement;
  };

  const renderProductElements = (products) => {
    const $productContainer = $('#product-container');
    $productContainer.empty();

    for (const product of products) {
      const $productElement = createProductElement(product);
      $productContainer.append($productElement);
    }
  };

  const $newProductForm = $('#new-product-form');

  $newProductForm.on('submit', (event) => {
    event.preventDefault();
    const data = $newProductForm.serialize();
    // console.log(data);
    $.post('/api/products', data)
      .then(() => {
        loadProducts();
      });
  });

});
