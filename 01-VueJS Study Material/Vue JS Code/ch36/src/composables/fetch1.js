// Composable Function with ref
import { ref, isRef, unref, watchEffect } from 'vue'
export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const getData = async () => {
    // reset state before fetching.
    data.value = null
    error.value = null
    try {
      // unref() returns the inner value if the argument is a ref, otherwise return the argument itself.
      const res = await fetch(unref(url))
      const resData = await res.json()
      data.value = resData
    } catch (err) {
      error.value = err
    }
  }
  // isRef() checks if a value is a ref object.
  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(getData)
  } else {
    // otherwise, just fetch once and avoid the overhead of a watcher
    getData()
  }
  return { data, error }
}
