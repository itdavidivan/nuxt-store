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
        <button
          class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Cart
        </button>
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
              src="https://via.placeholder.com/150"
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
              src="https://via.placeholder.com/150"
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
              src="https://via.placeholder.com/150"
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
              src="https://via.placeholder.com/150"
              alt="Category 4"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h3 class="text-2xl font-semibold">Clothing</h3>
          </div>
        </nuxt-link>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section id="products" class="py-16 px-4 bg-gray-100">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">
        Featured Products
      </h2>
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Product 1 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Product 1"
            class="w-full h-64 object-cover mb-4"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Tesla Model S</h3>
            <p class="text-gray-600 mb-4">
              A fully electric sedan with advanced autopilot features.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-blue-600">$79999</span>
              <button
                class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Product 2"
            class="w-full h-64 object-cover mb-4"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Apple iPhone 15</h3>
            <p class="text-gray-600 mb-4">
              Latest iPhone with A17 chip and improved camera system.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-blue-600">$999</span>
              <button
                class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <!-- Product 3 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Product 3"
            class="w-full h-64 object-cover mb-4"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Nike Air Max 97</h3>
            <p class="text-gray-600 mb-4">
              Stylish and comfortable running shoes from Nike.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-blue-600">$120</span>
              <button
                class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
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
