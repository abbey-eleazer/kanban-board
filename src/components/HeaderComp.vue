<script lang="ts" setup></script>

<template>
  <header class="w-[95vw] flex justify-between items-center px-4 py-8 border-b border-gray-200">
    <div class="flex items-center gap-4">
      <span>
        <img src="/Placeholder Logo.png" alt="logo" />
      </span>
      <div class=" ">
        <h1 class="text-4xl font-bold">Kanban Board Project</h1>
        <div class="flex items-center gap-4 mt-4">
          <!-- tabs  -->
          <ul class="flex items-center gap-4 bg-blue-50 p-1 rounded-3xl">
            <li class=" ">
              <router-link
                to="/"
                active-class="bg-white px-4 py-2 rounded-3xl shadow-sm text-purple-500"
                class="flex items-center gap-1 hover:bg-white hover:shadow-sm px-4 py-2 rounded-3xl"
              >
                <img src="/board-icon.png" alt="board-icon" />
                Board View
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                active-class="bg-white px-4 py-2 rounded-3xl shadow-sm text-purple-500"
                class="flex items-center gap-1 hover:bg-white hover:shadow-sm px-4 py-2 rounded-3xl"
              >
                <img src="/table-icon.png" alt="table-icon" />
                Table View
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                active-class="bg-white px-4 py-2 rounded-3xl shadow-sm text-purple-500"
                class="flex items-center gap-1 hover:bg-white hover:shadow-sm px-4 py-2 rounded-3xl"
              >
                <img src="/list-icon.png" alt="list-icon" />
                List View
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- right side of panel  -->
    <div class="">
      <!-- buttons  -->
      <div class="flex items-center justify-end gap-4">
        <router-link to="/">
          <button class="flex items-center gap-3 py-2 px-5 rounded-3xl border cursor-pointer">
            Invite
            <img src="/add-icon.png" alt="add-icon" />
          </button>
        </router-link>
        <router-link to="/">
          <button
            class="bg-[#4F46E5] text-white flex items-center gap-3 py-2 px-5 rounded-3xl cursor-pointer"
          >
            Export
            <img src="/export-icon.png" alt="export-icon" />
          </button>
        </router-link>
        <router-link to="/">
          <button
            class="bg-[#4F46E5] text-white flex items-center gap-3 py-2 px-5 rounded-3xl cursor-pointer"
          >
            Share
            <img src="/share-icon.png" alt="share-icon" />
          </button>
        </router-link>
      </div>

      <div class="flex items-center gap-8 mt-4">
        <!-- search input  -->
        <div class="flex items-center border-gray-300 border rounded-3xl py-2 px-3">
          <input type="text" placeholder="Search..." class="" />
          <img src="/search-icon.png" alt="search-icon" />
        </div>

        <!-- sort & filter -->
        <div>
          <ul class="flex">
            <li
              class="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-blue-50 rounded-3xl"
            >
              <img src="/sort-icon.png" alt="sort-icon" />
              Sort
            </li>
            <li
              class="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-blue-50 rounded-3xl"
            >
              <img src="/filter-icon.png" alt="filter-icon" />
              Filter
            </li>
          </ul>
        </div>
        <router-link to="/">
          <button
            class="bg-[#818CF8] text-white flex items-center gap-3 py-2 px-5 rounded-3xl cursor-pointer font-bold"
          >
          <img src="/add-white-icon.png" alt="add-white-icon"  class="w-5"/>
            Add Task
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>
