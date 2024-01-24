// Composable Function with ref
import { ref, isRef, unref, watchEffect } from 'vue'
import axios from 'axios'

// Get Single User Data
function getSingleUserData(url, uid) {
  const userData = ref(null)
  const error = ref(null)
  const getSingleData = async () => {
    // reset state before fetching.
    userData.value = null
    error.value = null
    try {
      // unref() returns the inner value if the argument is a ref, otherwise return the argument itself.
      const res = await axios(unref(url) + unref(uid))
      // console.log("Res:", res)
      // console.log(res.data.data)
      userData.value = res.data.data
    } catch (err) {
      error.value = err
    }
  }
  // isRef() checks if a value is a ref object.
  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(getSingleData)
  } else {
    // otherwise, just fetch once and avoid the overhead of a watcher
    getSingleData()
  }
  return { userData, error }
}

// Get All Users Data
function getAllUserData(url) {
  const usersData = ref(null)
  const errors = ref(null)
  const getAllData = async () => {
    usersData.value = null
    errors.value = null
    try {
      const res = await axios(unref(url))
      // console.log(res.data.data)
      usersData.value = res.data.data
    } catch (err) {
      errors.value = err
    }
  }
  if (isRef(url)) {
    watchEffect(getAllData)
  } else {
    getAllData()
  }
  return { usersData, errors }
}

// Post User Data
function postUserData(url, name, job) {
  const userData = ref(null)
  const errors = ref(null)
  const postData = async () => {
    try {
      const config = {
        method: 'PST',
        url: unref(url),
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name: unref(name), job: unref(job) })
      }
      const res = await axios(config)
      console.log(res)
      userData.value = res.data
    } catch (err) {
      errors.value = err
    }
  }
  if (isRef(url)) {
    watchEffect(postData)
  } else {
    postData()
  }
  return { userData, errors }
}

// Update User Data
function updateUserData(url, id, name, job) {
  const userData = ref(null)
  const error = ref(null)
  const updateData = async () => {
    try {
      const config = {
        method: 'PUT',
        url: unref(url) + unref(id),
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name: unref(name), job: unref(job) })
      }
      const res = await axios(config)
      console.log(res.data)
      userData.value = res.data
    } catch (err) {
      error.value = err
    }
  }
  if (isRef(url)) {
    watchEffect(updateData)
  } else {
    updateData()
  }
  return { userData, error }
}

// Delete User Data
function deleteUserData(url, id) {
  const userData = ref(null)
  const error = ref(null)
  const deleteData = async () => {
    try {
      const config = {
        method: 'DELETE',
        url: unref(url) + unref(id),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await axios(config)
      console.log(res)
      userData.value = res.data
    } catch (err) {
      error.value = err
    }
  }
  if (isRef(url)) {
    watchEffect(deleteData)
  } else {
    deleteData()
  }
  return { userData, error }
}


export { getSingleUserData, getAllUserData, postUserData, updateUserData, deleteUserData }