<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div class="flex-1">
        <NuxtLink
          class="btn btn-ghost normal-case text-xl"
          to="/"
        >
          Nuxt3 Full Examples
        </NuxtLink>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <main class="drawer-content">
        <!-- Page content here -->
        <slot/>
      </main>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li>
            <NuxtLink
              to="/use-request-headers"
              target="_blank"
            >
              useRequestHeaders
            </NuxtLink>
          </li>
          <li><a>Sidebar Item 2</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>