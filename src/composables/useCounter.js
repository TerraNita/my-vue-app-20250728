// src/composables/useCounter.js
import { ref, computed } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue); // リアクティブな状態

  const increment = () => { // カウントを増やす関数
    count.value++;
  };

  const decrement = () => { // カウントを減らす関数（例として追加）
    count.value--;
  };

  const doubleCount = computed(() => count.value * 2); // 算出プロパティ

  // 外部に公開したいデータと関数を返す
  return {
    count,
    increment,
    decrement,
    doubleCount
  };
}