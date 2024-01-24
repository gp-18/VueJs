// Creating Composable Function
import { ref, onMounted, onUnmounted } from "vue";
import { faker } from "@faker-js/faker";
export function useName() {
  // state encapsulated and managed by the composable
  const firstName = ref();
  const lastName = ref();

  // a composable can update its managed state over time.
  function updateName() {
    firstName.value = faker.name.firstName();
    lastName.value = faker.name.lastName();
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener("mousemove", updateName));
  onUnmounted(() => window.removeEventListener("mousemove", updateName));

  // expose managed state as return value
  return { firstName, lastName }
}

// // Calling Composable inside Composable
// import { ref } from "vue";
// import { faker } from "@faker-js/faker";
// import { useEventListener } from "./event";
// export function useName() {
//   const firstName = ref();
//   const lastName = ref();
//   useEventListener(window, 'mousemove', () => {
//     firstName.value = faker.name.firstName();
//     lastName.value = faker.name.lastName();
//   })

//   return { firstName, lastName }
// }

