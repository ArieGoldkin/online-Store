import { addNewProduct, updateProduct } from "./server";

(async function testFunc() {
  await addNewProduct({
    name: "My product",
    id: "12347"
  });

  await updateProduct({
    id: "12347",
    name: "My Product - update!!!!"
  });
})();
