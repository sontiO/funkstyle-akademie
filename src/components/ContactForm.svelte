<script>
  import * as prismicH from "@prismicio/helpers";
  export let imprint;
  export let email;
  const htmlSerializer = (type, element, content, children) => {
    if (element.data?.label === "example_label")
      return `<mark>${children}</mark>`;
  };
</script>

<h2 id="kontakt" class="mt-12">Kontakt</h2>
<div class="w-full max-w-md bg-zinc-900/30 sm:max-w-5xl">
  <div class="">
    <div class=" bg-zinc-900/30 " />
  </div>
  <div class="relative mx-auto lg:grid lg:grid-cols-5">
    <div
      class="w-full  bg-zinc-800/30 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24  xl:pr-12"
    >
      <div class="mx-auto max-w-lg">
        <h3
          class="text-2xl font-semibold tracking-tight text-gray-200 sm:text-3xl"
        >
          Impressum
        </h3>
        <dl class="mt-8 text-base text-gray-500">
          <dt class="sr-only">Imprint</dt>
          {@html prismicH.asHTML(imprint, null, htmlSerializer)}

          <!-- <div class="mt-6">
            <dt class="sr-only">Phone number</dt>
            <dd class="flex">
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="ml-3"> +1 (555) 123-4567 </span>
            </dd>
          </div> -->
          <div class="mt-3">
            <dt class="sr-only">Email</dt>
            <dd class="flex">
              <!-- Heroicon name: outline/mail -->
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span class="ml-3">
                {@html prismicH.asHTML(email, null, htmlSerializer)}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div
      class="bg-zinc-900/30  py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
    >
      <div class="mx-auto max-w-lg lg:max-w-none">
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          class="grid grid-cols-1 gap-y-6"
        >
          <input
            type="hidden"
            name="accessKey"
            value="88ddc1d5-56f5-4bf7-aaa6-a339d73549ac"
          />
          <!-- Required -->
          <div>
            <label for="full-name" class="sr-only">Full name</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autocomplete="name"
              class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Full name"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="phone" class="sr-only">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="tel"
              class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Phone"
            />
          </div>
          <div class="">
            <label for="message" class="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Message"
            />
            <!-- If we receive data in this field submission will be ignored -->
            <input type="text" name="honeypot" style="display: none;" />
            <!-- Optional -->
            <input type="hidden" name="replyTo" value="@" />
            <input
              type="hidden"
              name="redirectTo"
              value="https://example.com/contact/success"
            />
            <!-- Optional -->

            <input
              type="submit"
              value="Submit"
              class="mt-4 inline-flex justify-center rounded-md border border-transparent border-zinc-600 bg-zinc-700 py-3 px-6 text-base font-medium text-white shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
