<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <header class="bg-white shadow-md py-4 px-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-semibold text-blue-600">
          <a href="#">ShopMaster</a>
        </div>
        <nav class="space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#categories" class="text-gray-700 hover:text-blue-600"
            >Categories</a
          >
          <a href="#products" class="text-gray-700 hover:text-blue-600"
            >Products</a
          >
          <a href="#contact" class="text-gray-700 hover:text-blue-600"
            >Contact</a
          >
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white w-full"
    >
      <h1 class="text-5xl font-extrabold mb-4">Welcome to ShopMaster</h1>
      <p class="text-lg mb-8">
        Browse our exclusive collection of products and enjoy great deals.
      </p>
      <button
        class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Shop Now
      </button>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="py-16 px-4">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">
        Shop by Categories
      </h2>
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <!-- Category 1 -->
        <nuxt-link to="/cars">
          <div
            class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://th.bing.com/th/id/OIP.m4KhVoOc_hTH4E9-hfXj1wHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Category 1"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h3 class="text-2xl font-semibold">Cars</h3>
          </div>
        </nuxt-link>
        <!-- Category 2 -->
        <nuxt-link to="/electronic"
          ><div
            class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://th.bing.com/th/id/OIP.cRSpT192Z3KxFhf0i1KoOQHaEx?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Category 2"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h3 class="text-2xl font-semibold">Electronics</h3>
          </div></nuxt-link
        >

        <!-- Category 3 -->
        <nuxt-link to="/food">
          <div
            class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I0lAKalx2Je4lRF5E_rSJZAtPrpKAHA8vg&s"
              alt="Category 3"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h3 class="text-2xl font-semibold">Food</h3>
          </div>
        </nuxt-link>

        <!-- Category 4 -->
        <nuxt-link to="/clothing">
          <div
            class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvBCBan3wB2M3K0Ha3rzEx1v4yBa5veipmA&s"
              alt="Category 4"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h3 class="text-2xl font-semibold">Clothing</h3>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section id="products" class="py-16 px-4 bg-gray-100">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">
        Featured Products
      </h2>
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Product 1 -->
        <nuxt-link to="/cars/0ae7a6da-c14a-4be2-b8e1-9afa68dfb93f">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://www.techbyte.sk/wp-content/uploads/2021/01/tesla-model-S-2021.jpg"
              alt="Product 1"
              class="w-full h-64 object-cover mb-4"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Tesla Model S</h3>
              <p class="text-gray-600 mb-4">
                A fully electric sedan with advanced autopilot features.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-semibold text-blue-600">$79 999</span>
                <button
                  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  OPEN PRODUCT
                </button>
              </div>
            </div>
          </div></nuxt-link
        >

        <!-- Product 2 -->
        <nuxt-link to="/electronic/e1454887-b6c0-4e76-b642-88d3a5330208"
          ><div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://th.bing.com/th/id/OIP.cRSpT192Z3KxFhf0i1KoOQHaEx?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Product 2"
              class="w-full h-64 object-cover mb-4"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">
                Apple iPhone 15
              </h3>
              <p class="text-gray-600 mb-4">
                Latest iPhone with A17 chip and improved camera system.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-semibold text-blue-600">$999</span>
                <button
                  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  OPEN PRODUCT
                </button>
              </div>
            </div>
          </div></nuxt-link
        >

        <!-- Product 3 -->
        <nuxt-link to="/clothing/5bf6d270-468b-4d94-be91-5bfe60042717">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvBCBan3wB2M3K0Ha3rzEx1v4yBa5veipmA&s"
              alt="Product 3"
              class="w-full h-64 object-cover mb-4"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">
                Nike Air Max 97
              </h3>
              <p class="text-gray-600 mb-4">
                Stylish and comfortable running shoes from Nike collection.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-semibold text-blue-600">$120</span>
                <button
                  class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  OPEN PRODUCT
                </button>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>

    <!-- Footer Section -->
    <footer id="contact" class="bg-blue-600 text-white py-6 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-lg">ShopMaster &copy; 2025 | All Rights Reserved</p>
        <p class="text-sm mt-2">Contact us: support@shopmaster.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
