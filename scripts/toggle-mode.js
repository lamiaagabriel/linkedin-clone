// Mode is applied when there is mode, of a toggling of mode
const setMode = () => {
  const mode = localStorage.getItem("mode") === "dark" ? "light" : "dark"
  localStorage.setItem("mode", mode)
  applyMode(mode)
}

const applyMode = (mode) => {
  if (mode === "dark") {
    document.body.classList.add("dark")
    document.body.classList.remove("light")
  } else {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
  }
}

const savedMode = localStorage.getItem("mode")
if (savedMode) applyMode(savedMode)
