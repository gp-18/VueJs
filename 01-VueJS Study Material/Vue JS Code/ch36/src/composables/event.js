import { onMounted, onUnmounted } from 'vue'
export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener("mousemove", callback));
  onUnmounted(() => target.removeEventListener("mousemove", callback));
}